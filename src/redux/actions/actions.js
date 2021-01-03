import { FETCH_REPOSITORIES } from './types';
import service from '../../lib/service';

export const fetchRepositories = () => (dispatch) => {
  service.fetchRepositories(1).then((data) =>
    dispatch({
      type: FETCH_REPOSITORIES,
      payload: data.items
    })
  );
};
