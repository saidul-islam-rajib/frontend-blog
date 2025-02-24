export interface AdditionalSkill {
  additionalSkillId: string;
  logo: string;
  userId: string;
  title: string;
  keys: AdditionalSkillKey[];
}

export interface AdditionalSkillKey{
  additionalSkillKeyId: string;
  key: string;
}

