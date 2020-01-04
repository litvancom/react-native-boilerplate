import * as React from 'react';

interface Action {
  type: 'error';
  error?: string;
}

type Dispatch = (action: Action) => void;
type State = { error: string | undefined };
type GlobalProviderProps = { children: React.ReactNode };
const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'error': {
      return { ...state, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalContextProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = React.useReducer(globalReducer, { error: undefined });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

function useGlobalContextState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalContextState must be used within a GlobalContextProvider');
  }
  return context;
}

function useGlobalContextDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalContextDispatch must be used within a GlobalContextProvider');
  }
  return context;
}

export { GlobalContextProvider, useGlobalContextState, useGlobalContextDispatch };
