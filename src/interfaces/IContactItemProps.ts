import { IMessage } from './';

export interface IContactItemProps {
  el: {
    id: string;
    name: string;
    avatar: string;
    status: string;
    notRead: number;
    message: IMessage;
  };
}
