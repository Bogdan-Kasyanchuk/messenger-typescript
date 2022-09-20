import { Dispatch, SetStateAction } from 'react';
import { IContact } from './IContact';
import { IMessage } from './IMessage';

export interface IContext {
  contacts: IContact[];
  indexCheckedContact: number;
  setIndexCheckedContact: Dispatch<SetStateAction<number>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}
