/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MICROCMS_API_KEY: string;
  readonly VITE_NICONICO_RSS: string;
  readonly VITE_MICROCMS_SERVICE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
