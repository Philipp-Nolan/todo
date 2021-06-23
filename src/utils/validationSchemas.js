import * as yup from 'yup';

export const NOTE_SCHEMA = yup.object({
  note: yup
    .string()
    .matches(/^[A-Z ][a-z ]*$/, 'Заметка должна начинаться с большой буквы')
    .required(),
});
