import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/product`);
  }

  getProductById(id: Number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/product/${id}`);
  }
}
