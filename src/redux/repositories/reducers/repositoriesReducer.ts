import { ActionTypes } from "../../actionTypes";

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCSESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
