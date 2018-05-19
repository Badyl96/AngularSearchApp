import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { element } from 'protractor';
import { SearchData } from './search/search-data';
import { EmployeeData } from './employees';
import { SortDataPipe } from './search/sort-data.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})


export class EmployeeListComponent {
    
    employess :EmployeeData[];
  
    limit :number = 5;
    viewMode : string = 'firstPage';


    constructor(private _employeeServices: DataService){
      
    }
    search: SearchData[];
    filter: SearchData = new SearchData();
    
    ngOnInit(){
      this._employeeServices.getemployee()
        .subscribe(data =>this.employess = data);
      
      
    }
   
}

