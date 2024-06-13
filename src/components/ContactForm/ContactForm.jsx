import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'At least 3 characters')
      .max(50, 'At least 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'At least 3 characters')
      .max(50, 'At least 50 characters or less')
      .required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={css.container} >
      <label htmlFor="name">Name</label>
        <Field type="text" name="name"></Field>
        <ErrorMessage name="name" component="span"/>

      <label htmlFor="number">Number</label>
        <Field type="text" name="number"></Field>
        <ErrorMessage name="number" component="span"/>

      <button className={css.addBtn} type="submit">Add contact</button>
    </Form>
    </Formik>
  )
}

export default ContactForm
