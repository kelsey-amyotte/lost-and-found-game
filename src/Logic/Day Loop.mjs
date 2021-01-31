import GameWorld from "../Profile/GameWorld.mjs";
import Player from '../Profile/Player.mjs';
import InjuryTracker from "./Injury tracker.mjs";

export default class DayLoop {
    constructor() {
        this.dayCount = 0;
    }

    runDay(playerOne, world, debug) {
        this.dayCount = this.dayCount + 1;

        //Determine weather
        if (world.weatherCondition != "clear") {
            if (debug) {
                console.log("The " + world.weatherCondition + " appears to have passed.")
            }
        }
        if (playerOne.isCursed) {
            //Player cursed, force heavy rain or fog
            playerOne.isCursed = false; //Remove curse for next day
            if (Math.random * 100 > 50) {
                //Heavy rain
                world.weatherCondition = "Heavy Rain";
            } else {
                //Heavy fog
                world.weatherCondition = "Heavy Fog";
            }
        } else {
            //Player not cursed, normal weather randomization
            var weatherRoll = Math.random() * 100;
            if (weatherRoll < 10) {
                world.weatherCondition = "rain";
                if (world.waterCollector) {
                    playerOne.waterSupply = playerOne.waterSupply + 10;
                    if (debug) { console.log("Your water collector catches some rain water") }
                }
            }
            else if (weatherRoll < 16) {
                world.weatherCondition = "heavy rain";
                if (world.waterCollector) {
                    playerOne.waterSupply = playerOne.waterSupply + 20;
                    if (debug) { console.log("Your water collector catches a lot of rain water") }
                }
            }
            else if (weatherRoll < 26) { world.weatherCondition = "fog"; }
            else if (weatherRoll < 32) { world.weatherCondition = "heavy fog"; }
            else if (weatherRoll < 42) { world.weatherCondition = "heat"; }
            else if (weatherRoll < 48) { world.weatherCondition = "heat wave"; }
            //~50% chance of adverse weather conditions
            //~63% chance of poor weather conditions
            //~37% chance of extreme weather conditions
        }
        if (debug) {
            console.log("You wake up to a new day, the weather is " + world.weatherCondition + ".");
        }

        //Check for food and water supplies
        world.foodSupply = world.foodSupply - 20;
        world.waterSupply = world.waterSupply - 20;
        if (GameWorld.foodSupply < 20) {
            if (debug) { console.log("Your stomach growls, you ache of hunger from not eating enough last night.") }
            InjuryTracker.addInjury("hunger", playerOne);

        }
        if (GameWorld.waterSupply < 20) {
            if (debug) { console.log("Your throat is parched, you feel the urge to drop everything and find water.") }
            InjuryTracker.addInjury("dehydration", playerOne);
        }

        //Determine random events
        var numberOfEvents = Math.random() * 3; //0-3

        //If weather occured today, one less random event occurs
        if (weatherRoll < 48) { numberOfEvents = numberOfEvents - 1; }
        for (var i = 0; i < numberOfEvents; i++) {
            var eventRoll = Math.random() * 100;
            if (eventRoll < 30) {
                var dailyMessages = ["You think you see a plane overhead, but it could have just been a bird.", "The forest feels quiet today.",
                    "You finder a spider in your shoe, it is ultimately useless but it gave you quite the spook.",
                    "You've had a lot of time to reflect on your past mistakes, you wish your mother was here so you could tell her you're sorry.",
                    "You notice you're developing quite the farmer's tan.", "You swear this part of the forest looks new to you.", "You got here " + this.dayCount + " days ago, but it feels like a month.",
                    "The memories of yesterday seem to haunt you and fill you with doubt.", "An unfamiliar scent is in the air, perhaps something passed through the area?",
                    "A feeling of adventure washes over you. Perhaps a day to explore your surroundings?", "Sometimes you swear you can hear things at night, and they are getting louder with each passing night.",
                    "A feeling of dread lingers in the air, 'Maybe I should move the camp?'"]
                var messageNumber = Math.floor(Math.random() * dailyMessages.length);
                console.log("Displaying message " + messageNumber + ": " + dailyMessages[messageNumber]);
            } else if (eventRoll < 35) {
                console.log("You find animal tracks near to your camp, they look to be from a small animal.")
            } else if (eventRoll < 38) {
                console.log("You find animal tracks near to your camp, they look to be from a large animal.")
            } else if (eventRoll < 40) {
                console.log("You find animal tracks near to your camp, they look to be from a dangerous animal.")
            }
        }

        //Random loot chance
        var lootRoll = Math.random() * 100;
        var commonLoot = ["Weapon", "Axe", "Fishing rod", "Shovel", "Bucket", "Energy bar", "juicebox", "Loose stones"];
        var uncommonLoot = ["Pickaxe", "Flashlight", "Bottle of water", "lunchbox", "Loose wood", "Stone pile"];
        var rareLoot = ["Gun", "Medkit", "Jug of water", "Emergency Rations"];
        if (lootRoll < 10) {
            //Rare loot table
            console.log("You find a " + rareLoot[Math.floor(Math.random() * rareLoot.length)] + ". A big find! It's a secret tool that will help us later.");
        } else if (lootRoll < 35) {
            //Uncommon loot table
            console.log("You find a " + uncommonLoot[Math.floor(Math.random() * uncommonLoot.length)] + ". A lucky find for sure");
        } else {
            //Common loot table
            console.log("You find a " + commonLoot[Math.floor(Math.random() * commonLoot.length)] + ". It is useful for something");
        }
    }
}