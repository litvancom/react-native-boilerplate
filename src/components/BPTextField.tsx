import React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { FormikProps, useField, useFormikContext } from 'formik';
import { TextInputProps } from 'react-native';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { RouteKeys } from '../resources/constants';

interface Props extends TextInputProps {
  name: string;
  nextName?: string;
  refs?: React.MutableRefObject<Map<string, any>>;
  lowercased?: boolean;
  label?: string;
}

function BPTextField({ name, refs, ...props }: Props) {
  const [field, meta, helpers] = useField(name);

  const onSubmitEditing =
    !props.onSubmitEditing && refs && props.nextName
      ? () => {
          return _.invoke(refs.current.get(props.nextName), 'focus');
        }
      : null;
  const { t } = useTranslation('fields');
  const label = props.label ? props.label : _.upperFirst(t(name));

  return (
    <>
      <TextInput
        ref={ref => refs.current.set(name, ref)}
        mode="outlined"
        returnKeyType={'next'}
        autoCorrect={false}
        label={label}
        onSubmitEditing={onSubmitEditing}
        {...props}
        value={field.value}
        onChangeText={text => {
          helpers.setValue(props.lowercased ? text.toLowerCase() : text);
        }}
        onBlur={field.onBlur(name)}
        error={!!(meta.touched && meta.error)}
      />

      <HelperText type="error" visible={!!(meta.touched && meta.error)}>
        {meta.error}
      </HelperText>
    </>
  );
}

export default BPTextField;
