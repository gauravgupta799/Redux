import IncAndDecTheNumber from "./upDown";
import mulAnddeviTheNumber from "./multDevi"

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    IncAndDecTheNumber,
    mulAnddeviTheNumber
    
});

export default rootReducer;