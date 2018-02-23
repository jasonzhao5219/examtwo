import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempId = "";
  tempObj = {};
  AnswerTempObj = {answer:"",detail:""};
  ngOnInit() {
  	this.passID();
  	this.getSpecificQuestion();
  }
  passID(){
	  	this._route.params.subscribe((params: Params) => {
	  		console.log("show one id is: ",params['id']);
	  		this.tempId = params['id'];
	  	});
  	}
  getSpecificQuestion(){
  	console.log("may i be getSpecificquestion?");
  	//console.log("what is id now?",this.passID);
  	let observable = this._httpService.getSpecificquestionInService(this.tempId);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in getSpecificQuestion is : ",responseData);
    		this.tempObj = responseData;
    		console.log("what is tempObj is : ",this.tempObj);
    		//this.tempArray.push(responseData);
    		//console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  }

  answersubmit(){
  	console.log("may i be answer submit?");
  	console.log("what is answertempObj",this.AnswerTempObj)
  	let observable = this._httpService.addAnswer(this.AnswerTempObj);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in Answersubmit is : ",responseData);
    		this._router.navigate(['/question',this.tempId]);
    	});
  }
}
