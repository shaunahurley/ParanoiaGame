//paranoia questions from: https://www.legit.ng/ask-legit/quotes-messages/1465536-100-paranoia-questions-a-fun-game-friends/
const questions = [
  "Best road trip stories?",
  "Most capable of robbing a bank in minutes?",
  "Would make the best pickpocket?",
  "Cries the most over the little things?",
  "Most likely to have a body buried in their backyard?",
  "Knows the most of Nicki Minaj's songs?",
  "Would kill for money?",
  "Would threaten a customer?",
  "Dance in public?",
  "Worst at singing?",
  "Most likely to attend Coachella?",
  "Join the army?",
  "Make a really good rapper?",
  "Host the best party?",
  "Most likely to fail a math class?",
  "Biggest heartbreaker?",
  "Most likely to get fired?",
  "Laugh in serious moments?",
];

const coin = ["tell", "don't tell"];
var count = 1

function start(){
  window.location = "prompt.html"
}

function randomQuestion(){
  if(questions.length == 0){
    var ranoutpara = document.getElementById("ranout");
    ranoutpara.textContent = "There are no more prompts! Yell at Shauna to add more!";
  }
  var num = Math.floor(Math.random()*questions.length);
  var promptpara = document.getElementById("prompt");
  promptpara.textContent = questions[num];
  questions.splice(num, 1)
  
}

function flip(){
  var flippara = document.getElementById("flip");
  var countpara = document.getElementById("count");
  var num = Math.floor(Math.random()*2);
  flippara.textContent = coin[num];
  countpara.textContent = "The coin has been flipped " + count + " times!";
  count++;
  
}
