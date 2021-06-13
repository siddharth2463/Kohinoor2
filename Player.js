class Player {
    constructor() {
        this.index = null;
        this.health = 100;
        this.name = null;
          // create the property for the score and intialize with zero
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            health: this.health,
           
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
    getFinishedPlayers(){
        database.ref('finishPlayers').on("value",(data)=>{
            fp=data.val()
        })
    }
    static updateFinishedPlayers(){
    database.ref('/').update({
        finishPlayers:fp+1
    })
    this.rank+=1
    }
    
}
