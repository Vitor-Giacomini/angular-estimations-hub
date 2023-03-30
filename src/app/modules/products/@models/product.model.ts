import { Estimation } from "../../estimations/@models/estimation.model";

export interface Product{
    productId: number,
    productName: string,
    productPhoto: string,
    estimationList: Estimation[]
}