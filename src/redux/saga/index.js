import {call, put, fork, takeLatest, apply} from 'redux-saga/effects';
import {LOAD_USER, LOAD_USERS_SUCCESS} from "../reducers/people/action";
import {delay} from "react-native-reanimated/src/reanimated2/animations";

export function* loadPeopleList() {
    const request = yield call(
        fetch,
        `https://swapi.dev/api/people`
    );
    const data = yield apply(request, request.json)

    yield put({
        type: LOAD_USERS_SUCCESS,
        payload: data
    })
}

// Saga worker
export function* workerSaga(){
    yield fork(loadPeopleList);
}

//Saga watcher
export function* watchLoadDataSaga() {
    yield takeLatest(LOAD_USER, workerSaga)
}

export default function* rootSaga(){
    yield fork(watchLoadDataSaga)
}




















//========================================
// async function takeData(){
//     const request =  await fetch(`https://swapi.dev/api/people`);
//
//     const data = await request.json();
//
//     return data.results;
// }
//
// export function* loadArr() {
//     const arr = yield call(takeData);
//
//     yield put({type: 'SET_ARR', payload: arr})
// }
//
// // export function* loadDescription() {
// //     const description = yield call(takeData);
// //
// //     yield put({type: 'SET_DESCRIPTION', payload: description.results.films})
// // }
//
//
// // Saga worker
// export function* workerSaga(){
//     yield fork(loadArr);
// }
//
// //Saga watcher
// export function* watchLoadDataSaga() {
//     yield takeLatest('CLICK', workerSaga)
// }
//
// export default function* rootSaga(){
//     yield fork(watchLoadDataSaga)
// }
