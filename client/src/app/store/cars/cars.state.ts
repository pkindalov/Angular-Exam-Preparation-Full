export interface ICarsState{
    carAdded: boolean,
    carAddedId: number,
    allCars: Array<object>
}

export const initialState: ICarsState = {
    carAdded: false,
    carAddedId:  null,
    allCars: []
}