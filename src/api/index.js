import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getMartianPhotos = (params) => {
  const url = `/mars-photos/api/v1/rovers/curiosity/photos?${qs.stringify(
    params,
    {skipNulls: true},
  )}`;
  return instance.get(url);
};
