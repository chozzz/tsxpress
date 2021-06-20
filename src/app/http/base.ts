import axios, { AxiosRequestConfig } from "axios";
import { IS_PROD, MOCK_API_PORT } from "@app/utilities/constants";
import { HttpError } from "@models/HttpError";

const baseMock = axios.create({
  baseURL: MOCK_API_PORT,
  timeout: 1e3,
  headers: {
    "X-Mock-API": "true",
  },
});

export const mockHttp = (config: AxiosRequestConfig) => {
  return baseMock(config).catch((reason: any) => {
    if (!IS_PROD) {
      console.log({ reason });
    }
    /**
     * Parse the `reason` model into app http error model.
     */
    throw new HttpError("unhandled-exception", "Invalid request", [], 500);
  });
};
