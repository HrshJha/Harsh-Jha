export interface HeroCta {
  readonly label: string;
  readonly href: string;
  readonly download?: string | boolean;
}

export interface HeroCtas {
  readonly primary: HeroCta;
  readonly secondary: HeroCta;
}
