import { ChangeEventHandler } from 'react';

export interface IInputProps {
  value: string;
  placeholder?: string;
  required?: boolean;
  handlerInput: ChangeEventHandler<HTMLInputElement>;
  use: string;
}
