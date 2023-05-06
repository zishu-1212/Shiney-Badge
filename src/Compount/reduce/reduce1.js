const initialState = 0;
const changeNumber = (state = initialState, action)  =>{
switch (action.type){
case "increment" : return state + 5;
case "Decriment" : return state - 1;
default :return state ;
}
}

export default changeNumber;