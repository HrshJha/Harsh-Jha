# clar.credentials -- Clario Credential Vault helper
# Usage: from clar.credentials import get_credential, has_credential
import json
import os
from pathlib import Path

_CREDS_CACHE = None


def _credentials_file():
    explicit_path = os.environ.get("CLAR_CREDENTIALS_FILE")
    if explicit_path:
        return Path(explicit_path).expanduser()

    workspace = Path(os.environ.get("CLAR_WORKSPACE", os.getcwd()))
    return workspace / ".clario" / "daemon" / "credentials.json"


def _read_json_file(path):
    try:
        with path.open() as f:
            return json.load(f)
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError:
        return {}


def _normalize_credentials(raw):
    if not isinstance(raw, dict):
        return {}

    # Support both {"example.com": {...}} and {"credentials": {...}} shapes.
    credentials = raw.get("credentials", raw)
    if not isinstance(credentials, dict):
        return {}
    return credentials


def _load():
    global _CREDS_CACHE
    if _CREDS_CACHE is None:
        env_raw = os.environ.get("CLAR_CREDENTIALS")
        if env_raw:
            try:
                _CREDS_CACHE = _normalize_credentials(json.loads(env_raw))
            except json.JSONDecodeError:
                _CREDS_CACHE = {}
        else:
            _CREDS_CACHE = _normalize_credentials(_read_json_file(_credentials_file()))
    return _CREDS_CACHE


def reload_credentials():
    """Clear the in-process cache and reload credentials on the next access."""
    global _CREDS_CACHE
    _CREDS_CACHE = None


def _normalize_domain(domain):
    return domain.lower().strip().removeprefix("https://").removeprefix("http://").removeprefix("www.").split("/")[0]


def get_credential(domain):
    """Get credential for a domain.

    Returns dict with: username, password, loginUrl, loginSelectors
    or None if not found. Supports partial domain matching.
    """
    domain = _normalize_domain(domain)
    creds = _load()
    if domain in creds:
        return creds[domain]
    for stored_domain, cred in creds.items():
        stored_domain = _normalize_domain(stored_domain)
        if domain.endswith(stored_domain) or stored_domain.endswith(domain):
            return cred
    return None


def has_credential(domain):
    """Check if a credential exists for the given domain."""
    return get_credential(domain) is not None


def get_all_credentials():
    """Get all available credentials as {domain: {username, password, ...}}."""
    return _load()
