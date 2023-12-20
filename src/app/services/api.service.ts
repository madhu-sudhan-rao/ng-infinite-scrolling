import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // API_URL = 'https://randomuser.me/api/?page=1&results=10&seed=abc';
  API_URL = 'https://randomuser.me/api/';
  
  constructor(
    private http: HttpClient
  ) { }

  fetchPhotos(reqParams: any){
    const params = {
      page: reqParams.pageNum,
      results: reqParams.perPage,
      seed: 'abc'
    }
    return this.http.get(`${this.API_URL}`, {params: reqParams});
  }
}
