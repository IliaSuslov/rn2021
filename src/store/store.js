import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from "./sagas";
import { rootReducer } from "./rootReducer";

const saga = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            saga
        )
    )
)
saga.run(sagaWatcher)
