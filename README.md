# Inleverdocument CMTTHE01-4


## Speelbare game

http://zoehey.nl/game/docs/

## Checklist

- [x] De game is online speelbaar. 

- [x] De game bevat minimaal één van de onderstaande extra uitdagingen. 

- [x] De game heeft een startscherm en een eindscherm. 

- [x] Er zijn geen bugs. 

Het project maakt gebruik van deze OOP principes. 

- [x] Classes 

- [x] Encapsulation 

- [x] Composition 

- [x] Inheritance 

De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat: 

- [ ] Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het op die plek toegepast. De uitleg is inclusief code voorbeelden. 

- [x] Een klassendiagram van de game. 

- [x] Een link naar de peer review die in week 6 is gedaan

## Toelichting OOP 

Licht toe waar en waarom je deze OOP principes hebt toegepast

- Classes
    Al mijn game elementen staan in classes, een voorbeeld hiervan is de class player, hierin staan de eigenschappen en het gedrag van de player.
    
    ```javascript
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
        this.player = new Player()
        this.score = new Score
        console.log(this.score)
        
    }
    ```
    
- Encapsulation 
    In mijn classes maak ik gebruik private, public en protected functies en variables.
  ```javascript 
    class GameObject {
    protected x: number
    protected y: number
    protected speedX : number;
    protected speedY : number;
    protected div: any;

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

}

    class Player extends GameObject {
    
    private leftkey : number = 65
    private rightkey: number = 68
    
    private leftSpeed : number = 0
    private rightSpeed: number = 0
    ```

- Composition
```javascript 
/// <reference path="PlayScreen.ts"/>

class Game {
    
    private currentscreen:any

    constructor() {
        this.currentscreen = new StartScreen(this)
        this.gameLoop()        
    }
    
    private gameLoop():void{
        this.currentscreen.update()   
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new PlayScreen(this)
    }

    public showGameoverScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new GameOver(this)
    }
} 


window.addEventListener("load", () => new Game())
 ```
- Inheritance
    Ik heb een class genaamd Gameobject deze heb ik gelinkt aan de player en items. Ik heb daar een aantal variables die ik daar declare, en de functie getRect.
```javascript
class GameObject {
    protected x: number
    protected y: number
    protected speedX : number;
    protected speedY : number;
    protected div: any;

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

}
```
## Klassendiagram

![Klassendiagram](https://stud.hosted.hr.nl/0948132/wp-content/uploads/2018/06/uml.png)

## Peer review

https://github.com/Rovexx/CLE4-Programmeren/issues/1

## Extra uitdaging

Mijn extra uitdaging : De game bevat een highscore lijst. Scores worden bewaard nadat de game is afgesloten.

