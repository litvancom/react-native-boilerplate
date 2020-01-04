import React, { useCallback, useReducer, useRef, useState } from 'react';
import Layout from '../components/Layout';
import { AsyncStorage, View } from 'react-native';
import { Formik } from 'formik';
import { signUpValidationSchema } from '../resources/validationSchemas';
import { NavigationInjectedProps } from 'react-navigation';
import BPTextField from '../components/BPTextField';
import { RouteKeys } from '../resources/constants';
import { useBLSignUp } from '../hooks/business-logic/auth';
import { Button, useTheme } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/src/styles/colors';

interface Props extends NavigationInjectedProps {}

function SignUpScreen(props: Props) {
  const refs = useRef(new Map());
  const { signUp, success } = useBLSignUp();
  const theme = useTheme();

  if (success) {
    props.navigation.navigate(RouteKeys.SignIn);
  }

  return (
    <Layout>
      <View style={{ padding: 10 }}>
        <Formik
          initialValues={{
            firstName: 'test',
            lastName: 'test',
            email: 'test@test.com',
            password: 'test',
            repeatPassword: 'test'
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={signUp}
        >
          {formik => (
            <>
              <BPTextField refs={refs} name={'firstName'} nextName={'lastName'} />
              <BPTextField refs={refs} name={'lastName'} nextName={'email'} />
              <BPTextField refs={refs} name={'email'} nextName={'password'} />
              <BPTextField refs={refs} name={'password'} secureTextEntry nextName={'repeatPassword'} />
              <BPTextField
                refs={refs}
                onSubmitEditing={formik.handleSubmit as any}
                returnKeyType={'go'}
                secureTextEntry
                name={'repeatPassword'}
              />
              <Button
                icon={'account-plus'}
                contentStyle={{ height: 40 }}
                mode="contained"
                onPress={formik.handleSubmit}
              >
                Submit
              </Button>
            </>
          )}
        </Formik>
      </View>
    </Layout>
  );
}

export default SignUpScreen;
