import ContactItem from '../ContactItem';
import useContextCustom from '../../hooks/useContextCustom';
import getTime from '../../helpers/getTime';
import {
  IContext,
  IContactsListProps,
  IContactItemProps,
  IMessage,
} from '../../interfaces';

const ContactsList = ({
  filteredContacts,
  setIdContact,
}: IContactsListProps) => {
  const { messages } = useContextCustom() as IContext;

  const sortFilteredContacts: IContactItemProps['el'][] = filteredContacts
    .map(elem => {
      const arrayMessages: IMessage[] = messages.filter(
        el => el.idOwner === elem.id,
      );
      const arrayDateMessages: number[] = arrayMessages.map(el =>
        getTime(el.date),
      );
      const arrayNotReadMessages: IMessage[] = arrayMessages.filter(
        el => el.read === false,
      );
      const maxDateMessages = arrayMessages.find(
        el => getTime(el.date) === Math.max(...arrayDateMessages),
      ) as IMessage;
      return {
        id: elem.id,
        name: elem.name,
        avatar: elem.avatar,
        status: elem.status,
        notRead: arrayNotReadMessages.length,
        message: maxDateMessages,
      };
    })
    .sort((a, b) => getTime(b.message.date) - getTime(a.message.date));

  return (
    <ul onClick={setIdContact}>
      {sortFilteredContacts.map(el => (
        <ContactItem key={el.id} el={el} />
      ))}
    </ul>
  );
};

export default ContactsList;
