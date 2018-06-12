"use strict";
var Item = (function () {
    function Item() {
        this.item = document.createElement("img");
        this.item.src = this.random();
        document.body.appendChild(this.item);
        this.x = (Math.floor(Math.random() * (window.innerWidth - 82)));
        this.y = 100;
        this.speedY = (Math.floor(Math.random() * 4) + 2);
    }
    Item.prototype.random = function () {
        var imageLink;
        var rnumber = Math.floor(Math.random() * 12);
        switch (rnumber) {
            case 0:
                imageLink = 'images/donuts/blue_icing.png';
                break;
            case 1:
                imageLink = 'images/donuts/chocolate_icing_chocolate_drizzle.png';
                break;
            case 2:
                imageLink = 'images/donuts/chocolate_icing.png';
                break;
            case 3:
                imageLink = 'images/donuts/dark_red_icing.png';
                break;
            case 4:
                imageLink = 'images/donuts/green_icing_green_sprinkles.png';
                break;
            case 5:
                imageLink = 'images/donuts/orange_icing_chocolate_shaving.png';
                break;
            case 6:
                imageLink = 'images/donuts/pink_icing_sprinkles.png';
                break;
            case 7:
                imageLink = 'images/donuts/pink_icing_white_drizzle.png';
                break;
            case 8:
                imageLink = 'images/donuts/red_icing_white_sprinkles.png';
                break;
            case 9:
                imageLink = 'images/donuts/white_icing_sprinkles.png';
                break;
            case 10:
                imageLink = 'images/donuts/white_icing.png';
                break;
            case 11:
                imageLink = 'images/donuts/yellow_icing_chocolate_drizzle.png';
                break;
        }
        return imageLink;
    };
    Item.prototype.update = function () {
        this.y += this.speedY;
        if (this.y <= window.innerHeight) {
            this.item.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        }
    };
    Item.prototype.delete = function () {
        console.log('ik delete alles');
    };
    return Item;
}());
var Score = (function () {
    function Score() {
        this.score = 0;
        this.scoreElement = document.createElement('h1');
        this.scoreElement.innerHTML = this.score;
        document.body.appendChild(this.scoreElement);
    }
    return Score;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.game = g;
        console.log(this.game);
        this.player = new Player((window.innerWidth / 2), 87, 83, 65, 68);
        this.item = new Item;
        this.score = new Score;
        console.log(this.score);
    }
    PlayScreen.prototype.update = function () {
        this.item.update();
        this.player.update();
    };
    return PlayScreen;
}());
var Game = (function () {
    function Game() {
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new PlayScreen(this);
    };
    Game.prototype.showGameoverScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new GameOver(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "GAME OVER, MAN";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return GameOver;
}());
var Player = (function () {
    function Player(xp, up, down, left, right) {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.x = xp;
        this.y = 600;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Player.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "Verzamel alle donuts";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map