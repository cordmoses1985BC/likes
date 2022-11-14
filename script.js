var toplikes = 9;
var middlelikes = 12;
var bottomlikes = 9;

var topLikesNumber = document.querySelector("#topLikeButton");

var middlelikesnumber = document.querySelector("#middlelikebutton");

var bottomlikesnumber = document.querySelector("#bottomlikebutton");

console.log(topLikesNumber);

function addaliketop() {
    toplikes ++;
    console.log(toplikes);
    topLikesNumber.innerText = toplikes;
}

function addalikemiddle() {
    middlelikes ++;
    console.log(middlelikes);
    middlelikesnumber.innerText = middlelikes;
}

function addalikebottom() {
    bottomlikes ++;
    console.log(bottomlikes);
    bottomlikesnumber.innerText = bottomlikes;
}
