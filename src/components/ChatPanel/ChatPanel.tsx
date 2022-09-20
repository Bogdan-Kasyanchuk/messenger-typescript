/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import useSound from 'use-sound';
import toast from 'react-hot-toast';
import User from '../User';
import ButtonBack from '../ButtonBack';
import ChatList from '../ChatList';
import FormSendMessange from '../FormSendMessange';
import StartVieWChat from '../StartVieWChat';
import ToastCustom from '../ToastCustom';
import useContextCustom from '../../hooks/useContextCustom';
import { getJokes } from '../../service/jokesAPI';
import scrollBottom from '../../helpers/scrollBottom';
import CreateMessage from '../../helpers/CreateMessage';
import newMessage from '../../assets/newMessage.mp3';
import { IContext } from '../../interfaces/IContext';
import { IMessage } from '../../interfaces/IMessage';

function ChatPanel(): JSX.Element {
  const [isSend, setIsSend] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [play] = useSound<any>(newMessage);
  const chatContainer = useRef<HTMLDivElement>(null);
  const {
    contacts,
    indexCheckedContact,
    setIndexCheckedContact,
    messages,
    setMessages,
  } = useContextCustom() as IContext;

  useEffect(() => {
    window.addEventListener('keydown', onClickKeyDown as () => void);
    return () => {
      window.removeEventListener('keydown', onClickKeyDown as () => void);
    };
  });

  const onClickKeyDown = (e: KeyboardEvent<Element>): void => {
    if (e.code === 'Escape') {
      setIndexCheckedContact(-1);
    }
  };

  const onClickButtonBack = (e: MouseEvent<HTMLButtonElement>): void => {
    if ((e.target as HTMLButtonElement).nodeName === 'BUTTON') {
      setIndexCheckedContact(-1);
    }
  };

  const addMessage = (value: string, user: string = 'user'): void => {
    const message: IMessage = new CreateMessage(
      value,
      contacts[indexCheckedContact].id,
      user,
    );
    if (message.owner === 'interlocutor') {
      play();
      toast.custom(
        <ToastCustom
          avatar={contacts[indexCheckedContact].avatar}
          name={contacts[indexCheckedContact].name}
          message={message.body}
        />,
      );
    }
    setMessages(prev => [...prev, message]);
    if (message.owner === 'user') {
      setIsSend(true);
      setIsScroll(prev => !prev);
    }
  };

  useEffect(() => {
    if (!isSend) return;
    if (contacts[indexCheckedContact].status === 'online') {
      const idTimeOut: number = window.setTimeout(() => {
        getJokes()
          .then(data => {
            addMessage(data, 'interlocutor');
          })
          .then(() => setIsScroll(prev => !prev))
          .catch(error => console.log(error.message));
        clearTimeout(idTimeOut);
      }, 10000);
    }
    setIsSend(false);
  }, [isSend]);

  useEffect(() => {
    if (!chatContainer.current) return;
    scrollBottom(chatContainer);
    setReadMessage();
  }, [isScroll, indexCheckedContact]);

  const setReadMessage = (): void => {
    const copyMessages: IMessage[] = messages.map(el => {
      if (
        el.idOwner === contacts[indexCheckedContact].id &&
        el.read === false
      ) {
        return {
          ...el,
          read: true,
        };
      } else {
        return el;
      }
    });
    setMessages(copyMessages);
  };

  return (
    <BoxChatPanel>
      {contacts[indexCheckedContact] ? (
        <>
          <Header>
            <User
              avatar={contacts[indexCheckedContact].avatar}
              name={contacts[indexCheckedContact].name}
              status={contacts[indexCheckedContact].status}
            />
            <Media
              query="(max-width: 767px)"
              render={() => <ButtonBack hundlerButton={onClickButtonBack} />}
            />
          </Header>
          <BoxChatList ref={chatContainer}>
            <ChatList />
          </BoxChatList>
          <FormSendMessange handlerMessage={addMessage} />
        </>
      ) : (
        <StartVieWChat />
      )}
    </BoxChatPanel>
  );
}

export default ChatPanel;

const BoxChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  border-left: 1px solid #dcdcdc;

  @media screen and (min-width: 768px) {
    flex-basis: 65%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dcdcdc;
  background-color: #f5f5f5;
`;

const BoxChatList = styled.div`
  flex: 1 1 auto;
  padding: 5px 15px;
  border-bottom: 1px solid #dcdcdc;
  overflow-y: auto;
`;
