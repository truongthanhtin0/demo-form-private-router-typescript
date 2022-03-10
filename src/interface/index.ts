import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT,
  GET_LIST_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
} from "../store/constant";

export interface IAccount {
  id: number;
  fullName: string;
  userName: string;
  password: string;
}

export interface IState {
  dataCreate: {};
  listAccount: IAccount[];
}

export interface IPayloadFail {
  error: string;
}

//Register
export interface IDataRegister {
  fullName: string;
  userName: string;
  password: string;
}

export interface IPayloadCreateAccount {
  dataCreate: IDataRegister;
}

export interface ICreateAccount {
  type: typeof CREATE_ACCOUNT;
  payload: IDataRegister;
}

export type CreateAccountSuccess = {
  type: typeof CREATE_ACCOUNT_SUCCESS;
  payload: IPayloadCreateAccount;
};

export type CreateAccountFail = {
  type: typeof CREATE_ACCOUNT_FAIL;
  payload: IPayloadFail;
};

//Get list account
export interface IPayloadGetListAccount {
  listAccount: IAccount[];
}

export interface IGetListAccount {
  type: typeof GET_LIST_ACCOUNT;
}

export type GetListAccountSuccess = {
  type: typeof GET_LIST_ACCOUNT_SUCCESS;
  payload: IPayloadGetListAccount;
};

export type GetListAccountFail = {
  type: typeof GET_LIST_ACCOUNT_FAIL;
  payload: IPayloadFail;
};

export type Action =
  | ICreateAccount
  | CreateAccountSuccess
  | CreateAccountFail
  | IGetListAccount
  | GetListAccountSuccess
  | GetListAccountFail;
