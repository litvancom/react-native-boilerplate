import { useCallback, useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import { useGlobalContextDispatch } from '../../contexts/GlobalContext';

interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ISignInData {
  email: string;
  password: string;
}

export function useBLSignUp() {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), { loading: false, error: null, success: undefined });

  const signUp = useCallback(async (data: ISignUpData) => {
    setState({ loading: true });
    await AsyncStorage.setItem(data.email, JSON.stringify(data));
    setState({ loading: false, success: true });
  }, []);

  return {
    signUp,
    loading: state.loading,
    error: state.error,
    success: state.success
  };
}

export function useBLSignIn() {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: undefined,
    success: undefined,
    data: undefined
  });

  const dispatch = useGlobalContextDispatch();

  const signIn = useCallback(async (data: ISignInData) => {
    setState({ loading: true });
    const res = await AsyncStorage.getItem(data.email);
    if (res) {
      await AsyncStorage.setItem('userToken', data.email);
      setState({ loading: false, success: true, data: JSON.parse(res) });
    } else {
      let error = 'Login failed';
      setState({ loading: false, success: false, error });
      dispatch({ error, type: 'error' });
    }
  }, []);

  return {
    signIn: signIn,
    loading: state.loading,
    error: state.error,
    success: state.success,
    data: state.data
  };
}
