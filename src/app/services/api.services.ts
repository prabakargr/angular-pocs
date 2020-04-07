import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(
        private http: HttpClient,
    ) { }

    post(url,data){
        return this.http.post(url,data)
    }
    
}