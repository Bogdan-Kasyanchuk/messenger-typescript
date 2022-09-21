import { ChangeEvent } from 'react';
import { IContact } from './';

export interface IReturnUseFilter {
  value: string;
  handlerInput: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredContacts: IContact[];
}
