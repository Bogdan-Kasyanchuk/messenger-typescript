import { useContext } from 'react';
import Context from '../Context';
import { IContext } from '../interfaces';

const useContextCustom = () => useContext<IContext | null>(Context);

export default useContextCustom;
