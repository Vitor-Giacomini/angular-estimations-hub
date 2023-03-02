import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Estimation } from '../@models/estimation.model';

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'

  getEstimations():Observable<Estimation[]>{
    return this.http.get<{ response: Estimation[] }>(`${this.baseUrl}/estimation`).pipe(
      map((data) => data.response)
    );
  }

  getEstimationById(id: Number):Observable<Estimation>{
    return this.http.get<Estimation>(`${this.baseUrl}/estimation/${id}`);
  }
}
