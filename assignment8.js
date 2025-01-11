//------------Program #1-------------

// let num1=+ prompt("Enter 1st number:");
// let num2=+ prompt("Enter 2nd number:");
// if(num1>num2)
//     {
//         console.log("The greater is: ",num1);
//     }
// else 
// {
//     console.log("The greater is: ",num2);
// }   

//------------Program #2-------------

// let n1=+ prompt("Enter 1st number:");
// let n2=+ prompt("Enter 2nd number:");
// let n3=+ prompt("Enter 3rd number:");
// if(n1>n2 && n1>n3)
//     {
//         console.log("The greater is: ",n1)
//     }
// else if(n2>n1 && n2>n3)
//     {
//         console.log("The greater is: ",n2)
//     }    
// else
//  {
//      console.log("The greater is: ",n3)
//  }    

//------------Program #3-------------

//  let num=+ prompt("Enter the number:");
//  if(num>0)
//     {
//         console.log(`The number is positive.`)
//     }
// else if(num<0)
//     {
//         console.log(`The number is negative.`)
//     }    
// else
//     {
//         console.log("The number is 0.");
//     }    

//------------Program #4-------------

// let numberr=+ prompt("Enter the number:");
// if(numberr%5===0 && numberr%11 ===0)
//     console.log("The number is divisible by 5 and 11.");
// else
//     console.log("The number is not divisible by 5 and 11.");

//------------Program #5-------------

// let numb=+ prompt("Enter the number:");
// if(numb%2===0)
//     {
//         console.log("This is an even number.")
//     }
//  else
//  {
//     console.log("This is an odd number.")
//  }   
//------------Program #6-------------

// let year=+ prompt("Enter the number:");
// if(year%4===0)
//     {
//         console.log("The year is leap.")
//     }
// else
// {
//     console.log("The year is not leap.")
// }    

//------------Program #7-------------

// let char='A';
// if((char>='A' && char<='Z') || (char>='a' && char<='z'))
//     {
//         console.log("The char is an alphabet.")
//     }
// else
// {
//     console.log("The char is not an alphabet.")
// }    

//------------Program #8-------------

// let char1=prompt("Input any alphabet:")
// if(char1.length===1)
//     {
//         if(char1==='A' || char1==='a' || char1==='E' || char1==='e' || char1==='I' || char1==='i' || char1==='O' || char1==='o' || char1==='U' || char1==='u')  
//             {
//                 console.log("The alphabet is a vowel.")
//             }
//         else
//             {
//                 console.log("The alphabet is a consonant.")
//             }    
//     }
// else
//     {
//         console.log("This is not a character.");
//     }    

//------------Program #9-------------

// let char2=prompt("Input any alphabet:")
//  if(char2.length===1)
//     {
//         if((char2>='A' && char2<='Z') || (char2>='a' && char2<='z'))
//             {
//                 console.log("This is an alphabet.");
//             }        
//         else if(char2>=0 && char2<=9)
//             {
//                 console.log("This is a digit.")
//             }    
//         else
//         {
//             console.log("This is a special character.")
//         }    
//     }
//   else
//   {
//     console.log("This is not a character.")
//   }  

//------------Program #10-------------

// let char3=prompt("Input any alphabet:")
// if(char3.length===1)
//     {
//         if(char3>='A' && char3<='Z')
//             {
//                 console.log("This is an uppercase alphabet.")
//             }
//         else
//         {
//             console.log("This is not a lowercase alphabet.")
//         }    
//     }
//     else
//        {
//          console.log("This is not a character.")
//        } 

//------------Program #11-------------

// let weekDay=+ prompt("Enter number from 1 to 7");
//         if(weekDay===1)
//             {
//                 console.log("Monday.");
//             }
//           else if(weekDay===2)
//                 {
//                     console.log("Tuesday.");
//                 }
//                 else if(weekDay===3)
//                     {
//                         console.log("Wednesday.");
//                     }          
//                     else if(weekDay===4)
//                         {
//                             console.log("Thirsday.");
//                         }   
//                         else if(weekDay===5)
//                             {
//                                 console.log("Friday.");
//                             }  
//                             else if(weekDay===6)
//                                 {
//                                     console.log("Saturday.");
//                                 } 
//                                 else if(weekDay===7)
//                                     {
//                                         console.log("Sunday.");
//                                     }
//                                     else{
//                                         console.log("Invalid week day.")
//                                     }
    
//------------Program #12-------------

// let month=+ prompt("Enter the number of month:");
// if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12)
//     {
//         console.log("This month has 31 days.")
//     }
// else if(month===4 || month===6 || month===9 || month===11)
//     {
//         console.log("This month has 30 days.");
//     } 
// else if(month===2)
//     {
//         console.log("This month has 28 or 29 days.");
//     }       
// else{
//     console.log("Invalid month number.");
// }    

//------------Program #14-------------

// let angle1=+ prompt("Enter 1st angle of triangle:");
// let angle2=+ prompt("Enter 2nd angle of triangle:");
// let angle3=+ prompt("Enter 3rd angle of triangle:");
// let sum=angle1+angle2+angle3;
// if(sum===180 && angle1>0 && angle2>0 && angle3>0)
//     {
//         console.log("This is valid triangle.");
//     }
// else
//     {
//         console.log("This is not a valid triangle.");
//     }    

//------------Program #15-------------

// let side1=+ prompt("Enter 1st side of triangle:");
// let side2=+ prompt("Enter 2nd side of triangle:");
// let side3=+ prompt("Enter 3rd side of triangle:");
// if(side1>0 && side2>0 && side3>0 && (side1+side2>side3 && side2+side3>side1 && side1+side3>side2) )
//     {
//         console.log("This is valid triangle.");
//     }
// else
// {
//     console.log("This is not a valid triangle.");
// }    

//------------Program #16-------------

// let sides1=+ prompt("Enter 1st side of triangle:");
// let sides2=+ prompt("Enter 2nd side of triangle:");
// let sides3=+ prompt("Enter 3rd side of triangle:");
// if(sides1>0 && sides2>0 && sides3>0)
//     {   
// if( (sides1===sides2) && (sides2===sides3))
//     {
//         console.log("This is an Equilateral triangle.");
//     }
// else if( (sides1===sides2) || (sides2===sides3))
// {
//     console.log("This is an Isosceles triangle");
// }    
// else
// {
//     console.log("This is Scalene triangle");
// }
// }
// else
// {
//     console.log("Invalid triangle.");
// }

//------------Program #18-------------

// let costPrice=+ prompt("Enter cost price:");
// let sellPrice=+ prompt("Enter sell price:");
// if(costPrice<sellPrice)
//     {
//         let profit=sellPrice-costPrice;
//         console.log("Profit is: ",profit);
//     }
// else
// {
//     let loss=sellPrice-costPrice;
//     console.log("Loss is: ",loss);
// }    

//------------Program #19-------------

// let marks1=+ prompt("Enter marks of Mathematics:");
// let marks2=+ prompt("Enter marks of Physics:");
// let marks3=+ prompt("Enter marks of Chemistry:");
// let marks4=+ prompt("Enter marks of Mathematics:");
// let marks5=+ prompt("Enter marks of Computer:");
// let sum=marks1+marks2+marks3+marks4+marks5;
// let Percentage=(sum/500)*100;
// console.log(`Your Percentage is: ${Percentage}%`);
// if(Percentage >= 90)
//     {
//         console.log("Your grade is A.");
//     }
//    else if(Percentage >= 80)
//         {
//             console.log("Your grade is B.");
//         }
//         else if(Percentage >= 70)
//             {
//                 console.log("Your grade is C.");
//             }     
//             else if(Percentage >= 60)
//                 {
//                     console.log("Your grade is D.");
//                 }    
//                 else if(Percentage >= 40)
//                     {
//                         console.log("Your grade is E.");
//                     }       
//                  else
//                  {
//                     console.log("Your grade is F.")
//                  }   

//------------Program #20-------------

let basicSalary=+ prompt("Enter your basic salary:");
if(basicSalary<=10000)
    {
        let HRA=basicSalary*(20/100);
        let DA=basicSalary*(80/100);
        let grossSalary=basicSalary+HRA+DA;
        console.log("Your Gross Salary is: ",grossSalary);
    }
else if(basicSalary<=20000)
    {
        let HRA=basicSalary*(25/100);
        let DA=basicSalary*(90/100);
        let grossSalary=basicSalary+HRA+DA;
        console.log("Your Gross Salary is: ",grossSalary);
    }    
else 
    {
        let HRA=basicSalary*(30/100);
        let DA=basicSalary*(95/100);
        let grossSalary=basicSalary+HRA+DA;
        console.log("Your Gross Salary is: ",grossSalary);
    }

//------------Program #21-------------

let units=+ prompt("Enter electricity unit charges:");
if(units>=0 && units<=50)
    {
        let bill= units*0.5;
        let surcharge=bill*(20/100);
        bill+=surcharge;
        console.log("Total  total electricity bill is: ",bill);
    }
else if(units>=51 && units<=150)
    {
        let bill= units*0.75;
        let surcharge=bill*(20/100);
        bill+=surcharge;
        console.log("Total  total electricity bill is: ",bill);
    }    
else if(units>=151 && units<=250)
    {
        let bill= units*1.20;
        let surcharge=bill*(20/100);
        bill+=surcharge;
        console.log("Total  total electricity bill is: ",bill);
    }    
else
    {
        let bill= units*1.50;
        let surcharge=bill*(20/100);
        bill+=surcharge;
        console.log("Total  total electricity bill is: ",bill);
    }    