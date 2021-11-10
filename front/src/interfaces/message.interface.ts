export interface MessageI {
  id: string;
  topic: string;
  isFavourite: boolean;
  isUnread: boolean;
  from: string;
  date: Date;
}
