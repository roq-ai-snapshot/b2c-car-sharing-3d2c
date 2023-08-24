import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  email: yup.string().required(),
  role: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
