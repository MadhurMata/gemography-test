import { FETCH_REPOSITORIES, SEARCH, ADD_REPOSITORIES } from './types';
import service from '../../lib/service';

export const fetchRepositories = () => (dispatch) => {
  service
    .fetchRepositories(1)
    .then((data) =>
      dispatch({
        type: FETCH_REPOSITORIES,
        payload: data.items
      })
    )
    .catch((error) => {
      console.log("The repositories couldn't be fetched", error);
    });
};

export const searchRepository = (searchValue) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: searchValue
  });
};

export const addRepositories = (page) => (dispatch) => {
  service
    .fetchRepositories(page)
    .then((data) =>
      dispatch({
        type: ADD_REPOSITORIES,
        payload: data.items
      })
    )
    .catch((error) => {
      console.log("The repositories couldn't be fetched", error);
    });
};
