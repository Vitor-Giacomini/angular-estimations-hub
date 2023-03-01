import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estimator } from '../@models/estimator.model';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'

  getEstimators():Observable<Estimator[]>{
    console.log(this.baseUrl + " aaaaaaaaaaaaaaaaaaaaaaaaa");
    return this.http.get<Estimator[]>(`${this.baseUrl}/estimator`);
    return this.http.get<Estimator[]>('localhost:8080/estimation');
  }

  getEstimatorById(id: Number):Observable<Estimator[]>{
    return this.http.get<Estimator[]>(`${this.baseUrl}/estimator/${id}`);
  }
}
