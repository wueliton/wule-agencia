interface ImportMetaEnv {
  readonly PUBLIC_API_BASE_URL: string;
  readonly PUBLIC_RECAPTCHA_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
