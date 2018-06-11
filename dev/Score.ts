

class Score{
    scoreElement:HTMLElement;
    score:any = 0;
    constructor(){
    this.scoreElement = document.createElement('h1');
    this.scoreElement.innerHTML = this.score;
    document.body.appendChild(this.scoreElement)
    } 
}