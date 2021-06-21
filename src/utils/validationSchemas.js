import * as yup from 'yup';

export const NOTE_SCHEMA = yup.object({
  note: yup
    .string()
    .matches(/^[A-Z][a-z][А-Я][а-я]{0,}$/, 'Заметка должна начинаться с большой буквы')
    .required(),
});
