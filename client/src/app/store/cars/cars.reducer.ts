import { initialState } from './cars.state'
import { 
    ADD_CAR, 
    ALL_CARS,
    CAR_DETAILS, 
    CAR_LIKE,
    CAR_ADD_REVIEW,
    CAR_ALL_REVIEWS
 } from './cars.actions'



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


function carLike(state, action){

    if(action.result.success){
        const currentCarLikes = state.carDetails.likes
        const carDetails = Object.assign({}, state.carDetails, {
            likes: currentCarLikes + 1
        })
    
        return Object.assign({}, state, {
            carDetails
        })

    }

    return state

}


function AddReview(state, action){
    const result = action.result

    if(result.success){
        const review = result.review
        const carReview = state.carReviews

        return Object.assign({}, state, {
            carReviews:  [... carReview, review]
        })
    }
    return state
}


function allReviews(state, action){
    return Object.assign({}, state, {
        carReviews: action.reviews
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
        case CAR_LIKE:
            return carLike(state, action)    
        case CAR_ADD_REVIEW:
            return AddReview(state, action)    
        case CAR_ALL_REVIEWS:
            return allReviews(state, action)    
        default:
            return state
    }

}