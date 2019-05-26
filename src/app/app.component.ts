import { Component } from '@angular/core';
import { ServiceService } from './myservice/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameofinput:string;
  myAlert:string;
  movies:any[]=[];

  constructor(private myService:ServiceService) { }

  search(){
    if(this.nameofinput.endsWith(" ")){
      this.nameofinput = this.nameofinput.trim();
      this.myService.getNovieData(this.nameofinput).subscribe(data=>{
        if(data.Response === 'False'){
          this.myAlert=data.Error;
        }else{
          this.movies=data.Search;
        }
      });
    }else {
    this.nameofinput = this.nameofinput.replace(" ", "+");
    this.myService.getNovieData(this.nameofinput).subscribe(data=>{
      if(data.Response === 'False'){
        this.myAlert=data.Error;
      }else{
        this.movies=data.Search;
      }
    });
    }

    this.nameofinput = "";
    this.myAlert = "";
  }
}
