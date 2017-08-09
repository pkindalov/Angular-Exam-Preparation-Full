import { initialState} from './core.state'


export function coreReducer(state = initialState, action){

    const result = action.result

    if(result){
        const message = result.message
        if(message){
            return Object.assign({}, state, {
                message
            })
        }
    }

    return state
}