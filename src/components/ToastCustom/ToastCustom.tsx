import styled from 'styled-components';
import { IToastCustomProps } from '../../interfaces';

function ToastCustom({
  avatar,
  name,
  message,
}: IToastCustomProps): JSX.Element {
  return (
    <BoxToast>
      <Image src={avatar} alt={name} />
      <BoxContent>
        <Name>{name}</Name>
        <Message>{message}</Message>
      </BoxContent>
    </BoxToast>
  );
}

export default ToastCustom;

const BoxToast = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 22px;
  background-color: #44ae66;
`;

const Image = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
`;

const Name = styled.span`
  font-size: 18px;
  color: #fff;
`;

const Message = styled.span`
  color: #3c4252;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
