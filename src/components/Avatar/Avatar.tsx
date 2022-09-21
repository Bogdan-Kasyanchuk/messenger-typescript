import styled from 'styled-components';
import { CgCheckO, CgRemove } from 'react-icons/cg';
import notAvatar from '../../assets/img/notAvatar.png';
import { IAvatarProps } from '../../interfaces';

function Avatar({ src, alt, status }: IAvatarProps): JSX.Element {
  const avatarUrl = src ? src : notAvatar;

  return (
    <BoxAvatar>
      <Image src={avatarUrl} alt={alt} />
      {status && (
        <Status status={status}>
          {status === 'online' ? <CgCheckO /> : <CgRemove />}
        </Status>
      )}
    </BoxAvatar>
  );
}

export default Avatar;

const BoxAvatar = styled.div`
  position: relative;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Status = styled.span<{ status: string }>`
  position: absolute;
  right: -3px;
  bottom: -3px;
  color: ${({ status }) => (status === 'online' ? '#44AE66' : '#ff0000')};
  line-height: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;
