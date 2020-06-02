import { Component, OnInit } from '@angular/core';
import { PipeService } from './pipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
 
  public Employees:any=[];
  constructor(private service:PipeService){
     this.service.getEmployees().subscribe(data=>
      this.Employees=data);
  }
  ngOnInit(){
 
  }



}
