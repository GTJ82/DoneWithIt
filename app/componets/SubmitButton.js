import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../componets/AppButton';


function SubmitButton({ title }) {

    const { handleSubmit } = useFormikContext();

    return (

        <AppButton
            type={title}
            onPress={handleSubmit}
        />
    )
}

export default SubmitButton;