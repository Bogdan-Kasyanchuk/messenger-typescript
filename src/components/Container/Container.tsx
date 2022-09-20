import { ReactNode } from 'react';
import styled from 'styled-components';

function Container({ children }: { children: ReactNode }): JSX.Element {
  return <Box>{children}</Box>;
}

export default Container;

const Box = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
`;
