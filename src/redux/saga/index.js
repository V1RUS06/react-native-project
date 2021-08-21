import {call, put, fork, takeLatest} from 'redux-saga/effects';

async function takeData(){
    const request = await fetch(`http://z.bokus.ru/test.json/`);

    const data = await request.json();

    return data;
}

export function* loadTitle() {
    const title = yield call(takeData, 'title');

    yield put({type: 'SET_TITLE', payload: title.title})
}

export function* loadDescription() {
    const description = yield call(takeData, 'description');

    yield put({type: 'SET_DESCRIPTION', payload: description.title})
}


// Saga worker
export function* workerSaga(){
    yield fork(loadTitle);
}

//Saga watcher
export function* watchLoadDataSaga() {
    yield takeLatest('CLICK', workerSaga)
}

export default function* rootSaga(){
    yield fork(watchLoadDataSaga)
}