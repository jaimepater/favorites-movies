import axios from 'axios';
import getAPI, { APIData } from './listAPIs';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
});

export interface ApiParam {
  keyParam: string;
  valueParam: string;
}

const getUrl = (apiItem: APIData | undefined, apiParams: Array<ApiParam>) => {
  let url = apiItem?.url;
  if (url) {
    apiParams.forEach(param => {
      url = url?.replace(param.keyParam, param.valueParam);
    });
  }
  return `?apikey=${process.env.REACT_APP_API_MOVIES_KEY}&${url}`;
};

const httpRequest = (apiKey: string, apiParams: Array<ApiParam>) => {
  const apiItem = getAPI(apiKey);
  const url = getUrl(apiItem, apiParams);
  return apiClient.request({
    url,
    method: apiItem?.method
  });
};

export default httpRequest;
