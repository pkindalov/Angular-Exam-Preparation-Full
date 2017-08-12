export interface IUserState{
    userRegistered: boolean,
    userAuthenticated: boolean,
    token: string,
    username: string,
    // profile: Array<object>
}


export const initialState: IUserState = {
    userRegistered: false,
    userAuthenticated: false,
    token: null,
    username: null ,
    // profile: []
}