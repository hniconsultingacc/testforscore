function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XCXunyBVnj":
        Script1();
        break;
      case "6e1iLHD0OV9":
        Script2();
        break;
      case "6Q36te2NhIY":
        Script3();
        break;
      case "6fbn60TFuMy":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;

/*
Variable declaration on the game
- varaible for first name is "Fname"
- varaible for Second name is "Lname"
- varaible for Scord is "Score"
- varaible for GroupScore is "GroupScore"

To get the Score from the game
var player = GetPlayer();
var score = player.GetVar(Score);

To set value to First name variable
var player = GetPlayer();
player.SetVar("VariableName",Value)
*/



// window.Script1 = function(data)
// {
//   // Function for onload
//   var player = GetPlayer();

//   window.setUserName.postMessage('Hello from JS');

// player.SetVar("Fname",data);
// }

window.Script1  =function() {
   window.setFname.postMessage('');
   window.setLname.postMessage('');
   window.setCurrentScore.postMessage('');
}
// function(data)
// {
//   // Function for onload
//   var player = GetPlayer();

//   window.setUserName.postMessage('Hello from JS');

// player.SetVar("Fname",data);
// }
window.Script2 = function()
{
  // Function for Increase Button
}

window.Script3 = function()
{
  // Function for Submit Button
  var player = GetPlayer();
  var score = player.GetVar('Score');
  var groupScore = player.GetVar('GroupScore');
  window.setScore.postMessage(score);
  window.setGroupScore.postMessage(groupScore);
//console.log(score);
// setScore.postMessage(Score);
}

window.Script4 = function()
{
  // Function for Decrease Button
}

};
