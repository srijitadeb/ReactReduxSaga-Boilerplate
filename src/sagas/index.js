import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchContacts() {

    try {
        const contacts = yield call(fetch('http://localhost:3333/contacts').then(res => res))
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
