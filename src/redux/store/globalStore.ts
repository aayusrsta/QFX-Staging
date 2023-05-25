import {applyMiddleware, legacy_createStore as createStore} from 'redux' 
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer/rootReducer'
import RootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
const globalStore=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
export default globalStore;