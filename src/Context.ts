import { createContext } from 'react';
import { IContext } from './interfaces/IContext';

const Context = createContext<IContext | null>(null);

export default Context;
