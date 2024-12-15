//------------Program #1-------------

let i=prompt("Enter 0 or 1");
if(i===0)
    {
        console.log("Light is off.")
    }
else if(i===1)
    {
        console.log("Light is on.")
    }    
else{
    console.log("Invalid input.");
}

//------------Program #2-------------

let j=prompt("Enter the color for traffic light");
if(j==="RED" || j==="red")
    {
        console.log("Stop.");
    }
else if(j==="YELLOW" || j==="yellow")
        {
            console.log("Slow down.");
        }    
else if(j==="GREEN" || j==="green")
        {
           console.log("Go.");
        }        
else
{
    console.log("Inavlid Color.");
}        

//------------Program #3-------------

let temp=prompt("Enter the Temprature in Celcius");
if(temp<=0)
    {
        console.log("Freezing.")
    }
else if(temp>0 && temp<=15)
    {
        console.log("Cold.")
    }    
else if(temp>15 && temp <=30)
    {
        console.log("Warm.")
    }    
else 
    {
        console.log("Hot.");
    }    

//------------Program #4-------------

let player1=prompt("Enter your input as Rock,Paper or Scissor");
let player2=prompt("Enter your input as Rock,Paper or Scissor");
if(player1==="rock" && player2==="scissor")
    {
        console.log("Player 1 wins.")
    }
 else if(player1==="scissor" && player2==="rock")
        {
            console.log("Player 2 wins.")
        }    
 else if(player1==="paper" && player2==="rock")
        {
            console.log("Player 1 wins.")
        }    
 else if(player1==="rock" && player2==="paper")
        {
            console.log("Player 2 wins.")
        }
  else if(player1==="scissor" && player2==="paper")
    {
        console.log("Player 1 wins.");
    }      
 else if(player1==="paper" && player2==="scissor")
    {
        console.log("Player 2 wins.");
    }    
  else if(player1===player2)
    {
        console.log("tie.")
    }  
  else
  {
    console.log("Invalid input.");
  }  

//------------Program #5-------------

let input1=prompt("Is the door open?");
let input2=prompt("Is motion detected?");
if(input1==="yes" || input2==="yes")
    {
        console.log("Alarm triggerd.");
    }
else if(input1==="no" && input2==="no")
    {
        console.log("All safe.");
    }
else
{
    console.log("Invalid input.");
}    

//------------Program #6-------------

let num=prompt("Press 1 to convert cToF and press 2 to convert fToC.");
switch(num)
{
    case "1":
        let cToF=prompt("Enter temprature in celsius");
        console.log((cToF*9/5)+32);
        break;
    case "2":
        let fToC=prompt("Enter temprature in Fahrenheit");
        console.log((fToC-32)*5/9);
        break;    
    default:
        console.log("Invalid choice.")    
}

//------------Program #7-------------

let pass=prompt("Enter your Password");
if(pass.length>=8)
    {
        console.log("Strong Password.")
    }
  else if(pass.length>=5 && pass.length<=7)
        {
            console.log("Moderate Password.")
        }    
   else
   {
    console.log("Weak Password.")
   }     

//------------Program #8-------------

let option = Number(prompt("Enter 1 for 'Heads' or 0 for 'Tails'."));
let result = Math.floor(Math.random()* 2);
console.log(result);

if (option === result ){
    console.log("You wins");   
}
else{
    console.log("You Lose");
}

//------------Program #9-------------

let weatherInput = prompt("Enter weather input (Sunny, Rainy, Cold) .").toLocaleLowerCase();
if(weatherInput ==="sunny"){
    console.log("Wear sunglasses");
    }
else if(weatherInput === "rainy"){
    console.log("Take an umbrella");   
}

else if(weatherInput === "cold"){
    console.log("Wear a jacket");
    
}

else{
    console.log("invalid choice");
    
}

//------------Program #11-------------

let userAge = prompt("enter your age");
if(userAge >=18){
    console.log("eligible for voting ");
    
}
else{
    console.log("not eligible");
    
}

//------------Program #12-------------

let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
    
}
else{
    console.log(`${num2} is greater than ${num1}`);
}