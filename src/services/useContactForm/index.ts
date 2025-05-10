import Fetcher from "@services/fetcher";
import { ROUTE } from "./contants";
import type { PostContactFormRequestDTO } from "./dto/PostContactFormRequestDTO";

function useContactFormService() {
  const fetcher = new Fetcher();

  const postContactForm = async (body: PostContactFormRequestDTO) => {
    return await fetcher.post(ROUTE.contact, body);
  };

  return {
    postContactForm,
  };
}

export default useContactFormService;
