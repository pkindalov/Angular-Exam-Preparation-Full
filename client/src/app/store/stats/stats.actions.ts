import { Injectable } from '@angular/core'

import { StatsService } from '../../stats/stats.service'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../app.state'

export const STATS_REQUESTED = 'stats/REQUESTED'

@Injectable()
export class StatsActions{

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private statsService:  StatsService
    ){}

    get(){
        return this.statsService
                                            .get()
                                            .subscribe(stats => {
                                                this.ngRedux.dispatch({
                                                    type: STATS_REQUESTED,
                                                    stats
                                                })
                                            })
    }
}