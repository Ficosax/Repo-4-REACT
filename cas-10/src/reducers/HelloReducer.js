const initialState = {
    greeting: "Zdravo!",
    pozdravce: "Vrati pozdravce!"
}

const HelloReducer = (state = initialState, action) => {

    switch(action.type){

        case "NESTO_NOVO":
            return{
                ...state,
                pozdravce: action.payload
            }

        ///////////////////////////

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            }
        default: return state;
    }   
}   // reducer functionira na princip na - switch

export default HelloReducer