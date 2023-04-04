import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Estimator } from '../@models/estimator.model';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'localhost:8080/estimator'

  getEstimators(): Observable<Estimator[]> {
    return this.http.get<{ response: Estimator[] }>(`http://${this.baseUrl}`).pipe(
      map((data) => data.response)
    );
  }
}
