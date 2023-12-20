import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  
  currentPage = 1;
  perPage = 10;
  users : any[] = [];

  constructor(
    private api: ApiService
  ){}

  ngOnInit(): void {
      // this.onSearch()
  }

  onSearch(){
    let params = {
      page: this.currentPage,
      results: this.perPage,
    }
    this.api.fetchPhotos(params).subscribe(
      (response: any)=>{
        response.results.forEach((result: any[])=>{

          this.users.push(result)
          
        })
        console.log(this.users);
        this.currentPage++;
      }
    )
  }

}




