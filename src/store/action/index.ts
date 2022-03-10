import {
  CreateAccountFail,
  CreateAccountSuccess,
  ICreateAccount,
  IDataRegister,
  IPayloadFail,
  IPayloadCreateAccount,
  IGetListAccount,
  IPayloadGetListAccount,
  GetListAccountSuccess,
  GetListAccountFail,
} from "../../interface";
import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT,
  GET_LIST_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
} from "../constant";

export const createAccount = (payload: IDataRegister): ICreateAccount => ({
  type: CREATE_ACCOUNT,
  payload,
});

export const createAccountSuccess = (
  payload: IPayloadCreateAccount
): CreateAccountSuccess => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload,
});

export const createAccountFail = (
  payload: IPayloadFail
): CreateAccountFail => ({
  type: CREATE_ACCOUNT_FAIL,
  payload,
});

export const getListAccount = (): IGetListAccount => ({
  type: GET_LIST_ACCOUNT,
});

export const getListAccountSuccess = (
  payload: IPayloadGetListAccount
): GetListAccountSuccess => ({
  type: GET_LIST_ACCOUNT_SUCCESS,
  payload,
});

export const getListAccountFail = (
  payload: IPayloadFail
): GetListAccountFail => ({
  type: GET_LIST_ACCOUNT_FAIL,
  payload,
});
