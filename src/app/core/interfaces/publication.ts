export interface Publication {
  publicationId: string;
  image: string;
  userId: string;
  title: string;
  summary: string;
  journalName: string;
  date: Date;
  keys: PublicationKey[];
}

export interface PublicationKey{
  publicationKeyId: string;
  key: string;
}
