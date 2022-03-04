const initialState = 2;
const mulAnddeviTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLICATION" : return state * 2;
        case "DIVISION" : return state / 2;
        default : return state;
    }
}
export default mulAnddeviTheNumber;