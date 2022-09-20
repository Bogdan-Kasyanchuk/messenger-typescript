import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorage = <T>(
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const messages: string | null = localStorage.getItem('messages');
  const [state, setState] = useState<T>(() =>
    messages !== null ? JSON.parse(messages) : defaultValue,
  );

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
