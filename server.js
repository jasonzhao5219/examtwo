var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/ExamApp/dist' ));

 var session = require('express-session');
app.use(session({secret:"SuperSecret"}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
//

//
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
 question: {type:String,required:true,minlength:10},
 description: {type:String},
 
 NumOfAnswer:{type:Number,default:0},
 //text: { type: String }, 
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
 answersContent:[{ type: String}],
 //NameWhoCommnet:[{type: String}]
 
},{timestamps: true})
mongoose.model('Question', QuestionSchema); // We are setting this Schema in our Models as 'User'
var question = mongoose.model('Question');

//user
var UserSchema = new mongoose.Schema({
 UserName: {type:String},
 
 
},{timestamps: true})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var user = mongoose.model('User');
//One to many schema

var AnswerSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _answers: {type: Schema.Types.ObjectId, ref: 'Question'},
 answers: { type: String,required:true,minlength:5},
 answerDetail: {type: String},
 name:{type:String},
 likes:{type:Number,default:0}
}, {timestamps: true });
mongoose.model('Answer', AnswerSchema); // We are setting this Schema in our Models as 'User'
var answer = mongoose.model('Answer');
//
app.post('/api/login', function(req, res){

  	console.log("may i be server?");
  	user.findOne({UserName: req.body.name},function(err,results){
  		if(err){
  			console.log('Validation error');
  			res.json(err);
  		}else if(results == null){
  			console.log('no user found');
  			var newUser = new user({UserName:req.body.name});
  			newUser.save(function(err) {
  
    if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully added a user!');
      req.session.userName = req.body.name;
      res.json(results);

 	//res.json(PersonArray);
 	
	}
})	 
  		}
  		else{
  			console.log('no add, only log in!');
		      req.session.userName = req.body.name;
		      res.json(results);
  		}
  	})
  	// req.session.userId = 1 ;
  	// console.log("test session.userId is : ",req.session.userId);
})    

app.post('/api/addQues', function(req, res){

  	console.log("may i be server to add question?");
  	var newQuestion = new question({question:req.body.question,description:req.body.description});
  			newQuestion.save(function(err) {
  
    if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully added a question!',newQuestion);
      
      res.json(newQuestion);

 	//res.json(PersonArray);
 	
	}
})	
  
})

app.get('/api/getQuestions', function(req, res){

  	console.log("may i be server to get all question?");
  	question.find({}).sort('-name').exec(function(err,results){
 		   if(err) {
      console.log('something went wrong');
      res.json(err);
     
    } else { 
      
	      console.log('successfully find all questions!');
	      res.json(results);

 	
 	
	}
 	})
	
  
})

app.get('/api/ShowOneQues/:_id', function(req, res){
	console.log("may i be server to find one question");
  question.findOne({_id:req.params._id}, function(err, results) {
         if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully find One question, But Jason Know here would not call database!');
      res.json(results);

  //res.json(PersonArray);
  
  }
      })
  //res.json({message: "Success", data: {}});
})

app.get('/api/ShowSpecificQues/:_id', function(req, res){
	console.log("what is req.body._id: ",req.params._id);
  question.findOne({_id:req.params._id}, function(err, results) {
         if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully find Specific question!');
      res.json(results);

  //res.json(PersonArray);
  
  }
      })
  //res.json({message: "Success", data: {}});
})


app.post('/api/addAnswer', function(req, res){

  	console.log("may i be server to add answer?",req.body);
  	var newAnswer = new answer({answers:req.body.answer,answerDetail:req.body.detail,name:req.session.userName});
  			newAnswer.save(function(err) {
  
    if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully added a question!',newAnswer);
      
      res.json(newAnswer);

 	//res.json(PersonArray);
 	
	}
})	
  
})


app.get('/api/getallAnswers', function(req, res){

  	console.log("may i be server to get all Answers?");
  	answer.find({}).sort('-answer').exec(function(err,results){
 		   if(err) {
      console.log('something went wrong');
      res.json(err);
     
    } else { 
      
	      console.log('successfully find all Answers!');
	      res.json(results);

 	
 	
	}
 	})
	
  
})

app.get('/api/logout', function(req, res){
	console.log("may i be logout server? ");
	req.session.userName = "";
  
  
})

app.put('/api/addlike/:_id',function(req,res){
	console.log("may i be addlike in server ?");
	answer.findOne({_id:req.body._id}, function(err, results) {
         if(err) {
      console.log('something went wrong');
      res.json(err);
     
    } else { 
      	results.likes += 1;
      	results.save(function(err){
      		if(err){
      			console.log('validation errors');
      			res.json(err);
      		}else{
      			console.log("sfdsfdsfds",results);
      			res.json(results);
      		}
      	})

 	
 	
		}
    })
	
	

})


app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./ExamApp/dist/index.html"))
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})