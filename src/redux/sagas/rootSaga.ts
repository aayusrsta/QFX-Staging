import { all } from "redux-saga/effects";
import nowShowingSaga from "./NowShowingSaga";
import comingSoonSaga from "./ComingSoonSaga";
function* RootSaga(){
    yield all([
        nowShowingSaga(),
        comingSoonSaga()
    ])
}
export default RootSaga;