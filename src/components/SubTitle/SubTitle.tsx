import { ReactNode } from 'react';
import styled from 'styled-components';

function SubTitle({ children }: { children: ReactNode }): JSX.Element {
  return <Text>{children}</Text>;
}

export default SubTitle;

const Text = styled.h2`
  padding: 40px 0 40px 15px;
  font-size: 26px;
  color: #91dcfc;
`;
