import { Action, IState } from "../../interface";
import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT_FAIL,
} from "../constant";
import { GET_LIST_ACCOUNT_SUCCESS } from "./../constant/index";

const initialState: IState = {
  dataCreate: {},
  listAccount: [],
};

export default function accountReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        dataCreate: action.payload.dataCreate,
      };
    }
    case CREATE_ACCOUNT_FAIL: {
      return state;
    }
    case GET_LIST_ACCOUNT_SUCCESS: {
      return {
        ...state,
        listAccount: action.payload.listAccount,
      };
    }
    case GET_LIST_ACCOUNT_FAIL: {
      return state;
    }
    default:
      return state;
  }
}
