export interface Interest {
  interestId: string;
  image: string;
  userId: string;
  title: string;
  keys: InterestKey[];
}

export interface InterestKey{
  interestKeyId: string;
  key: string;
}
