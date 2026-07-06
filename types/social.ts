export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly socialLinks: readonly SocialLink[];
}
