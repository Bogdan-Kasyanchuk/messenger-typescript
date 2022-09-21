import { useState } from 'react';
import Media from 'react-media';
import { Toaster } from 'react-hot-toast';
import Container from './components/Container';
import MainPanel from './components/MainPanel';
import ChatPanel from './components/ChatPanel';
import Context from './Context';
import useLocalStorage from './hooks/useLocalStorage';
import contactsData from './data/contacts.json';
import messagesData from './data/messages.json';
import { IContact, IMessage } from './interfaces';

function App(): JSX.Element {
  const [contacts] = useState<IContact[]>(contactsData);
  const [indexCheckedContact, setIndexCheckedContact] = useState<number>(-1);
  const [messages, setMessages] = useLocalStorage<IMessage[]>(messagesData);

  return (
    <>
      <Container>
        <Context.Provider
          value={{
            contacts,
            indexCheckedContact,
            setIndexCheckedContact,
            messages,
            setMessages,
          }}
        >
          <Media query="(max-width: 767px)">
            {matches =>
              matches ? (
                indexCheckedContact !== null && indexCheckedContact >= 0 ? (
                  <ChatPanel />
                ) : (
                  <MainPanel />
                )
              ) : (
                <>
                  <MainPanel />
                  <ChatPanel />
                </>
              )
            }
          </Media>
        </Context.Provider>
      </Container>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
