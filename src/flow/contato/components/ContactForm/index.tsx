import Button from "@components/button/Button.astro";
import Input from "@components/form/Input";
import Textarea from "@components/form/Textarea";
import type { PropsWithChildren } from "react";
import { Controller } from "react-hook-form";
import useContactFormController from "src/controllers/useContactForm";

function ContactForm({ children }: PropsWithChildren) {
  const { control, onSubmit } = useContactFormController();

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <Input control={control} name="name" label="Seu nome" autoFocus />
      <Input control={control} name="email" label="Seu melhor e-mail" />
      <Input control={control} name="phone" label="Telefone para contato" />
      <Textarea name="message" label="Mensagem" />
      {children}
    </form>
  );
}

export default ContactForm;
