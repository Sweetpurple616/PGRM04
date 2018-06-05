

class PlayScreen {

    private items: Items
    private rijst: Rijst
    private player: Player
    private game: Game

    constructor(g:Game) {
        // player spawn, combi spawn, score aan maken
        this.game = g
        this.player = new Player((window.innerWidth / 2), 87, 83, 65, 68)
        this.items = new Items
        this.rijst = this.items.rijst
    }
    public update(): void {
        // player movement, item spawn, check item pick up

        // for (var b of this.balls) {

        //     // ball hits paddle
        //     if (this.checkCollision(b.getRectangle(), this.player.getRectangle())) {
        //         b.hitPaddle()
        //     }

        //     // ball leaves the screen: gameover!
        //     if (b.getRectangle().left < 0) {
        //         this.game.showGameoverScreen()
        //     }

        //     b.update()
        // }
        this.items.update()
        this.player.update()
        if (this.items.rijst.y == 733) {
            console.log('een punt')
            this.items.rijst.rijst.remove()

        }
    }

    // private checkCollision(a: ClientRect, b: ClientRect) {
    //     return (a.left <= b.right &&
    //         b.left <= a.right &&
    //         a.top <= b.bottom &&
    //         b.top <= a.bottom)
    // }

}