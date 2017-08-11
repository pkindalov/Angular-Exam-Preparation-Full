import { ICoreState } from './core/core.state'
import { IUserState } from './users/users.state'
import { IStatsState } from './stats/stats.state'

export interface IAppState{
    core: ICoreState,
    users: IUserState,
    stats: IStatsState
}