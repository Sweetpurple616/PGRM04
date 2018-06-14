

class Score {

    private scoreElement:any;
    private score:any = 0;
    private highscore:any = 0;
    private highscoreElement:any;
    private div:any;

    constructor(){
    this.scoreElement = document.createElement('h1');
    this.scoreElement.innerHTML = this.score;
    document.body.appendChild(this.scoreElement)

    this.div = document.createElement('h3');
    this.div.innerHTML = 'highscore'
    document.body.appendChild(this.div)

    this.highscoreElement = document.createElement('h2');
    this.highscoreElement.innerHTML = this.highscore;
    document.body.appendChild(this.highscoreElement)


    if (localStorage.getItem('highscore')){
        this.highscore = localStorage.getItem('highscore')
        this.highscoreElement.innerHTML = this.highscore;
    }
    }
    public update(punten:number){
        this.scoreElement.innerHTML = punten;
    }
    public save(eindscore:any){
        if (eindscore > this.highscore )
        localStorage.setItem('highscore', eindscore);
    }
}