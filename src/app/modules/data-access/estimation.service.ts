import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estimation } from '../@models/estimation.models';

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http:localhost:8080'

  getEstimations():Observable<Estimation[]>{
    return this.http.get<Estimation[]>(`${this.baseUrl}/estimation`);
  }

  getEstimationById(id: Number):Observable<Estimation[]>{
    return this.http.get<Estimation[]>(`${this.baseUrl}/estimation/${id}`);
  }
}
