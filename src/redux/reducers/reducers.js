import { FETCH_REPOSITORIES, SEARCH, ADD_REPOSITORIES } from '../actions/types';

const initialState = {
  repositories: [],
  searchTerm: '',
  search: []
};

export default function actionReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchTerm: action.payload.toLowerCase(),
        search: state.repositories?.filter((repository) =>
          repository.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
        search: action.payload
      };
    case ADD_REPOSITORIES:
      return {
        ...state,
        repositories: state.repositories?.concat(action.payload),
        search: state.search?.concat(
          action.payload.filter((repository) =>
            repository.name.toLowerCase().includes(state.searchTerm)
          )
        )
      };
    default:
      return state;
  }
}
