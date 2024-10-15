/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    API: string;
  };
}

interface ImportMetaEnv {
  VITE_BACKEND_API: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}