

class Rijst {
    rijst:HTMLElement
    x:number
    y:number
    speedX : number
    speedY : number
    constructor(){
        
    this.rijst = document.createElement("rijst")
    document.body.appendChild(this.rijst)
    
    this.x = 400
    this.y = 100

    this.speedY = 3
    }
    public getRectangle(){
        return this.rijst.getBoundingClientRect()
    }
    public update() : void {
        this.y += this.speedY
        if (this.y <= window.innerHeight) { 
        console.log(this.y)
        console.log(this.rijst)
                        
        this.rijst.style.transform = `translate(${this.x}px, ${this.y}px)` }
    }

}