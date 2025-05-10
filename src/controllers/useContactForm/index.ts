import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormSchema } from "./schema";
import type { ContactFormProps } from "./types";
import useContactFormService from "@services/useContactForm";
import type { PostContactFormRequestDTO } from "@services/useContactForm/dto/PostContactFormRequestDTO";
import Mask from "@components/form/utils/mask/Mask";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";

function useContactFormController() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { postContactForm } = useContactFormService();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormProps>({
    resolver: yupResolver(ContactFormSchema),
  });
  const [recaptchaErrorState, setRecaptchaErrorState] = useState(false);

  const onSubmit = async (data: ContactFormProps) => {
    setRecaptchaErrorState(false);
    const token = await executeRecaptcha?.("contactForm");

    if (!token) {
      setRecaptchaErrorState(true);
      throw new Error();
    }

    try {
      const requestBody: PostContactFormRequestDTO = {
        ...data,
        phone: Mask.number(data.phone),
        token,
      };

      await postContactForm(requestBody);
    } catch (error) {
      setRecaptchaErrorState(true);
      throw error;
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    isSubmitting,
    isSubmitSuccessful,
    recaptchaError: recaptchaErrorState,
  };
}

export default useContactFormController;
