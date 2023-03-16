import { createContext, useReducer, Dispatch } from 'react';

import filterReducer from './filterReducer';

type Action = { type: string; payload: string };

type FilterDispatch = Dispatch<Action>;

export const dispatchContext = createContext<FilterDispatch>({ type: '', payload: '' });
export const filterContext = createContext('');

const initialState = '전체';

export default function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedRegion, dispatch] = useReducer(filterReducer, initialState);

  return (
    <filterContext.Provider value={selectedRegion}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </filterContext.Provider>
  );
}
