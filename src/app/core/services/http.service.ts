import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string=environment.baseUrl ;

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set("Content-type","application/json"); 
  

  constructor(private http:HttpClient) { }

   getDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint ;
    return this.http.get(url,{headers:this.httpHeaders});
   }
  }
