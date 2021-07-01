var FirstName = "Rand Albqour"
Age = 29
console.log("My Name is " + FirstName + " And i'm " + Age + " year-old")
X = 20
Y = 21
var sum = X + Y
console.log(sum)
D = 50
F = 75
if (D => 45) { console.log("Have a nice day") }
else { console.log("Go Away") }

// a random comment

var massage = prompt("Write a nice Massage to yourself")
console.log(massage)
alert("You deserve it :) ")

var x = prompt("how many Movies do you watch per month?")
for (var i = 0; i < x; i++) {
  if (x < 5) {
    alert("you're Normal :)")
    break
  }
  else if (x > 5 && x < 12) { alert("you're hurting your eyes!") 
  break }
  else { alert("you're in Danger!") 
  break }

}
var R = prompt ("how times you need to see the images?") ;
for (var i = 0; i < R ; i++)  {
  document.write("<img src ='https://petkeen.com/wp-content/uploads/2020/06/shutterstock_722595979.jpg'> " ) ;
}


  if (massage != null) { document.write("<h4>" + massage + "</h4>") }
  function myFunction() {
    confirm("Goodbye! Don't forget the Massage ;) ");
  }


