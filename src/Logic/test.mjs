import Player from "../Profile/Player.mjs";
import GameWorld from "../Profile/GameWorld.mjs";
import DayLoop from "./Day Loop.mjs";
import InjuryTracker from "./Injury tracker.mjs";

function myFunction() {
    var testPlayer = new Player();
    var testWorld = new GameWorld();
    var gameWorld = new DayLoop();
    gameWorld.runDay(testPlayer, testWorld, true);
    /*var trackInjuries = new InjuryTracker();
    trackInjuries.addInjury("dehydration", testPlayer);
    trackInjuries.addInjury("a broken leg", testPlayer);
    trackInjuries.addInjury("hunger", testPlayer);
    trackInjuries.listInjuries();
    trackInjuries.removeInjury("a broken leg", testPlayer);
    trackInjuries.listInjuries();
    */
}
myFunction();