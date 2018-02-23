import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ShowquestionsComponent } from './showquestions/showquestions.component';
import { AnswerComponent } from './answer/answer.component';
const routes: Routes = [
	
	  { path: '',component: SecondpageComponent },
	  { path: 'index',component: HomeComponent },
	  { path: 'new_question',component: NewquestionComponent },
	  { path: 'question/:id',component: ShowquestionsComponent },
	  { path: 'question/:id/new_answer',component: AnswerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



