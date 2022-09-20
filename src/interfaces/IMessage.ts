export interface IMessage {
  body: string;
  date: string;
  id: string;
  idOwner: string;
  owner: string;
  read?: boolean;
}
