import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class WPEClientClass {
  instance!: AxiosInstance;
  defaultConfig!: AxiosRequestConfig;

  constructor() {
    this.defaultConfig = {
      baseURL: 'https://wpengine.com/wp-json/wp/v2',
    };

    this.instance = axios.create(this.defaultConfig);
  }

  // Get From WPE API
  async get(path: string): Promise<any> {
    try {
      const resp: AxiosResponse = await this.instance.get(path);
      return resp.data;
    } catch (e) {
      console.error('WPE Client Error:', e);
    }
  }
}

export const WPEClient = new WPEClientClass();
