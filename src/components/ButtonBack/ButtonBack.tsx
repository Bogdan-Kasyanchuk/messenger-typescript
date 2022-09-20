import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { GoArrowLeft } from 'react-icons/go';

function ButtonBack({
  hundlerButton,
}: {
  hundlerButton: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <Button type="button" aria-label="back" onClick={hundlerButton}>
      <GoArrowLeft />
    </Button>
  );
}

export default ButtonBack;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: #3c4252;
  background-color: transparent;

  :focus-visible {
    border-radius: 10px;
    outline: 1px solid #3c4252;
  }

  svg {
    width: 31px;
    height: 31px;
    pointer-events: none;
  }
`;
