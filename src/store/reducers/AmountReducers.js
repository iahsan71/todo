const initialState = {
amount : 0
};
const amountReducers = (state = initialState, action) => {
    switch(action.type){
        case  "DEPOSIT":
        return{
            ...state,
            amount : state + action.payload
        }
        case  "WITHDRAW":
        return{
            ...state,
            amount : state - action.payload
        }
        default :
        return state;
    }
}
export default amountReducers;