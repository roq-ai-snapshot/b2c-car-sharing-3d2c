import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  latitude: yup.number().integer().required(),
  longitude: yup.number().integer().required(),
  car_id: yup.string().nullable().required(),
});
