import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './style.module.sass';
import { NOTE_SCHEMA } from '../../../utils/validationSchemas';
import cn from 'classnames/bind';
import Icon from '@mdi/react';
import { mdiNotePlus } from '@mdi/js';
import 'bulma/css/bulma.min.css';

const initialValues = {
  note: '',
};

function Header(props) {
  const { inputHandler, className, ...others } = props;

  return (
    <>
      <div className={style.todoList}>Notes</div>

      <Formik
        initialValues={initialValues}
        validationSchema={NOTE_SCHEMA}
        onSubmit={(values, { setSubmitting, setFieldValue }) => {
          inputHandler(values);
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <Form onReset={handleReset} onSubmit={handleSubmit} className={style.inputWrapper}>
            <Field
              className="input is-primary"
              type="text"
              name="note"
              placeholder="Write your note"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.note}
            />
            <ErrorMessage name="note" component="span" />
            <button className={cn(style.submit, 'button is-primary')} type="submit">
              <Icon path={mdiNotePlus} size={2} horizontal vertical rotate={180} color="white" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Header;
