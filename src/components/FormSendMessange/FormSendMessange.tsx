import { FormEvent } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import ButtonSend from '../ButtonSend';
import useInput from '../../hooks/useInput';

function FormSendMessange({
  handlerMessage,
}: {
  handlerMessage(value: string): void;
}): JSX.Element {
  const { value, setValue, handlerInput } = useInput('' as string);

  const sendMessange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerMessage(value);
    setValue('');
  };

  return (
    <Form onSubmit={sendMessange}>
      <Input
        value={value}
        placeholder="Type your message"
        required
        handlerInput={handlerInput}
        use="formSend"
      />
      <ButtonSend />
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  padding: 15px;
  background-color: #f5f5f5;

  @media screen and (min-width: 450px) {
    padding: 30px;
  }
`;

export default FormSendMessange;
