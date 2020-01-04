import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RouteKeys } from './constants';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
};

let resources = {
  en: {
    common: {
      submit: 'Submit'
    },
    validation: {
      required: '{{path}} is required field',
      matchPasswords: 'Passwords must match',
      email: '{{path}} must be a valid email'
    },
    fields: {
      firstName: 'First name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      repeatPassword: 'repeatPassword'
    },
    [RouteKeys.SignIn]: {
      signIn: 'Login',
      signUp: 'Sign Up',
      title: `$t(${RouteKeys.SignIn}:signIn)`
    },
    [RouteKeys.SignUp]: {
      submit: '$t(common:submit)',
      title: `$t(${RouteKeys.SignIn}:signUp)`
    }
  },
  ru: {
    common: {
      submit: 'Отправить'
    },
    fields: {
      email: 'Email',
      password: 'Пароль',
      firstName: 'Имя',
      lastName: 'Фамилия',
      repeatPassword: 'Подтвердите пароль'
    },
    [RouteKeys.SignIn]: {
      signIn: 'Вход',
      signUp: 'Регистрация'
    },
    [RouteKeys.SignUp]: {
      submit: '$t(common:submit)'
    }
  }
};

i18next
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    react: {
      useSuspense: false
    },
    resources
  });
