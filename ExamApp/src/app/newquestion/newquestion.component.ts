import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempQuestion = {question:"",description:""};
  ngOnInit() {
  }
  questionsubmit(){
  	console.log("may i be question submit?");
  	let observable = this._httpService.addQuestion(this.tempQuestion);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in questionsubmit is : ",responseData);
    		this._router.navigate(['/']);
    	});
  }
}
