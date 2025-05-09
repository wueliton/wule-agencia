import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormSchema } from "./schema";
import type { ContactFormProps } from "./types";

function useContactFormController() {
  const { control, handleSubmit } = useForm<ContactFormProps>({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = () => {};

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  };
}

export default useContactFormController;
