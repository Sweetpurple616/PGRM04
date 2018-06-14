/// <reference path="gameObject.ts"/>

class Player extends Gameobject {
    
    private leftkey : number = 65
    private rightkey: number = 68
    
    private leftSpeed : number = 0
    private rightSpeed: number = 0
    
    
    constructor()  {
        super()
        this.div = document.createElement("player")
        document.body.appendChild(this.div)
        
        this.x      = (window.innerWidth / 2)
        this.y      = 600
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 8
                break
            case this.rightkey:
                this.rightSpeed = 8
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 0
                break
            case this.rightkey:
                this.rightSpeed = 0
                break
        }
    }

    public update() {

        let newX = this.x - this.leftSpeed + this.rightSpeed

        if (newX > 0 && newX + 100 < window.innerWidth) this.x = newX
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
}