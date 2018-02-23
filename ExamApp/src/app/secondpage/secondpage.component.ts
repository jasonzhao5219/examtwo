import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempArray = [];
  passId= "";
  authorInSearchBar = "";
  ngOnInit() {
  	this.getAllQuestion();
  }
  //
  tempAuthors:any = [];
  	
  	tempObj = {};
  
    searchsubmit(){
    	console.log("may i be searchsubmit?");
    	//this.tempAuthors = [];
    	for(var i = 0; i<this.tempArray[0].length;i++){
    		if (this.tempArray[0][i].question = this.authorInSearchBar){
    			this.tempObj = this.tempArray[0][i];
    			this.tempArray[0] = [];
    			this.tempArray[0].push(this.tempObj);
    		}
    	}
    }
  //
  getAllQuestion(){
  	console.log("may i be getallquestion?");
  	let observable = this._httpService.getquestionInService();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in getallQuestion is : ",responseData);
    		this.tempArray.push(responseData);
    		console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  }
  showsubmit(id){
  	console.log("may i be show submit?");
  	let observable = this._httpService.showQuestion(id);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in questionsubmit is : ",responseData);
    		this._router.navigate(['/question',id]);
    	});
  }
  answersubmit(id){
  	console.log("may i be answer submit?");
  	
    	
    		
    		
    		//console.log("the responsedata in answersubmit is : ",responseData);
    		this._router.navigate(['/question',id,'new_answer']);
    	
  }

}
