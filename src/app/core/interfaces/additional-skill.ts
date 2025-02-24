export interface AdditionalSkill {
  additionalSkillId: string;
  image: string;
  userId: string;
  title: string;
  keys: AdditionalSkillKey[];
}

export interface AdditionalSkillKey{
  additionalSkillKeyId: string;
  key: string;
}

