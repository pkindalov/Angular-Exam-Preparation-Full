import { initialState } from './users.state'

import {
     USER_REGISTERED,
     USER_LOGGED_IN
     } from './users.actions'

function userRegistration(state, action){
    const result = action.result

    return Object.assign({}, state, {
        userRegistered: result.success
    })
}

function userLogin(state, action){
    const result = action.result

   return Object.assign({}, state, {
            userAuthenticated: result.success,
            token: result.token,
            username: result.user ? result.user.name :  null 
        })


}

export function usersReducer(state = initialState, action){

    switch(action.type){
        case USER_REGISTERED:
            return userRegistration(state, action)
        case USER_LOGGED_IN:
            return userLogin(state, action)    
        default:
            return state    
    }

    
}