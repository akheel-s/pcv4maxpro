declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      VUE_APP_REALM_ID: string;
      VUE_APP_ATLAS_SERVICE_NAME: string;
      VUE_APP_S3_ACCESS_KEY_ID: string;
      VUE_APP_S3_SECRET_ACCESS_KEY: string;
      VUE_APP_S3_REGION: string;
      VUE_APP_S3_BUCKET_NAME: string;
      VUE_APP_DB: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
