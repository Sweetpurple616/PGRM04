"use strict";
var Items = (function () {
    function Items() {
        this.rijst = new Rijst();
    }
    Items.prototype.update = function () {
        this.rijst.update();
    };
    return Items;
}());
var Score = (function () {
    function Score() {
    }
    return Score;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.game = g;
        this.player = new Player((window.innerWidth / 2), 87, 83, 65, 68);
        this.items = new Items;
        this.rijst = this.items.rijst;
    }
    PlayScreen.prototype.update = function () {
        this.items.update();
        this.player.update();
        if (this.items.rijst.y == 733) {
            console.log('een punt');
            this.items.rijst.rijst.remove();
        }
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
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
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
        this.div.innerHTML = "Maak de juiste combinaties";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
var Rijst = (function () {
    function Rijst() {
        this.rijst = document.createElement("rijst");
        document.body.appendChild(this.rijst);
        this.x = 400;
        this.y = 100;
        this.speedY = 3;
    }
    Rijst.prototype.getRectangle = function () {
        return this.rijst.getBoundingClientRect();
    };
    Rijst.prototype.update = function () {
        this.y += this.speedY;
        if (this.y <= window.innerHeight) {
            console.log(this.y);
            console.log(this.rijst);
            this.rijst.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        }
    };
    return Rijst;
}());
//# sourceMappingURL=main.js.map