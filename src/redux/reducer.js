import {SPINNING,STOPING} from './action'

const initialState={
    rotating:true
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case SPINNING:
            console.log("Starting spin...");
            return{
                ...state,
                rotating:true
            }
        case STOPING:
            console.log("Stopping spin...")
            return{
                ...state,
                rotating:false
            }
        
        default:
            return state
    }
}

export default reducer