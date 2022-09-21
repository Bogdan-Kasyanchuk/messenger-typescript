import styled from 'styled-components';
import { IInputProps } from '../../interfaces';

function Input({
  value,
  placeholder = '',
  required = false,
  handlerInput,
  use,
}: IInputProps): JSX.Element {
  return (
    <InputTag
      autoComplete="off"
      type="text"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={handlerInput}
      use={use}
    />
  );
}

const InputTag = styled.input<{ use: string }>`
  width: 100%;
  padding: ${({ use }) =>
    use === 'formSend' ? '15px 55px 15px 15px' : '12px 12px 12px 38px'};
  font-family: ${({ use }) =>
    use === 'formSend' ? 'inherit' : 'Lato, sans-serif'};
  font-size: ${({ use }) => (use === 'formSend' ? '20px' : '18px')};
  color: #3c4252;
  letter-spacing: ${({ use }) => (use === 'formSend' ? 'normal' : '-0.5px')};
  border: 1px solid #dcdcdc;
  border-radius: 22px;
  background-color: #fafafa;

  @media screen and (min-width: 450px) {
    padding: ${({ use }) =>
      use === 'formSend' ? '20px 60px 20px 20px' : '12px 12px 12px 38px'};
  }

  ::placeholder {
    color: #939393;
    letter-spacing: ${({ use }) => (use === 'formSend' ? 'normal' : '-0.5px')};
  }

  :focus {
    border-color: #3c4252;
    outline: none;
  }
`;

export default Input;
