//tests
var tests = {
	test_number:{
		questions:["start","end"],
		exceptions:["question_number"],
		prompts:[
			{
				question:["numbers"],
				parts:["empty or a + b + c + ..."]
			}
		]
	}
}

/* for practice pg

Unit 1: Primitive Types
Unit 2: Using Objects
Unit 3: Boolean Expressions and if Statements
Unit 4: Iteration
Unit 5: Writing Classes
Unit 6: Array
Unit 7: ArrayList
Unit 8: 2D Array
Unit 9: Inheritance
Unit 10: Recursion


do on-demand loading:
1. find question from question type @ a level
2. go to tests.json and see if it has a prompt
3. get question and prompts
4. display
	a. if question only, append ez
	b. if question and prompts, append a draggable external window and arrows to click through the multiple slides in a prompt
		-code for this is in ettutor
-note: for all images display, add on the listener to expand on click
	-code for this is in ettutor app ez

~ question answer progress tracking ~
do per-unit level assessment: determine elo gained w/ question streak and TIME
do (bonus elo gain) variable (and bouns elo lost,) start at 20 and incr

question streak
	-let increased elo gains but only on large large streaks: after 3 questions in a row
time
	-only let time help win streaks
	-if time is crazy high (even in situations where they left tab up) dont let increased elo gains, but let the win thru

let incorrect answers instantly reset small bonus elo streaks
let 2 incorrect answers over 5 questions for a large bonus elo reset




*/