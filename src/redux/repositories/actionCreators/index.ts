import axios from "axios";
import { ActionTypes } from "../../actionTypes";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCSESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
        payload: error.message,
      });
    }
  };
};
