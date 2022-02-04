export const saveorderReducer=(state={},action)=>{


    switch(action.type){
        case 'ORDER_SAVE_REQUEST': return{
            loading:true
        }
        case 'ORDER_SAVE_SUCCESS': return {
            loading:false,
            success:true
        }
        case 'ORDER_SAVE_FAILED': return{
            loading:false,
            error:true
        }
        default : return state
    }
}

export const getAllOrdersReducer=(state={orders:[]},action)=>{
    switch(action.type){
       case 'GET_ALLORDERS_REQUEST': return{
           loading:true,
           ...state
       }
       case 'GET_ALLORDERS_SUCCESS': return{
           loading:false,
        orders : action.payload
    }
    case 'GET_ALLORDERS_FAILED': return{
        
        error:action.payload,
        loading:false
    }
    default : return state
    }
}
