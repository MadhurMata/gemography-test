import { FETCH_REPOSITORIES } from '../actions/types';

const initialState = {
  repositories: []
};

export default function actionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      };
    default:
      return state;
  }
}
