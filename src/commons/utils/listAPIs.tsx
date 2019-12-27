export interface APIData {
  url: string;
  key: string;
  params: Array<string>;
  method: 'GET' | 'PUT' | 'POST';
}

const APIList: Array<APIData> = [
  {
    url: 's=TITLE',
    key: 'SEARCH_MOVIE_TITLE',
    params: ['TITLE'],
    method: 'GET'
  },
  {
    url: 'i=ID',
    key: 'GET_MOVIE_DETAIL',
    params: ['ID'],
    method: 'GET'
  }
];

const getAPI = (key: string) =>
  APIList.find(({ key: apiKey }) => apiKey === key);

export default getAPI;
