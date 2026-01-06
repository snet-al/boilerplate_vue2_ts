/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SECTOR_ID: string;
  readonly VITE_MODELS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
