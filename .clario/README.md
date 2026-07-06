# Clario local helpers

This folder is not the portfolio backend. It is a local Python helper SDK used by Clario tooling.

## Setup

```bash
python3 -m pip install --user -r .clario/requirements.txt
python3 -m playwright install chromium
```

Use the package from this repo with:

```bash
PYTHONPATH=.clario/lib python3 -c "from clar.market import Ticker; print(Ticker('AAPL').info.get('symbol'))"
```

## Credentials

`clar.credentials` first reads `CLAR_CREDENTIALS` when your IDE injects it. If that is not set, it falls back to:

```text
.clario/daemon/credentials.json
```

Supported credential file shapes:

```json
{
  "example.com": {
    "username": "name",
    "password": "secret",
    "loginUrl": "https://example.com/login",
    "loginSelectors": {}
  }
}
```

or:

```json
{
  "credentials": {
    "example.com": {
      "username": "name",
      "password": "secret"
    }
  }
}
```
