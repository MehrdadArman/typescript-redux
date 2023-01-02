import { ActionTypes } from "../../actionTypes";

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCSESS;
  payload: string[];
}
export interface SearchRepositoriesFailureAction {
  type: ActionTypes.SEARCH_REPOSITORIES_FAILURE;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesFailureAction;
