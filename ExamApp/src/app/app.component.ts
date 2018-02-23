import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {}
  logout(){
  	let observable = this._httpService.logoutService();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("successfully log out ");
    		
    	});
  }
}
