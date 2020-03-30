import React, { Component } from "react";
import { Header, Segment } from 'semantic-ui-react'

class GamesContainer extends Component {

  render() {
    return(
      <Segment style={{whiteSpace: 'pre-wrap'}}>
        <Header as='h2'>How to Play Book Bingo</Header>
        <p>There are two roles in book bingo. You can either be a game host or a player of a game.
        </p>

        <Header as='h5'>Host</Header>
        <p>As a host you have control of the bingo board and the score board.</p>
      <ul>

        <li>
          Responsibilities As A Host:
          <ul>
            <li>Create a game that determines the tasks that players need to complete for each block on the board</li>
            <li>Make the rules for your own game. Hosts can determine the points system for their own games.</li>
            <li>Update each player's board if they complete a block</li>
            <li>Update the score board when players get points</li>
            <li>Chat with players.</li>
          </ul> 

        <li>
          Tips for Hosting a Game:
          <ul>
            <li>Rules</li>
              <ul>
                <li>Make certain rules for the bingo portion of the game.
                  Will the game give points 5 in a row completion? 
                  Will there be extra points for blackout?
                  Maybe give points only for certain letters like X or L 
                  Can they restart their boards if they get a blackout?
                </li>
                <li>A good rule of thumb to follow for scoring:
                  5 points for 5 in a row, 1 points for each book read, 
                  1 point for each 100pgs(capping this at 500pgs is also a good idea),
                  Half points should be considered for picture books</li>
              </ul>
            <li>Task Ideas</li>
              <ul>
                <li>Read with a book that starts with......(any letter of your choice)</li>
                <li>Read a book by...(certain author)</li>
                <li>Read a book with (any color) on the cover</li>
                <li>Tasks based on the theme of your game. 
                  For example if the theme of your game is Game of Thrones, 
                  then one of the tasks can be "Read a book with dragons"</li>
                <li>Read a book published in...(a certain year)</li> 
                <li>Read a book that has been turned into a TV show or movie</li> 
                <li>Read a book with an apple on the cover</li>
              </ul>
            </ul>  
          </li>  
          </li>
      </ul>

      <Header as='h5'>Players</Header>
      <li>
            Players Responsibilities:
             <ul>
               <li>Look through the games page and pick a board you like</li>
               <li>Join a game</li>
               <li>After reading a book, click on the points tab in the comments section
                 and post the details of your book.
               </li>
               <li>A points post look something like this:
                 Title: "Persuasion by Jane Austen"
                 Pages: "249 pgs"
                 Board block: "Read a book with romance"
               </li>
               <li>Chat with players</li>
               <li>Be honest and display good sportsmanship</li>
             </ul>
        </li>
      </Segment>
    )
  }
}

export default GamesContainer