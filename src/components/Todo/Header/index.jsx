import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './style.module.sass';
import { NOTE_SCHEMA } from '../../../utils/validationSchemas';
import 'bulma/css/bulma.min.css';

const initialValues = {
  note: '',
};

function Header() {
  return (
    <>
      <div className={style.todoList}>Todos</div>
      <Formik initialValues={initialValues} validationSchema={NOTE_SCHEMA}>
        {(formikProps) => {
          console.log(formikProps);
          return (
            <Form className={style.inputWrapper}>
              <Field
                className="input is-primary"
                type="text"
                name="note"
                placeholder="Write your task"
              />
              <ErrorMessage name="note" component="span" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
export default Header;
