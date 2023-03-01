import { Estimation } from "./estimation.model";

export interface Product{
    id: number,
    name: string,
    photo: string,
    price: number,
    estimationList: Estimation[]
}