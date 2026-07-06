export interface Vision {
  readonly primaryGoal: string;
  readonly secondaryGoal: string;
}

export interface Identity {
  readonly name: string;
  readonly degreeShortForm: string;
  readonly institution: string;
  readonly graduationYear: number;
  readonly currentCgpa: number;
  readonly headline: string;
  readonly heroStatement: string;
  readonly coreMessage: string;
  readonly mission: string;
  readonly vision: Vision;
  readonly focusAreas: readonly string[];
  readonly engineeringPhilosophy: readonly string[];
  readonly coreValues: readonly string[];
}
