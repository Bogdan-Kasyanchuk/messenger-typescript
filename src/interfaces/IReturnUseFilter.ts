import { ChangeEvent } from 'react';
import { IContact } from './IContact';

export interface IReturnUseFilter {
  value: string;
  handlerInput: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredContacts: IContact[];
}
