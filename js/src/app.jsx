//var React = require('react');
//var Firebase = require('firebase');
//
//var fbRef = new Firebase("https://<firebase-server>.firebaseio.com/");
//
//
//
//var Hello = React.createClass({
//	render: function () {
//		return <h1>Hello</h1>;
//	}
//});
//
//var element = React.createElement(Hello, {});
//React.render(element, document.querySelector('.container'));




var PIXI = require('pixi.js');

var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;

var zombieTexture = PIXI.Texture.fromImage('/images/zombie.png');
var zombie = new PIXI.Sprite(zombieTexture);

zombie.position.x = window.innerWidth / 2 - 150;
zombie.position.y = window.innerHeight / 2 - 150;

stage.addChild(zombie);

function draw() {
	renderer.render(stage);
	requestAnimationFrame(draw);
}

draw();