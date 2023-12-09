// scoreboard starts at 0 and it will show the current scores
const state = {
    teamga: 0,
    teameverlance: 0,
    currentQuestion: {},
    whichTeam: true
}
// all the questions will be in an array
let questions = []

//resets the teamBoard
const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $gascore = $("#teamga h3")
const $evscore = $("#teameverlance h3")

console.log($gascore, $evscore)

// Behind the scenes

const URL = "https://cdn.contentful.com/spaces/svw4d0i6i87i/environments/master/entries?access_token=nm9EiV_n2XckXPXr4VDqdfctvj7dvSPuEkK2Er5D9QA&&content_type=triviaq"
$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

// set the board for first time and place in questions' array
    teamBoard(questions)
})

const selectAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log("correct")

        // teamga answers correctly right, it gets the point and determines who's turn is it
        if(state.whichTeam){
            state.teamga++
            state.whichTeam = !state.whichTeam
        // if teamga is wrong, then it's teameverlance's turn
        }else{
            state.teameverlance++
            state.whichTeam = !state.whichTeam
        }
        // new question appear
        teamBoard(questions)

        // if wrong answer is chosen, reset the board and next team's turn
    } else {
        console.log("wrong")
        teamBoard(questions)
        state.whichTeam = !state.whichTeam
        
    }
}

// visually on the webpage:
// set the board... bring in the questions randomly by getting a random question using a random index from the array
const teamBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

// use the const q & a to declare the question and answers
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)

// change the teams' scores
$gascore.text(state.teamga)
$evscore.text(state.teameverlance)

// remove the old event listener
$("li").off()

// pick an answer
$("li").on("click", (event) => {
    selectAnswer(event, randomQuestion)
})
}