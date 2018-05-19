import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {EmployeeListComponent} from './app.component';
import { SearchPipe } from './search/search.pipe';
import { DatePipePipe } from './search/date-pipe.pipe';
import { SortDataPipe } from './search/sort-data.pipe';
import { DataService } from './data.service';




@NgModule({
  declarations: [
    EmployeeListComponent,
    SearchPipe,
    DatePipePipe,
    SortDataPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [EmployeeListComponent]
})


export class AppModule { }
