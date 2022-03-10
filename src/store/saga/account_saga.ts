import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { ICreateAccount, IDataRegister } from "../../interface";
import { toastSuccess } from "../../utils/toast";
import {
  createAccountFail,
  createAccountSuccess,
  getListAccountFail,
  getListAccountSuccess,
} from "../action";
import { CREATE_ACCOUNT, GET_LIST_ACCOUNT } from "../constant";

const url = "http://localhost:3002";

function* createAccountSaga(action: ICreateAccount) {
  try {
    const response: AxiosResponse = yield axios.post<IDataRegister>(
      `${url}/users`,
      {
        ...action.payload,
      }
    );

    yield put(
      createAccountSuccess({
        dataCreate: response.data,
      })
    );
    toastSuccess("Register Successfully!");
  } catch (e: any) {
    yield put(
      createAccountFail({
        error: e.message,
      })
    );
  }
}

function* getListAccountSaga() {
  try {
    const response: AxiosResponse = yield axios.get<IDataRegister>(
      `${url}/users`
    );

    yield put(
      getListAccountSuccess({
        listAccount: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      getListAccountFail({
        error: e.message,
      })
    );
  }
}

export default function* dataSaga() {
  yield all([takeLatest(CREATE_ACCOUNT, createAccountSaga)]);
  yield all([takeLatest(GET_LIST_ACCOUNT, getListAccountSaga)]);
}
