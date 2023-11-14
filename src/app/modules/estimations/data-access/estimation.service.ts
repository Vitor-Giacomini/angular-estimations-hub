import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Estimation } from '../@models/estimation.model';

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'localhost:8080/estimation'

  getEstimations(): Observable<Estimation[]> {
    return this.http.get<{ response: Estimation[] }>(`http://${this.baseUrl}`).pipe(
      map((data) => data.response)
    );
  }

  setEstimationStatus(estimation: Estimation) {
    this.http.put(`http://${this.baseUrl}/${estimation.estimationId}`, estimation)
      .subscribe(
        (error) => console.log(error)
      );
  }

  postEstimation(estimation: Estimation) {
    this.http.post(`http://${this.baseUrl}`, estimation)
      .subscribe(
        (error) => console.log(error)
      );
  }

}
