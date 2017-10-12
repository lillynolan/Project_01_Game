# Project_01_Game
Simon Says//”Lilly Says”
Website: clerk-apprenticeship-73038.bitballoon.com
-   like the idea of testing someone’s memory
-   could be used for alternate purposes other than just playing a game
        o   maybe testing a concussion 
        o   general tiredness/alertness level

Technologies Used:
- HTML - used HTML to give structure to the game
- CSS- used CSS for styling/positioning of html elements, exceedingly helpful in creating gameboard container, the transform property to rotate the div allowed me to make a viable "Simon Says" board
- JavaScript - used for the crux logic of the game
- jQuery - used jQuery bc easier to select multiple elements at once, really helpful when adding/removing class for the highlight feature, core piece of the game 

Approach Taken:
- Started with CSS elements like background color and heading tags
- Created the container to mimic the game board of Simon Says
- Used one container div to hold the circle
- Then created 4 child elements with the same class but different ids to represent the colors
- Each of the child elements are a square that is 50% of the cotaining width and height, with one edge having a border radius equivalent to half the height of the container 
- Each of the child elements are rotated at a 90 degree angle to represent a circle in 4 different parts
- Styled each of the child elements to match their corresponding colors 
- Added hover features to simulate pressing buttons for the game 
- Moved to the core aspects of the javascript 
- Started with start game function and start button
- Then thought through what the "first action" on the page would need to be, the computers turn of highlighting the pattern
- Used jQuery to remove and add the highlight class through each item in the set first turn array
- Then created the players turn by adding a click event to each color and then pushed the associated id of the color into an array
- created check functino comparison for the player array and computer array where if the entire array did not match then it would be false (you lose), if it was true then it would run the next level function adding a random number 1-4 representing each color to the computers turn array

Wireframes:
-   Instructions Page
    o List out the instructions in clear text
    o Button to enter game arena 

-   Game Page
    o   create start button to set off the game
    o   create home button to return to instructions
    o   keep score, every time the user gets a pattern right
    o   if you get a pattern correct, proceed to next level, score increases by 1
    o   set up 4 objects that each have a highlight event & array associated with them to store into specific patterns 
    o   have the patterns increasingly get longer when the user gets the pattern correct
    o   if users input is === lilly’s array then continue if != trigger you lose 

User Stories:
- Open up Lilly Says
- Read instructions
- Press Lilly Says to enter gameboard
- Press Start to set up computer's first round
- Watch first round, each color highlights in a pattern
- Click each corresponding color in the same pattern that the computer showed
- If correct, hear "correct sound", and score level goes up by 1
- If incorrect, window alert saying "you lose!" shows up with "incorrect" sound
- Page reloads, press start to try again

How-to-use instructions:
- open link 
- read the intructions provided on How to Play page, press "Lilly Says" to get to the game page
- The game is described that there are two players: one is the computer and the other the user 
- the computer is going to show a pattern out of the four colors displayed on the game board page
- the pattern will be interpreted by a series of highlights to each color
- once the highlights finish, the players goal is to mimic the pattern by clicking on the apprioriate colors in the same pattern as the computer 
- once understood press start
- start will set off the first computer round
- the user watches the computer round which is only shown one time, then proceeds to their turn once the last color is lit
- the player must mimic the pattern in terms of order and length 
- if the player gets the pattern correct, the player receives a point and the computer proceeds to the next round
- each round increments the pattern from the previous round by 1
- the player needs to get the patterns right each time as the computers patterns get longer and longer, earning a point of 1 each time
- the player loses if the pattern entered is not the same as the computer's

Unsolved problems:
-Hopefully not many, but one thing I was trying to figure out, but doesn't break my game, is that the mouse if on the board while the computer's turn is playing takes the hover/highlight effect, so it can be hard to tell if the color underneath is lighting up. The way I tried to solve this was to change the opacity of the highlight hover background to something much more subtle than the light up effect for the computer's turn. 

___PROPOSAL___
Game Structure
-   have colors stored into an array if the div lights up then store that into the first position in the array, then so on and so forth 
-   each color div will light up once through its pattern then the user will have to take a turn, and complete the same pattern, if correct, the computer will proceed to the next level showing the initial pattern +1, and so forth. If incorrect, game over and reload 

Potential Challenges to Encounter
-   How the pattern generator is going to function- Is there a way to randomize how the patterns light up and say if the array that is generated by a randomizer === to the array entered by the user, continue on 
-   VISUALLY APPEALING
o   I have trouble positioning elements on a page, review how margin and padding work between images/text and the web page
-   How to get the game to stop, reload and store the user’s past score if they keep playing on the same page 

Phases of Completion 
-   Step 1: Create baseline HTML//CSS outline for the instructions page & game page(1 day)
    o   Create content for the instructions // how to play
    o   Create shell of the game board 
    o   Link pages together with buttons at the top/bottom of each page
-   Step 2: Work through the Javascript (2 days)
    o   Set up the boxes lighting up and increasing in length after each turn
    o   Array length set for the first turn, create function to highlight each element
    o   Create playerTurn function that records the clicks and stores them into an empty array
    o   Create check for comparison between the computerturn array and the playersarray
    o   If it matches (true), then move into function that creates the next level by randomizing the next color and pushes it onto the initial array
    o   If it does not match (false), you lose
-   Step 3: CSS (1 day)
    o   Heighten frame, pick out a visually consistent color base for each page as well as font
    o   Position elements in relation to their text 
-   Step 4: Make webpages responsive//finishing touches (.5 days)
    o   CSS changes for the buttons, and container element 
    o   Add sounds in correspondance to the player's entry
Link References:
https://www.google.com/search?q=simon+says+game+online&safe=off&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRo4aMmNzWAhUM34MKHXwTBswQ_AUIDCgD&biw=1382&bih=744#imgrc=s4zkK_n8Guq1sM:
