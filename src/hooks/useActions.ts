import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/repositories/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
