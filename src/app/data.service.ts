
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeData } from './employees';
import { Observable } from 'rxjs/Observable';
import {HttpModule} from '@angular/http';
@Injectable()
export class DataService {


  constructor(
    private http: HttpClient) { }
    //get data form json file
    private _url: string ="/assets/data/data.json";

    getemployee(): Observable<EmployeeData[]>{
      return this.http.get<EmployeeData[]>(this._url)
      
    }

}
