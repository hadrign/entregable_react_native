import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

const ITEMS_PER_PAGE = 26;

export const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
};

export const setItem = (item) => {
  const action = {
    type: types.SET_ITEM,
    payload: {item},
  };
  return action;
};

const updateList = (list, total) => {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: list, total: total},
  };
  return action;
};

const updatePage = (page) => {
  const action = {
    type: types.UPDATE_PAGE,
    payload: {page},
  };
  return action;
};

export const initList = () => {
  return (dispatch) => {
    dispatch(updateList([]));
    dispatch(updatePage(1));
    dispatch(fetchMartianPhotos());
  };
};

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const {page, list, total} = getState().martianPhotos;
    const listSize = _.size(list);
    if (listSize < total) {
      const newPage = page + 1;
      dispatch(updatePage(newPage));
      dispatch(fetchMartianPhotos());
    }
  };
};

export const fetchMartianPhotos = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const {list, page} = getState().martianPhotos;
      const params = {
        earth_date: '2015-5-3',
        api_key: 'DEMO_KEY',
        page: page,
      };
      const getMartianPhotosRes = await api.getMartianPhotos(params);
      const total = _.toNumber(_.get(getMartianPhotosRes, 'data.total', 1));
      const resList = _.get(getMartianPhotosRes, 'data.photos', []);

      const newList = [...list, ...resList];

      //const list = getMartianPhotosRes.data.photos;
      dispatch(updateList(newList, total));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postMartianPhoto = (data) => {
  return async (dispatch, getState) => {
    if (!data) {
      Alert.alert('Atención', 'Faltan datos por completar');
      return;
    }

    try {
      dispatch(setLoading(true));

      const {list, total} = getState().martianPhotos;
      const newList = [...list, data];
      console.log('newlist y total', newList, total);
      dispatch(updateList(newList, total));

      Alert.alert('Genial', `${data.id} creado!`, [
        {text: 'Aceptar', onPress: () => Actions.pop()},
      ]);
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
