/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MICROCMS_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
