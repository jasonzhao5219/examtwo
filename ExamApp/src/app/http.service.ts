import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  loginService(loginObj){
  	console.log("may i be service");
  	return this._http.post('/api/login/',loginObj);
  }
  addQuestion(quesObj){
  	console.log("may i be addQuestion in service?");
  	return this._http.post('/api/addQues/',quesObj);
  }
  getquestionInService(){
  	return this._http.get('/api/getQuestions/');
  }
  showQuestion(id){
  	console.log("may i be showquestion in service?",id);
  	return this._http.get('/api/ShowOneQues/'+id);


  }
  // answerThatQuestion(id){
  // 	console.log("may i be answerThatquestion in service?",id);
  // 	return this._http.get('/api/AnswerQues/'+id);

  // }
  getSpecificquestionInService(id){
  	console.log("may i be get specific ques in service?",id);
  	return this._http.get('/api/ShowSpecificQues/'+id);
  }
  addAnswer(ansObj){
  	console.log("may i be addAnswer in service?");
  	return this._http.post('/api/addAnswer/',ansObj);
  }
  getAllAnswers(){
  	return this._http.get('/api/getallAnswers/');
  }
  logoutService(){
  	return this._http.get('/api/logout/');
  }
  addOneLikeinService(ansObj){

  	return this._http.put('api/addlike/'+ansObj._id,ansObj);
  }
}
