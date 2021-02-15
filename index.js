console.log("Hello");
var readlineSync = require("readline-sync");
const chalk= require("chalk")
var highScoreFunc=
{
  playeName:"Aurobindo Gupta",
  high_score: 4
}


var name = readlineSync.question(chalk.red("What is your Name? "));
console.log("Welcome "+chalk.bgBlue(name)+" to the game..");
console.log(" Press the Number of the currect Answer.");
console.log(chalk.bgCyanBright("LETS PLAY!!"));

var questions_0= [
  { 
    questionS:"who is the funniest friends character? \n ", 
    answerS: ["1.Chandler Bing \n 2.Monica Geller \n 3.Ross Geller \n 4.Joey Tribiani \n"],
    curr_ans:1
  },
 {
  questionS:"who married chandler bing? \n ",
  answerS:["1.Phoebe Buffay \n 2.Monica Geller \n 3.Janice \n 4.Rachel Green \n"],
  curr_ans:2
  },
  {
    questionS:"What type of car does Monica's dad give her? \n",
    answerS:" 1.Aston Martin \n 2.Bentley \n 3.Ferrari \n 4. Porsche \n",
    curr_ans:4
  },
  {
    questionS:"Which fashion brand did Rachel become the executive of from season 5? \n",
    answerS:" 1.Ralph Lauren \n 2.Versace \n 3.Armani \n 4.Dolce and Gabbana \n",
    curr_ans:1
  },
  {
    questionS:" What is Ross Geller's occupation? \n",
    answerS:" 1.Parasitologist \n 2.Paleontologist \n 3.Dialectologist \n 4.Epidemiologist \n",
    curr_ans:2
  }
];
var questions_1=[
  {
    questionS:"Which character has a twin?\n",
    answerS:" 1.Joey \n 2.Rachel \n 3.Phoebe \n 4.Ross \n",
    curr_ans:3
  },
  {
    questionS:"Who was Monica’s first kiss? \n",
    answerS:" 1.Chandler \n 2.Joey \n 3.Fun Bobby \n 4.Ross \n",
    curr_ans:4
  },
  {
    questionS:"Who got their own spinoff? \n",
    answerS:" 1.Chandler \n 2.Ross \n 3.Joey \n 4.Rachel \n",
    curr_ans:3
  },
  {
    questionS:"What is Rachel scared of? \n",
    answerS:" 1.Swings \n 2.Birds \n 3.Monkey \n 4.Unagi \n",  
    curr_ans:1
  },
  {
    questionS:"What store does Phoebe hate? \n",
    answerS:" 1.Central Perk \n 2.Pottery Barn \n 3.Crate & Barrel \n 4.Restoration Hardware. \n",
    curr_ans:2
  }
];
var score=0;

function play(ques,ans,rgt_ans)
 {
   var ans_fuc=readlineSync.keyIn(chalk.green(ques)+(ans),{limit:'$<1-4>'});
  //  console.log(ans_fuc)
   
   if (rgt_ans==ans_fuc)
   {
     console.log(chalk.blue("Currect!!"));
     score++;
   }
   else{
     console.log(chalk.bgYellow("Wrong!!!"));
   }
 }
 
 for(var i=0;i<questions_0.length;i++)
 {
   play(questions_0[i].questionS,questions_0[i].answerS,questions_0[i].curr_ans);
 }
 
 var lvl_res= readlineSync.keyIn("Would you like to play level 2? [y/n]",{limit:'yn'})
 
  if(lvl_res==='y')
  {
    for(var k=0;k<questions_1.length;k++)
      {
        play(questions_1[k].questionS,questions_1[k].answerS,questions_1[k].curr_ans);
      }   
    console.log(chalk.redBright.bold.underline("KUCH KAAM KA KAR LO"));
    console.log(chalk.bgBlue.bold.underline("Score "+score));
  }
  else
  {
      console.log(chalk.redBright.bold.underline("ZINDAGI TUMARI KATAI KHALLI HAO "));
      console.log(chalk.bgBlue.bold.underline("Score "+score));
  }
  // else
  // {console.log(chalk.magenta("ERROR"))}

 if(score>highScoreFunc.high_score)
 {
   console.log(chalk.whiteBright.bgMagenta("NEW HIGH SCORE!!! "));
  //  highScoreFunc.playeName = name ;
  //  highScoreFunc.high_score = score;

 }
