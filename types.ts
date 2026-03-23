// types.ts

import { TerraformBackend } from './backend';

interface InfraTerraformConfig {
  backend: TerraformBackend;
  providers: {
    aws: {
      region: string;
    };
  };
  variables: {
    environment: string;
    stage: string;
  };
}

interface TerraformBackend {
  s3: {
    bucket: string;
    key: string;
    region: string;
    dynamodb_table: string;
  };
  encrypt: boolean;
  role_arn: string;
}

interface InfraTerraformState {
  backend: TerraformBackend;
  version: number;
  terraform_version: string;
}