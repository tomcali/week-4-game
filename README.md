# week-4-game
Homewook involving jQuery practice

# Inventing a New Game
Finding neither the crystals nor Star Wars games particularly interesting, I decided to invent a game of my own. Play Ball is a choice game to reveal team preferences across baseball fans. The game involves the presentation of logos for the thirty teams. Logos are presented in pairs, and the game player picks the member of each pair that he/she prefers. Mathematics are involved in that a perference score is derived from the game player's paired comparison choices. In sum, we use a game that has a measurement purpose while demonstrating skills in working with JavaScript and jQuery.


## Overview
This assignment involves building a game. It provides an opportunity to develop JavaScript and jQuery programming methods.  

The variation on the design that I am trying involves thirty team logos, pairs of which are selected at random until there are no more logos available. Then the process is repeated multiple times with the restriction that pairs must be distinct from the pairs used previously.

We make use of sets once again. The main thing that I am doing regarding the logic of the game is using set operations. I define a set object following documentation from
Mozilla at

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

I am also putting together a collection of utility functions that I expect to draw on for future projects. These utilities will be my toolbox of sorts going forward. 

I continue to work with Bootstrap 4, which is currently in alpha release. Bootstrap itself requires jQuery.

The program is operational, but incomplete. There is more work to do in both stimulus presentation and the analysis of the choices made by respondents.


## Viewing the Websites

The results of this homework are available as GitHub web pages.


## Requirements for the game called "Play Ball"

This is a simple game displayed with a Bootstrap Jumbotron at the top, a single row of instructions, two columns as the core display elements of the game (the paired comparisons), and a single row at the bottom to display the results at the end of the game. The left-hand-column logo represents the away team in the hypothetical baseball game, and the right-hand-column represents the home team. Teams are selected at random without replacement, utilizing set data structures to manage the process. The respondent's choice for each pair of teams is to pick the team he/she would like to win the game. Each game pits one American League team against one National League team. At the end of Play Ball a count of games won by the American versus National League teams provides an index of the game player's Americal/National League preferences. 


## Technologies Used

- HTML
- CSS (style.css after Bootstrap 4 css and Yeti Bootswatch)
- JavaScript (via Bootstrap 4) 
- Set data structures implemented via JavaScript objects
- Git/GitHub
- Bootstrap for responsive design
- One image used as background for the Bootstrap Jumbotron


## Code Explanation

- We start with GitHub, setting up the week-4-game repostory. We set up directories and subdirectories according to the assignment definitions. And we added bootstap as a directory, using the same structure as in the previous assignment. The javascript directory includes my JavaScript cod. The images directory contains subdirectories for the American and National League team logos. The logos serve as buttons to be depressed by the game player. A separate js directory was set up for the jQuery code. Images for the teams were included as raster jpg files within subdirectories for the American and National Leagues. A separate bootstrap directory accommodates the bootstrap css and js files, as well as the Yeti css theme. (Because I like to be able to continue working when I have no connection to the Internet, I include copies of files in the repositories. Both human-readable and minified versions of JQuery were included because I am learning jQuery, and would like to inspect code for functions/methods on occasion.) 
- Set up the structure a la bootstrap.
- Set up method for choosing pairs of logos.
- Did a bit of JavaScrip coding for the game itself. There are still rough edges that need work but the general structure is in place.
- Deployed to gh-pages.
