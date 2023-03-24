import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Estimator } from '../@models/estimator.model';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'

  getEstimators():Observable<Estimator[]>{

    return this.http.get<{ response: Estimator[] }>(`${this.baseUrl}/estimator`).pipe(
      map((data) => data.response)
    );
  }

  getEstimatorById(id: Number):Observable<Estimator>{
    return this.http.get<Estimator>(`${this.baseUrl}/estimator/${id}`);
  }
}
