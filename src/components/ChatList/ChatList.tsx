import ChatItem from '../ChatItem';
import useContextCustom from '../../hooks/useContextCustom';
import { IContext } from '../../interfaces';

const ChatList = (): JSX.Element => {
  const { contacts, indexCheckedContact, messages } =
    useContextCustom() as IContext;

  return (
    <ul>
      {messages.map(
        el =>
          el.idOwner === contacts[indexCheckedContact].id && (
            <ChatItem
              key={el.id}
              el={el}
              avatar={contacts[indexCheckedContact].avatar}
              name={contacts[indexCheckedContact].name}
            />
          ),
      )}
    </ul>
  );
};

export default ChatList;
