import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface IReturnUseInput {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handlerInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
