import * as yup from "yup";

const ContactFormSchema = yup.object().shape({
  name: yup.string().required("Obrigatório"),
  email: yup.string().email("E-mail inválido").required("Obrigatório"),
  phone: yup.string().min(14, "Telefone inválido").required("Obrigatório"),
  message: yup.string().required("Obrigatório"),
  acceptTherms: yup
    .boolean()
    .required("Marque para que possamos retornar o contato."),
});

export { ContactFormSchema };
