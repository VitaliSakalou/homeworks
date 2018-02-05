import { combineReducers } from 'redux';

// import counterButtonReducer from "../components/CounterButton/counterButtonReducer";
import counterReducer from "../components/reduxTest/buttonsReducer";

let combinedReducer=combineReducers({
    // редьюсер counterButtonReducer отвечает за раздел state под именем counterButton
    counter: counterReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
