export default (state,action) => {
    switch(action.type) {
        case 'DELETE':
            return {
                ...state,
                transactions:state.transactions.filter(item =>
                    item.id !==action.payload
                )}
                case 'ADD':
            return {
                ...state,
                transactions:[...state.transactions,{
                    id:action.payload.id,
                    text:action.payload.text,
                    amount:action.payload.amount
                }]
                
            }
        default :
        return state;

    }
}