import useInput from '../hooks/useInput';
import { IContact, IReturnUseFilter } from '../interfaces';

const useFilter = (contacts: IContact[]): IReturnUseFilter => {
  const { value, handlerInput } = useInput('' as string);

  const getFilterContacts = (): IContact[] => {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(value.toLowerCase().trim()),
    );
  };

  const filteredContacts: IContact[] = value ? getFilterContacts() : contacts;

  return { value, handlerInput, filteredContacts };
};

export default useFilter;
