import { FETCH_REPOSITORIES, SEARCH } from './types';
import service from '../../lib/service';

export const fetchRepositories = () => (dispatch) => {
  service.fetchRepositories(1).then((data) =>
    dispatch({
      type: FETCH_REPOSITORIES,
      payload: data.items
    })
  );
};

export const searchRepository = (searchValue) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: searchValue
  });
};
