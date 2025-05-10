import { HttpError } from "./http-error";
import { HttpResponse } from "./http-response";

class Fetcher {
  async post(url: string, body: any) {
    try {
      const rawResponse = await fetch(
        `${import.meta.env.PUBLIC_API_BASE_URL}${url}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const response = await rawResponse.json();

      if (!rawResponse.ok) {
        throw new HttpError(rawResponse.status, response);
      }
      return new HttpResponse(rawResponse.status, response);
    } catch (error) {
      throw new HttpError(500, JSON.stringify(error));
    }
  }
}

export default Fetcher;
