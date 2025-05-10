import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactFormFields from "./components/ContactFormFields";

function ContactForm() {
  const recaptchaToken = import.meta.env.PUBLIC_RECAPTCHA_TOKEN;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaToken}>
      <ContactFormFields />
    </GoogleReCaptchaProvider>
  );
}

export default ContactForm;
