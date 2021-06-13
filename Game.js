class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1=createSprite(100,100)
   player1.addAnimation("player1",playerimg)
   player2=createSprite(100,100)
   player2.addAnimation("player2",playerimg2)
        }
        play(){
            form.hide()
            drawSprites()
            Player.getPlayerInfo()
            for(var plr in allPlayers){
                
            }
        }
    }