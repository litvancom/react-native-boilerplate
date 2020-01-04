import React, { useRef } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';
import { NavigationInjectedProps } from 'react-navigation';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { Formik, useFormik } from 'formik';
import { loginValidationSchema } from '../resources/validationSchemas';
import { RouteKeys } from '../resources/constants';
import BPTextField from '../components/BPTextField';
import { useBLSignIn } from '../hooks/business-logic/auth';

interface Props extends NavigationInjectedProps {}

interface FormValues {
  email: string;
  password: string;
}

function SignInScreen(props: Props) {
  const refs = useRef(new Map());
  const { signIn, error, success } = useBLSignIn();

  if (success) {
    props.navigation.navigate(RouteKeys.AuthLoading);
  }

  return (
    <Layout>
      <Formik
        initialValues={{
          email: 'test@test.com',
          password: 'test'
        }}
        validationSchema={loginValidationSchema}
        onSubmit={signIn}
      >
        {formik => (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Logo</Text>
            </View>
            <View style={styles.formContainer}>
              <BPTextField lowercased refs={refs} nextName={'password'} name={'email'} />
              <BPTextField
                refs={refs}
                returnKeyType={'go'}
                onSubmitEditing={formik.handleSubmit as any}
                name={'password'}
                secureTextEntry
              />
              <View style={styles.buttonsContainer}>
                <Button
                  icon="account-plus"
                  mode={'outlined'}
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                  onPress={() => {
                    props.navigation.navigate(RouteKeys.SignUp);
                  }}
                >
                  Sign Up
                </Button>
                <View style={styles.buttonSpacer} />
                <Button
                  icon={'login'}
                  style={styles.button}
                  mode="contained"
                  onPress={formik.handleSubmit}
                  contentStyle={styles.buttonContent}
                >
                  Login
                </Button>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  input: {},
  logoContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    fontSize: 26
  },
  formContainer: {
    padding: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1
  },
  buttonContent: {
    height: 50
  },
  buttonSpacer: {
    width: '10%'
  }
});

export default SignInScreen;
