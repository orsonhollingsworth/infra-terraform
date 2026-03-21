import { TerraformBackendConfig } from './terraform-backend-config';

export interface ProjectConfig {
  name: string;
  rootPath: string;
  backend: TerraformBackendConfig;
}