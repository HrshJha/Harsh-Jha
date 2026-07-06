export interface HeroCta {
  readonly label: string;
  readonly href: string;
}

export interface HeroCtas {
  readonly primary: HeroCta;
  readonly secondary: HeroCta;
}
