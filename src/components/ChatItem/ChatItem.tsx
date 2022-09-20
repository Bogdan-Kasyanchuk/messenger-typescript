import styled from 'styled-components';
import Avatar from '../Avatar';
import getLocaleDate from '../../helpers/getLocaleDate';
import { IChatItemProps } from '../../interfaces/IChatItemProps';

function ChatItem({ el, avatar, name }: IChatItemProps): JSX.Element {
  const localeDate = getLocaleDate(el.date, {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Item data-id={el.id} owner={el.owner}>
      {el.owner === 'interlocutor' && <Avatar src={avatar} alt={name} />}
      <BoxContent owner={el.owner}>
        <Message owner={el.owner}>{el.body}</Message>
        <Time>{localeDate}</Time>
      </BoxContent>
    </Item>
  );
}

export default ChatItem;

const Item = styled.li<{ owner: string }>`
  display: flex;
  justify-content: ${({ owner }) =>
    owner === 'interlocutor' ? 'flex-start' : 'flex-end'};
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;

  div:first-child {
    margin-right: ${({ owner }) => (owner === 'interlocutor' ? '10px' : null)};
  }
`;

const BoxContent = styled.div<{ owner: string }>`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: ${({ owner }) =>
    owner === 'interlocutor' ? 'flex-start' : 'flex-end'};
`;

const Message = styled.p<{ owner: string }>`
  margin-bottom: 12px;
  padding: 17px 15px;
  font-size: 18px;
  color: ${({ owner }) => (owner === 'interlocutor' ? '#fff' : '#3c4252')};
  line-height: 1.1;
  border-radius: 22px;
  background-color: ${({ owner }) =>
    owner === 'interlocutor' ? '#3c4252' : '#e0e0e0'};
`;

const Time = styled.time`
  padding-left: 15px;
  font-size: 14px;
  color: #939393;
`;
