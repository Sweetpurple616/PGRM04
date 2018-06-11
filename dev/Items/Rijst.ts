

class Rijst {
    rijst:any;
    x:number
    y:number
    speedX : number
    speedY : number
    constructor(){
        
    this.rijst = document.createElement("img")
    this.rijst.src = 'images/donuts/blue_icing.png';
    document.body.appendChild(this.rijst)
    
    this.x = (Math.floor(Math.random() * window.innerWidth))
    this.y = 100

    this.speedY = 3
    }
    public getRectangle(){
        return this.rijst.getBoundingClientRect()
    }
    public update() : void {
        this.y += this.speedY
        if (this.y <= window.innerHeight) {                
        this.rijst.style.transform = `translate(${this.x}px, ${this.y}px)`
     }
    }
    public delete(): void{
        this.rijst.remove()
        
    }

}