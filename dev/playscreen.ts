

class PlayScreen {

    private items: Item[] = []
    private player: Player
    private game: Game
    private score: Score
    private p :number = -1
    public punten:number = -1

    constructor(g:Game) {
        // player spawn, combi spawn, score aan maken
        this.game = g
        console.log(this.game)
        this.player = new Player((window.innerWidth / 2), 87, 83, 65, 68)
        this.score = new Score
        console.log(this.score)
        
    }
    public update(): void {
        // player movement, item spawn, check item pick up
        this.p ++
        if ((this.p % 120) == 0){
            this.items.push(new Item())
        }

        for (var i = this.items.length-1; i >= 0; i-- ) {
            if (this.checkCollision(this.items[i].getRectangle(), this.player.getRectangle())) {

                console.log(this.items[i])
                console.log(i);
                
                this.punten ++
                this.score.update(this.punten)
                this.items[i].delete()
                this.items.splice(i ,1)
                break;
            }

            if (this.items[i].getRectangle().bottom > window.innerHeight) {
                this.game.showGameoverScreen()
                this.score.save(this.punten)
            }
            console.log(this.items[i])
            this.items[i].update()
            console.log(i)
            
        }
        this.player.update()

        
    }


    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }

}