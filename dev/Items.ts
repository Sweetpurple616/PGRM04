
class Item {
    
    public rijst : Rijst
    
    constructor() {
    this.rijst = new Rijst()
    
    }

    
    // public hitPaddle(){
    //     this.speedX *= -1
    // }
    // public random() {
           //var imageLink;
    //     let rnumber = Math.floor(Math.random() * 12);  
    //     switch(rnumber){
    //         case 0:
    //             var  = 'rijst'
    //             break;
    //         case 1:
    //             var imageLink = ''
    //             break;
    //         case 2:
    //             var classItem = ''
    //             break;
    //     }
    //     return classItem
    // }

    public update() : void {
        this.rijst.update()
    } 
    public delete() : void{
        this.rijst.delete()
        console.log('ik delete alles')
    }
}