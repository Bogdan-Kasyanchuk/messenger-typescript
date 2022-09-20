import styled from 'styled-components';
import Avatar from '../Avatar';
import { IUserProps } from '../../interfaces/IUserProps';

function User({ avatar, name, status }: IUserProps): JSX.Element {
  return (
    <BoxAvatar>
      <Avatar src={avatar} alt={name} status={status} />
      <Name>{name}</Name>
    </BoxAvatar>
  );
}

export default User;

const BoxAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  margin-left: 20px;
  font-size: 26px;
`;
