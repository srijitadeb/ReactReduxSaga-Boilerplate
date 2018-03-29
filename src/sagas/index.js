import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../utils/helper'

function* fetchContacts() {

    try {
        const contacts = yield call(request, 'http://localhost:3333/contacts')
        console.log('contacts.contacts')
    } catch (e) {
        console.log(e)
        return;
    }
}


function* mySaga() {
    yield takeLatest("CONTACTS", fetchContacts);
}

export default mySaga;
