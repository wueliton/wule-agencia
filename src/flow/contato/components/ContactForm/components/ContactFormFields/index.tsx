import Input from "@components/form/Input";
import Textarea from "@components/form/Textarea";
import useContactFormController from "src/controllers/useContactForm";
import Button from "@components/button";
import Checkbox from "@components/form/Checkbox";
import ContactFormSubmitting from "../ContactFormSubmitting";
import ContactFormSubmitSuccessful from "../ContactFormSubmitSuccessful";
import Notification from "@components/notification";

function ContactFormFields() {
  const {
    control,
    isSubmitting,
    isSubmitSuccessful,
    recaptchaError,
    onSubmit,
  } = useContactFormController();

  if (isSubmitting) return <ContactFormSubmitting />;

  if (isSubmitSuccessful) return <ContactFormSubmitSuccessful />;

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      {recaptchaError ? (
        <Notification
          title="Erro ao validar o formulário"
          description="Ocorreu um erro ao validar o formulário, por favor, verifique os dados e tente novamente."
        />
      ) : null}
      <Input control={control} name="name" label="Seu nome" autoFocus />
      <Input control={control} name="email" label="Seu melhor e-mail" />
      <Input
        control={control}
        name="phone"
        label="Telefone para contato"
        mask="phone"
      />
      <Textarea control={control} name="message" label="Mensagem" />
      <Checkbox
        control={control}
        name="acceptTherms"
        label="Aceito receber contato através do e-mail ou telefone informados."
      />
      <Button type="submit" aria-label="">
        Enviar
      </Button>
    </form>
  );
}

export default ContactFormFields;
