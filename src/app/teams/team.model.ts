import { Minion } from './../minions/minion.model';
export class Team {
    constructor(
        public id: number,
        public name: string,
        public members: Minion[]
    ) { }
}