// function to randomly choose what you would be doing as a parent

function getParentAction() {

  var input = document.getElementById("inputText").value;

  if (input == "") {
    alert("You must enter what you did!");

  } else {

    var result_possibilities = ["Went to Target.",
    "Gone to Home Depot.",
    "Brought the kids to the park.",
    "Gone grocery shopping...again.",
    "Fought with your partner for no reason, but it was likely catalyzed by having children.",
    "Argued about who got to run the errands alone.",
    "Googled how to remove vomit smell from...",
    "Clipped tiny fingernails.",
    "Thought about touching your partner but got too tired.",
    "Passed out cold while trying to help another human sleep.",
    "Stayed at home."];

    var result = result_possibilities[Math.floor(Math.random()*result_possibilities.length)];

    document.getElementById("resultText").innerHTML = result;
  }

}
