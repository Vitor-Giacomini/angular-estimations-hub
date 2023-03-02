import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'

  getProducts():Observable<Product[]>{
    return this.http.get<{ response: Product[] }>(`${this.baseUrl}/product`).pipe(
      map((data) => data.response)
    );
  }

  getProductById(id: Number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/product/${id}`);
  }
}
