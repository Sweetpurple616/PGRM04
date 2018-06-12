

class Score {
    scoreElement:any;
    score:any = 0;
    highscore:any = 0;
    highscoreElement:any;
    hg:any;
    constructor(){
    this.scoreElement = document.createElement('h1');
    this.scoreElement.innerHTML = this.score;
    document.body.appendChild(this.scoreElement)

    this.hg = document.createElement('h3');
    this.hg.innerHTML = 'highscore'
    document.body.appendChild(this.hg)

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