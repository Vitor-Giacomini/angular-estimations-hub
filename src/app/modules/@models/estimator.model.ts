import { Estimation } from "./estimation.model";

export interface Estimator{
    id: number,
    name: string,
    photo: string,
    estimationList: Estimation[]
}