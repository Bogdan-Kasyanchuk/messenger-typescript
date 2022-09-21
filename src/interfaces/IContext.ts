import { Dispatch, SetStateAction } from 'react';
import { IContact, IMessage } from './';

export interface IContext {
  contacts: IContact[];
  indexCheckedContact: number;
  setIndexCheckedContact: Dispatch<SetStateAction<number>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}
