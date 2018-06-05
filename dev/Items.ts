
class Items {
    
    public rijst : Rijst
    
    constructor() {
    this.rijst = new Rijst()
        
    }

    
    // public hitPaddle(){
    //     this.speedX *= -1
    // }

    public update() : void {
        this.rijst.update()
    }
}