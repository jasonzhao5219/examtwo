import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-showquestions',
  templateUrl: './showquestions.component.html',
  styleUrls: ['./showquestions.component.css']
})
export class ShowquestionsComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempId = "";
  tempObj = {};
  tempArray = [];
  ngOnInit() {
  	this.passID();
  	this.getSpecificQuestion();
  	this.getallAnswers();
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
  passID(){
	  	this._route.params.subscribe((params: Params) => {
	  		console.log("show one id is: ",params['id']);
	  		this.tempId = params['id'];
	  	});
  	}
  	getallAnswers(){

  	console.log("may i be getallAnswers?");
  	let observable = this._httpService.getAllAnswers();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in getall Answers is : ",responseData);
    		this.tempArray.push(responseData);
    		console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  
  	}
  	addonelike(ansObj){
  		let observable = this._httpService.addOneLikeinService(ansObj);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		this.tempArray.push(responseData);
    		console.log("the responsedata in addoneLike is : ",responseData);
    		
    		this._router.navigate(['/question',ansObj._id]);
    	});
  	}

}
