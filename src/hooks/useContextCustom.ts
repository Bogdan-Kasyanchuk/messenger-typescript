import { useContext } from 'react';
import Context from '../Context';
import { IContext } from '../interfaces/IContext';

const useContextCustom = () => useContext<IContext | null>(Context);

export default useContextCustom;
