import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClientClass {
  instance!: AxiosInstance;
  defaultConfig!: AxiosRequestConfig;

  url = process.env.API_URL || 'http://localhost';
  prefix = process.env.API_PREFIX || 'wp-json/wp/v2';

  constructor(prefix?: string) {
    this.defaultConfig = {
      baseURL: `${this.url}/${prefix || this.prefix}`,
    };
    this.instance = axios.create(this.defaultConfig);
  }

  async get(path: string): Promise<AxiosResponse> {
    return (await this.instance.get(path)).data;
  }
}

export const ApiClient = new ApiClientClass();
export type { AxiosResponse };
