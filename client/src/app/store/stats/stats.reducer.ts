import { initialState } from './stats.state'
import { STATS_REQUESTED } from './stats.actions'

export function statsReducer(state = initialState, action){

    function statsRequested(state, action){

        const stats = action.stats

        return Object.assign({}, state, {
            users: stats.users,
            cars: state.cars
        })
    }


    switch(action.type){
        case STATS_REQUESTED:
            return statsRequested(state, action)

        default:    
            return state
    }

}