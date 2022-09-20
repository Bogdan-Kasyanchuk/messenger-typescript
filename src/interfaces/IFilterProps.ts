import { ChangeEventHandler } from 'react';

export interface IFilterProps {
  value: string;
  handlerInput: ChangeEventHandler<HTMLInputElement>;
}
