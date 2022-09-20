import { MouseEventHandler } from 'react';
import { IContact } from './IContact';

export interface IContactsListProps {
  filteredContacts: IContact[];
  setIdContact: MouseEventHandler<HTMLUListElement>;
}
