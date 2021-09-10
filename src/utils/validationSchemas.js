import * as yup from 'yup';

export const NOTE_SCHEMA = yup.object({
  note: yup


    .string().max(40, 'Заметка должна быть не более 40 символов ')
    .matches(/^[A-Z ][a-z ]*$/, 'Заметка должна начинаться с большой буквы')
    .required(),


});
