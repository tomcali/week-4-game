// hangman-style game for teaching statistics

// total wrapper function
// we wrap the entire game code in a standard JavaScript function
// as an alternative to the $(document).ready(function() of jQuery
// another way would be to write  window.onload = function () {
document.addEventListener("DOMContentLoaded", function() {
// document.addEventListener("startButton", "click", function() {

// declare variables up front
    var numberGames = 3; // ballgames to be played
    // regarding rules... set low value for testing
    var indexOfGame;
    var selectedAwayTeam;
    var selectedHomeTeam;
    var americanSet;
    var nationalSet;
    var americanUsedSet;
    var nationalUsedSet; 
    var numberAmericanChosen; 
    var numberNationalChosen;
    var leaguePreferenceScore;

// identify DOM elements up front 
    var startButton = document.getElementById("startButton");
    var awayTeamButton = document.getElementById("awayTeamButton");
    var homeTeamButton = document.getElementById("homeTeamButton");
    var gameResultText = document.getElementById("gameResultText");

// set american and national icon sets as arrays and then sets of strings
    var americanIconArray = ['logo_ana_79x76.jpg',  'logo_cws_79x76.jpg',  'logo_min_79x76.jpg',
                        'logo_tb_79x76.jpg', 'logo_bal_79x76.jpg',  'logo_det_79x76.jpg',
                        'logo_nyy_79x76.jpg',  'logo_tex_79x76.jpg', 'logo_bos_79x76.jpg',
                        'logo_hou_79x76.jpg',  'logo_oak_79x76.jpg',  'logo_tor_79x76.jpg',
                        'logo_cle_79x76.jpg',  'logo_kc_79x76.jpg',   'logo_sea_79x76.jpg'];
    var americanIconSet = new Set(americanIconArray);

    var nationalIconArray = ['logo_ari_79x76.jpg', 'logo_col_79x76.jpg',  'logo_nym_79x76.jpg',
                        'logo_sf_79x76.jpg', 'logo_atl_79x76.jpg',  'logo_la_79x76.jpg',
                        'logo_phi_79x76.jpg', 'logo_stl_79x76.jpg', 'logo_chc_79x76.jpg',
                        'logo_mia_79x76.jpg', 'logo_pit_79x76.jpg',  'logo_was_79x76.jpg',
                        'logo_cin_79x76.jpg',  'logo_mil_79x76.jpg',  'logo_sd_79x76.jpg'];
    var nationalIconSet = new Set(nationalIconArray);

$("#startGame").on("click", function() {
    // readGameData.js contains an array of JSON objects for the game items
    console.log('-------------------------------');
    console.log('-------- START NEW GAME -------');
    console.log('-------------------------------');
    console.log('the game data consists of a set of ' +  numberGames + 
        ' hypothetical baseball games');

    var americanGameSet = americanIconSet;  // initialize
    var nationalGameSet = nationalIconSet;  // initialize
    indexOfGame = 0;
    while (indexOfGame < numberGames) {
        console.log('-----------------------------');

    // need to add logic associated with clicking on either
    // the away team or the home team

    $("#awayButton").on("click", function() {
        // chalk up a vote for the away team that was displayed
        // and move to the next pair of teams
    }

    $("#homeButton").on("click", function() {
        // chalk up a vote for the home team that was displayed
        // and move to the next pair of teams
    }

        // choose teams at random without replacement

    }; // end of major while-loop

    // report result of game to DOM
 
    gameResultText.innerHTML = ('You chose ' + ' American League Teams and ' + 
        ' National League Teams');
  
}); // startButton.onclick function end

}); // end of total wrapper function
