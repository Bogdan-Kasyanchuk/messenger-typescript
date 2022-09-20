import { useState, ChangeEvent } from 'react';
import { IReturnUseInput } from '../interfaces/IReturnUseInput';

const useInput = (defaultValue: string): IReturnUseInput => {
  const [value, setValue] = useState<string>(defaultValue);

  const handlerInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return { value, setValue, handlerInput };
};

export default useInput;
