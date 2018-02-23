import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempObj = {name:""};
  ngOnInit() {
  }
  loginsubmit(){
  	console.log("may i be loginsubmit?");
  	let observable = this._httpService.loginService(this.tempObj);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in loginsubmit is : ",responseData);
    		this._router.navigate(['/']);
    	});
  }
}

