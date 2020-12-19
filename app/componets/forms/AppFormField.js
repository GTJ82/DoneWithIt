import React from 'react';
import { useFormikContext } from 'formik';


import ErrorMessage from '../forms/ErrorMessage';
import AppTextInput from '../AppTextInput';

function AppFormField({ name, ...otherProps }) {

    const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;