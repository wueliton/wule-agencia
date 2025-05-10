import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactFormFields from "./components/ContactFormFields";
import { config } from "src/config";

function ContactForm() {
  const recaptchaToken = config.recaptchaToken;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaToken}>
      <ContactFormFields />
    </GoogleReCaptchaProvider>
  );
}

export default ContactForm;
