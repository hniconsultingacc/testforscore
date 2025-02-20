function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XCXunyBVnj":
        Script1();
        break;
      case "6Q36te2NhIY":
        Script3();
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


window.Script1  =function() {
   window.setFname.postMessage('');
   window.setLname.postMessage('');
   window.setCurrentScore.postMessage('');
}


window.Script3 = function()
{
  var player = GetPlayer();
  var score = player.GetVar('Score');
  var groupScore = player.GetVar('GroupScore');
  window.setScore.postMessage(score);
 window.setGroupScore.postMessage(groupScore);
}
};