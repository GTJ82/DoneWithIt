import React from 'react';
import * as Yup from 'yup'

import Screen from '../componets/Screen';
import { AppFormField, AppFormPicker, AppForm } from '../componets/forms';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
]

function ListingEditScreen(props) {
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="Price"
            />
            <AppFormPicker
                items={categories}
                name="category"
                placeholder="Category"
            />
            <AppFormField
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}
                placeholder="Description"
            />
        </Screen>
    );
}

export default ListingEditScreen;