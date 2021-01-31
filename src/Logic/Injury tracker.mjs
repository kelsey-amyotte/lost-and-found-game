export default class InjuryTracker {
    constructor() {
        this.injuryMessages = ["Empty", "Empty", "Empty"];
    }
    
    addInjury(injuryType, playerOne) {
        var messagePlaced = false;
        for (var i = 0; i < this.injuryMessages.length && !messagePlaced; i++) {
            if (this.injuryMessages[i] == "Empty") {
                this.injuryMessages[i] = injuryType.toLowerCase();
                messagePlaced = true;
            }
        }
    }

    removeInjury(injuryType, playerOne) {
        var injuryRemoved = false;
        for (var i = 0; i < this.injuryMessages.length && !injuryRemoved; i++) {
            if (this.injuryMessages[i] == injuryType.toLowerCase()) {
                this.injuryMessages[i] = "Empty";
                injuryRemoved = true;
            }
        }
    }

    listInjuries() {
        var message = "You died from ";
        for (var i = 0; i < this.injuryMessages.length; i++) {
            message = message + this.injuryMessages[i] + ", ";
        }
        message = message + ""
        console.log(message);
    }
}