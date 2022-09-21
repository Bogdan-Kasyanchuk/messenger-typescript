import { MouseEventHandler } from 'react';
import { IContact } from './';

export interface IContactsListProps {
  filteredContacts: IContact[];
  setIdContact: MouseEventHandler<HTMLUListElement>;
}
