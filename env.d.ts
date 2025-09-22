interface ImportMetaEnv {
    readonly SECRET_RESEND_API_KEY: string;
    readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
    readonly SECRET_RECAPTCHA_SECRET_KEY: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}