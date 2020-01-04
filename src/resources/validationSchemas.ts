import * as Yup from 'yup';
import i18next from 'i18next';

const message = (type: 'required' | 'matchPasswords' | 'email') => ({ path }: any) => {
  return i18next.t(`validation:${type}`, { path: i18next.t(`fields:${path}`) });
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email(message('email'))
    .required(message('required')),
  password: Yup.string().required(message('required'))
});

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], message('matchPasswords'))
    .required()
});
