import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getNovieData(input):Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?s=${input}&apikey=6f70742b`);
  }
}
