import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input';
import { IFilterProps } from '../../interfaces';

function FilterContacts({ value, handlerInput }: IFilterProps): JSX.Element {
  return (
    <Box>
      <Input
        value={value}
        placeholder="Search or start new chat"
        handlerInput={handlerInput}
        use="filterContacts"
      />
      <AiOutlineSearch />
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  margin-top: 32px;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    width: 18px;
    height: 18px;
    fill: #939393;
    transform: translateY(-50%);
  }
`;

export default FilterContacts;
