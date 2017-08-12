import { initialState } from './cars.state'
import { ADD_CAR, ALL_CARS, CAR_DETAILS } from './cars.actions'



function addCar(state, action){
    // console.log(action)

    const result = action.result

    return Object.assign({}, state, {
        carAdded: result.success,
        carAddedId: result.success ? result.car.id : null        
    })

   
}


function allCars(state, action){

    return Object.assign({}, state, {
       allCars: action.cars
    })

}


function carDetails(state, action){
    return Object.assign({}, state, {
        carDetails: action.car
    })
}



export function carsReducer(state = initialState, action){

    switch(action.type){
        case ADD_CAR:
            return addCar(state, action)
        case ALL_CARS:
            return allCars(state, action)
        case CAR_DETAILS:
            return carDetails(state, action)    
        default:
            return state
    }

}