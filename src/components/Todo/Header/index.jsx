import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './style.module.sass';
import { NOTE_SCHEMA } from '../../../utils/validationSchemas';
import cn from 'classnames/bind';
import 'bulma/css/bulma.min.css';

const initialValues = {
  note: '',
};

function Header(props) {
  const { inputHandler } = props;
  const { className, ...others } = props;
  return (
    <>
      <div className={style.todoList}>Todos</div>

      <Formik
        initialValues={initialValues}
        validationSchema={NOTE_SCHEMA}
        onSubmit={(values, { setSubmitting }) => {
          inputHandler(values);
          // console.log(values);
        }}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.inputWrapper}>
            <Field
              className="input is-primary"
              type="text"
              name="note"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.note}
            />
            <ErrorMessage name="note" component="span" />
            <button className={cn(style.submit, 'button is-primary')} type="submit">
              add
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Header;
