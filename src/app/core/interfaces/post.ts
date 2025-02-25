export interface Post {
  postId: string;
  postTitle: string;
  postAbstract: string;
  conclusion: string;
  readingMinute: number;
  sections: PostSection[];
  topicIds: PostTopic[];
  userId: string;
  createdDateTime: string;
  updatedDateTime: string;
}

export interface PostSection {
  sectionId: string;
  sectionTitle: string;
  sectionImage: string;
  sectionDescription: string;
  items: SectionItem[];
}

export interface SectionItem {
  itemId: string;
  itemTitle: string;
  itemDescription: string;
  itemImage: string;
}

export interface PostTopic {
  topicId: string;
  topicTitle: string;
}
