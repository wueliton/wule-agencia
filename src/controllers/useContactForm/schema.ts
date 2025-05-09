import * as yup from "yup";

const ContactFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
});

export { ContactFormSchema };
