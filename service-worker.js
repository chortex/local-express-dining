// Set a name for the current cache
var cacheName = 'v1'; 

// Default files to always cache
var cacheFiles = [
	'./',
	'./data.js',
	'./index.html',
	'./index.js',
	'./style.css',

	'./img/close.png',
	'./img/collapse.png',
	'./img/down.png',
	'./img/expand.png',
	'./img/fullscreen.png',
	'./img/info.png',
	'./img/left.png',
	'./img/link.png',
	'./img/Local-Logo-BLK.png',
	'./img/minus.png',
	'./img/pause.png',
	'./img/play.png',
	'./img/plus.png',
	'./img/right.png',
	'./img/up.png',
	'./img/windowed.png',

	'./tiles/0-checkout/1/b/0/0.jpg',
	'./tiles/0-checkout/1/d/0/0.jpg',
	'./tiles/0-checkout/1/f/0/0.jpg',
	'./tiles/0-checkout/1/l/0/0.jpg',
	'./tiles/0-checkout/1/r/0/0.jpg',
	'./tiles/0-checkout/1/u/0/0.jpg',

	'./tiles/0-checkout/2/b/0/0.jpg',
	'./tiles/0-checkout/2/b/0/1.jpg',
	'./tiles/0-checkout/2/b/1/0.jpg',
	'./tiles/0-checkout/2/b/1/1.jpg',
	'./tiles/0-checkout/2/d/0/0.jpg',
	'./tiles/0-checkout/2/d/0/1.jpg',
	'./tiles/0-checkout/2/d/1/0.jpg',
	'./tiles/0-checkout/2/d/1/1.jpg',
	'./tiles/0-checkout/2/f/0/0.jpg',
	'./tiles/0-checkout/2/f/0/1.jpg',
	'./tiles/0-checkout/2/f/1/0.jpg',
	'./tiles/0-checkout/2/f/1/1.jpg',
	'./tiles/0-checkout/2/l/0/0.jpg',
	'./tiles/0-checkout/2/l/0/1.jpg',
	'./tiles/0-checkout/2/l/1/0.jpg',
	'./tiles/0-checkout/2/l/1/1.jpg',
	'./tiles/0-checkout/2/r/0/0.jpg',
	'./tiles/0-checkout/2/r/0/1.jpg',
	'./tiles/0-checkout/2/r/1/0.jpg',
	'./tiles/0-checkout/2/r/1/1.jpg',
	'./tiles/0-checkout/2/u/0/0.jpg',
	'./tiles/0-checkout/2/u/0/1.jpg',
	'./tiles/0-checkout/2/u/1/0.jpg',
	'./tiles/0-checkout/2/u/1/1.jpg',

	'./tiles/0-checkout/3/b/0/0.jpg',
	'./tiles/0-checkout/3/b/0/1.jpg',
	'./tiles/0-checkout/3/b/0/2.jpg',
	'./tiles/0-checkout/3/b/0/3.jpg',
	'./tiles/0-checkout/3/b/1/0.jpg',
	'./tiles/0-checkout/3/b/1/1.jpg',
	'./tiles/0-checkout/3/b/1/2.jpg',
	'./tiles/0-checkout/3/b/1/3.jpg',
	'./tiles/0-checkout/3/b/2/0.jpg',
	'./tiles/0-checkout/3/b/2/1.jpg',
	'./tiles/0-checkout/3/b/2/2.jpg',
	'./tiles/0-checkout/3/b/2/3.jpg',
	'./tiles/0-checkout/3/b/3/0.jpg',
	'./tiles/0-checkout/3/b/3/1.jpg',
	'./tiles/0-checkout/3/b/3/2.jpg',
	'./tiles/0-checkout/3/b/3/3.jpg',

	'./tiles/0-checkout/3/d/0/0.jpg',
	'./tiles/0-checkout/3/d/0/1.jpg',
	'./tiles/0-checkout/3/d/0/2.jpg',
	'./tiles/0-checkout/3/d/0/3.jpg',
	'./tiles/0-checkout/3/d/1/0.jpg',
	'./tiles/0-checkout/3/d/1/1.jpg',
	'./tiles/0-checkout/3/d/1/2.jpg',
	'./tiles/0-checkout/3/d/1/3.jpg',
	'./tiles/0-checkout/3/d/2/0.jpg',
	'./tiles/0-checkout/3/d/2/1.jpg',
	'./tiles/0-checkout/3/d/2/2.jpg',
	'./tiles/0-checkout/3/d/2/3.jpg',
	'./tiles/0-checkout/3/d/3/0.jpg',
	'./tiles/0-checkout/3/d/3/1.jpg',
	'./tiles/0-checkout/3/d/3/2.jpg',
	'./tiles/0-checkout/3/d/3/3.jpg',

	'./tiles/0-checkout/3/f/0/0.jpg',
	'./tiles/0-checkout/3/f/0/1.jpg',
	'./tiles/0-checkout/3/f/0/2.jpg',
	'./tiles/0-checkout/3/f/0/3.jpg',
	'./tiles/0-checkout/3/f/1/0.jpg',
	'./tiles/0-checkout/3/f/1/1.jpg',
	'./tiles/0-checkout/3/f/1/2.jpg',
	'./tiles/0-checkout/3/f/1/3.jpg',
	'./tiles/0-checkout/3/f/2/0.jpg',
	'./tiles/0-checkout/3/f/2/1.jpg',
	'./tiles/0-checkout/3/f/2/2.jpg',
	'./tiles/0-checkout/3/f/2/3.jpg',
	'./tiles/0-checkout/3/f/3/0.jpg',
	'./tiles/0-checkout/3/f/3/1.jpg',
	'./tiles/0-checkout/3/f/3/2.jpg',
	'./tiles/0-checkout/3/f/3/3.jpg',

	'./tiles/0-checkout/3/l/0/0.jpg',
	'./tiles/0-checkout/3/l/0/1.jpg',
	'./tiles/0-checkout/3/l/0/2.jpg',
	'./tiles/0-checkout/3/l/0/3.jpg',
	'./tiles/0-checkout/3/l/1/0.jpg',
	'./tiles/0-checkout/3/l/1/1.jpg',
	'./tiles/0-checkout/3/l/1/2.jpg',
	'./tiles/0-checkout/3/l/1/3.jpg',
	'./tiles/0-checkout/3/l/2/0.jpg',
	'./tiles/0-checkout/3/l/2/1.jpg',
	'./tiles/0-checkout/3/l/2/2.jpg',
	'./tiles/0-checkout/3/l/2/3.jpg',
	'./tiles/0-checkout/3/l/3/0.jpg',
	'./tiles/0-checkout/3/l/3/1.jpg',
	'./tiles/0-checkout/3/l/3/2.jpg',
	'./tiles/0-checkout/3/l/3/3.jpg',

	'./tiles/0-checkout/3/r/0/0.jpg',
	'./tiles/0-checkout/3/r/0/1.jpg',
	'./tiles/0-checkout/3/r/0/2.jpg',
	'./tiles/0-checkout/3/r/0/3.jpg',
	'./tiles/0-checkout/3/r/1/0.jpg',
	'./tiles/0-checkout/3/r/1/1.jpg',
	'./tiles/0-checkout/3/r/1/2.jpg',
	'./tiles/0-checkout/3/r/1/3.jpg',
	'./tiles/0-checkout/3/r/2/0.jpg',
	'./tiles/0-checkout/3/r/2/1.jpg',
	'./tiles/0-checkout/3/r/2/2.jpg',
	'./tiles/0-checkout/3/r/2/3.jpg',
	'./tiles/0-checkout/3/r/3/0.jpg',
	'./tiles/0-checkout/3/r/3/1.jpg',
	'./tiles/0-checkout/3/r/3/2.jpg',
	'./tiles/0-checkout/3/r/3/3.jpg',

	'./tiles/0-checkout/3/u/0/0.jpg',
	'./tiles/0-checkout/3/u/0/1.jpg',
	'./tiles/0-checkout/3/u/0/2.jpg',
	'./tiles/0-checkout/3/u/0/3.jpg',
	'./tiles/0-checkout/3/u/1/0.jpg',
	'./tiles/0-checkout/3/u/1/1.jpg',
	'./tiles/0-checkout/3/u/1/2.jpg',
	'./tiles/0-checkout/3/u/1/3.jpg',
	'./tiles/0-checkout/3/u/2/0.jpg',
	'./tiles/0-checkout/3/u/2/1.jpg',
	'./tiles/0-checkout/3/u/2/2.jpg',
	'./tiles/0-checkout/3/u/2/3.jpg',
	'./tiles/0-checkout/3/u/3/0.jpg',
	'./tiles/0-checkout/3/u/3/1.jpg',
	'./tiles/0-checkout/3/u/3/2.jpg',
	'./tiles/0-checkout/3/u/3/3.jpg',

	'./tiles/0-checkout/preview.jpg',


	'./tiles/1-lounge/1/b/0/0.jpg',
	'./tiles/1-lounge/1/d/0/0.jpg',
	'./tiles/1-lounge/1/f/0/0.jpg',
	'./tiles/1-lounge/1/l/0/0.jpg',
	'./tiles/1-lounge/1/r/0/0.jpg',
	'./tiles/1-lounge/1/u/0/0.jpg',

	'./tiles/1-lounge/2/b/0/0.jpg',
	'./tiles/1-lounge/2/b/0/1.jpg',
	'./tiles/1-lounge/2/b/1/0.jpg',
	'./tiles/1-lounge/2/b/1/1.jpg',
	'./tiles/1-lounge/2/d/0/0.jpg',
	'./tiles/1-lounge/2/d/0/1.jpg',
	'./tiles/1-lounge/2/d/1/0.jpg',
	'./tiles/1-lounge/2/d/1/1.jpg',
	'./tiles/1-lounge/2/f/0/0.jpg',
	'./tiles/1-lounge/2/f/0/1.jpg',
	'./tiles/1-lounge/2/f/1/0.jpg',
	'./tiles/1-lounge/2/f/1/1.jpg',
	'./tiles/1-lounge/2/l/0/0.jpg',
	'./tiles/1-lounge/2/l/0/1.jpg',
	'./tiles/1-lounge/2/l/1/0.jpg',
	'./tiles/1-lounge/2/l/1/1.jpg',
	'./tiles/1-lounge/2/r/0/0.jpg',
	'./tiles/1-lounge/2/r/0/1.jpg',
	'./tiles/1-lounge/2/r/1/0.jpg',
	'./tiles/1-lounge/2/r/1/1.jpg',
	'./tiles/1-lounge/2/u/0/0.jpg',
	'./tiles/1-lounge/2/u/0/1.jpg',
	'./tiles/1-lounge/2/u/1/0.jpg',
	'./tiles/1-lounge/2/u/1/1.jpg',

	'./tiles/1-lounge/3/b/0/0.jpg',
	'./tiles/1-lounge/3/b/0/1.jpg',
	'./tiles/1-lounge/3/b/0/2.jpg',
	'./tiles/1-lounge/3/b/0/3.jpg',
	'./tiles/1-lounge/3/b/1/0.jpg',
	'./tiles/1-lounge/3/b/1/1.jpg',
	'./tiles/1-lounge/3/b/1/2.jpg',
	'./tiles/1-lounge/3/b/1/3.jpg',
	'./tiles/1-lounge/3/b/2/0.jpg',
	'./tiles/1-lounge/3/b/2/1.jpg',
	'./tiles/1-lounge/3/b/2/2.jpg',
	'./tiles/1-lounge/3/b/2/3.jpg',
	'./tiles/1-lounge/3/b/3/0.jpg',
	'./tiles/1-lounge/3/b/3/1.jpg',
	'./tiles/1-lounge/3/b/3/2.jpg',
	'./tiles/1-lounge/3/b/3/3.jpg',

	'./tiles/1-lounge/3/d/0/0.jpg',
	'./tiles/1-lounge/3/d/0/1.jpg',
	'./tiles/1-lounge/3/d/0/2.jpg',
	'./tiles/1-lounge/3/d/0/3.jpg',
	'./tiles/1-lounge/3/d/1/0.jpg',
	'./tiles/1-lounge/3/d/1/1.jpg',
	'./tiles/1-lounge/3/d/1/2.jpg',
	'./tiles/1-lounge/3/d/1/3.jpg',
	'./tiles/1-lounge/3/d/2/0.jpg',
	'./tiles/1-lounge/3/d/2/1.jpg',
	'./tiles/1-lounge/3/d/2/2.jpg',
	'./tiles/1-lounge/3/d/2/3.jpg',
	'./tiles/1-lounge/3/d/3/0.jpg',
	'./tiles/1-lounge/3/d/3/1.jpg',
	'./tiles/1-lounge/3/d/3/2.jpg',
	'./tiles/1-lounge/3/d/3/3.jpg',

	'./tiles/1-lounge/3/f/0/0.jpg',
	'./tiles/1-lounge/3/f/0/1.jpg',
	'./tiles/1-lounge/3/f/0/2.jpg',
	'./tiles/1-lounge/3/f/0/3.jpg',
	'./tiles/1-lounge/3/f/1/0.jpg',
	'./tiles/1-lounge/3/f/1/1.jpg',
	'./tiles/1-lounge/3/f/1/2.jpg',
	'./tiles/1-lounge/3/f/1/3.jpg',
	'./tiles/1-lounge/3/f/2/0.jpg',
	'./tiles/1-lounge/3/f/2/1.jpg',
	'./tiles/1-lounge/3/f/2/2.jpg',
	'./tiles/1-lounge/3/f/2/3.jpg',
	'./tiles/1-lounge/3/f/3/0.jpg',
	'./tiles/1-lounge/3/f/3/1.jpg',
	'./tiles/1-lounge/3/f/3/2.jpg',
	'./tiles/1-lounge/3/f/3/3.jpg',

	'./tiles/1-lounge/3/l/0/0.jpg',
	'./tiles/1-lounge/3/l/0/1.jpg',
	'./tiles/1-lounge/3/l/0/2.jpg',
	'./tiles/1-lounge/3/l/0/3.jpg',
	'./tiles/1-lounge/3/l/1/0.jpg',
	'./tiles/1-lounge/3/l/1/1.jpg',
	'./tiles/1-lounge/3/l/1/2.jpg',
	'./tiles/1-lounge/3/l/1/3.jpg',
	'./tiles/1-lounge/3/l/2/0.jpg',
	'./tiles/1-lounge/3/l/2/1.jpg',
	'./tiles/1-lounge/3/l/2/2.jpg',
	'./tiles/1-lounge/3/l/2/3.jpg',
	'./tiles/1-lounge/3/l/3/0.jpg',
	'./tiles/1-lounge/3/l/3/1.jpg',
	'./tiles/1-lounge/3/l/3/2.jpg',
	'./tiles/1-lounge/3/l/3/3.jpg',

	'./tiles/1-lounge/3/r/0/0.jpg',
	'./tiles/1-lounge/3/r/0/1.jpg',
	'./tiles/1-lounge/3/r/0/2.jpg',
	'./tiles/1-lounge/3/r/0/3.jpg',
	'./tiles/1-lounge/3/r/1/0.jpg',
	'./tiles/1-lounge/3/r/1/1.jpg',
	'./tiles/1-lounge/3/r/1/2.jpg',
	'./tiles/1-lounge/3/r/1/3.jpg',
	'./tiles/1-lounge/3/r/2/0.jpg',
	'./tiles/1-lounge/3/r/2/1.jpg',
	'./tiles/1-lounge/3/r/2/2.jpg',
	'./tiles/1-lounge/3/r/2/3.jpg',
	'./tiles/1-lounge/3/r/3/0.jpg',
	'./tiles/1-lounge/3/r/3/1.jpg',
	'./tiles/1-lounge/3/r/3/2.jpg',
	'./tiles/1-lounge/3/r/3/3.jpg',

	'./tiles/1-lounge/3/u/0/0.jpg',
	'./tiles/1-lounge/3/u/0/1.jpg',
	'./tiles/1-lounge/3/u/0/2.jpg',
	'./tiles/1-lounge/3/u/0/3.jpg',
	'./tiles/1-lounge/3/u/1/0.jpg',
	'./tiles/1-lounge/3/u/1/1.jpg',
	'./tiles/1-lounge/3/u/1/2.jpg',
	'./tiles/1-lounge/3/u/1/3.jpg',
	'./tiles/1-lounge/3/u/2/0.jpg',
	'./tiles/1-lounge/3/u/2/1.jpg',
	'./tiles/1-lounge/3/u/2/2.jpg',
	'./tiles/1-lounge/3/u/2/3.jpg',
	'./tiles/1-lounge/3/u/3/0.jpg',
	'./tiles/1-lounge/3/u/3/1.jpg',
	'./tiles/1-lounge/3/u/3/2.jpg',
	'./tiles/1-lounge/3/u/3/3.jpg',

	'./tiles/1-lounge/preview.jpg',


	'./tiles/2-market/1/b/0/0.jpg',
	'./tiles/2-market/1/d/0/0.jpg',
	'./tiles/2-market/1/f/0/0.jpg',
	'./tiles/2-market/1/l/0/0.jpg',
	'./tiles/2-market/1/r/0/0.jpg',
	'./tiles/2-market/1/u/0/0.jpg',

	'./tiles/2-market/2/b/0/0.jpg',
	'./tiles/2-market/2/b/0/1.jpg',
	'./tiles/2-market/2/b/1/0.jpg',
	'./tiles/2-market/2/b/1/1.jpg',
	'./tiles/2-market/2/d/0/0.jpg',
	'./tiles/2-market/2/d/0/1.jpg',
	'./tiles/2-market/2/d/1/0.jpg',
	'./tiles/2-market/2/d/1/1.jpg',
	'./tiles/2-market/2/f/0/0.jpg',
	'./tiles/2-market/2/f/0/1.jpg',
	'./tiles/2-market/2/f/1/0.jpg',
	'./tiles/2-market/2/f/1/1.jpg',
	'./tiles/2-market/2/l/0/0.jpg',
	'./tiles/2-market/2/l/0/1.jpg',
	'./tiles/2-market/2/l/1/0.jpg',
	'./tiles/2-market/2/l/1/1.jpg',
	'./tiles/2-market/2/r/0/0.jpg',
	'./tiles/2-market/2/r/0/1.jpg',
	'./tiles/2-market/2/r/1/0.jpg',
	'./tiles/2-market/2/r/1/1.jpg',
	'./tiles/2-market/2/u/0/0.jpg',
	'./tiles/2-market/2/u/0/1.jpg',
	'./tiles/2-market/2/u/1/0.jpg',
	'./tiles/2-market/2/u/1/1.jpg',

	'./tiles/2-market/3/b/0/0.jpg',
	'./tiles/2-market/3/b/0/1.jpg',
	'./tiles/2-market/3/b/0/2.jpg',
	'./tiles/2-market/3/b/0/3.jpg',
	'./tiles/2-market/3/b/1/0.jpg',
	'./tiles/2-market/3/b/1/1.jpg',
	'./tiles/2-market/3/b/1/2.jpg',
	'./tiles/2-market/3/b/1/3.jpg',
	'./tiles/2-market/3/b/2/0.jpg',
	'./tiles/2-market/3/b/2/1.jpg',
	'./tiles/2-market/3/b/2/2.jpg',
	'./tiles/2-market/3/b/2/3.jpg',
	'./tiles/2-market/3/b/3/0.jpg',
	'./tiles/2-market/3/b/3/1.jpg',
	'./tiles/2-market/3/b/3/2.jpg',
	'./tiles/2-market/3/b/3/3.jpg',

	'./tiles/2-market/3/d/0/0.jpg',
	'./tiles/2-market/3/d/0/1.jpg',
	'./tiles/2-market/3/d/0/2.jpg',
	'./tiles/2-market/3/d/0/3.jpg',
	'./tiles/2-market/3/d/1/0.jpg',
	'./tiles/2-market/3/d/1/1.jpg',
	'./tiles/2-market/3/d/1/2.jpg',
	'./tiles/2-market/3/d/1/3.jpg',
	'./tiles/2-market/3/d/2/0.jpg',
	'./tiles/2-market/3/d/2/1.jpg',
	'./tiles/2-market/3/d/2/2.jpg',
	'./tiles/2-market/3/d/2/3.jpg',
	'./tiles/2-market/3/d/3/0.jpg',
	'./tiles/2-market/3/d/3/1.jpg',
	'./tiles/2-market/3/d/3/2.jpg',
	'./tiles/2-market/3/d/3/3.jpg',

	'./tiles/2-market/3/f/0/0.jpg',
	'./tiles/2-market/3/f/0/1.jpg',
	'./tiles/2-market/3/f/0/2.jpg',
	'./tiles/2-market/3/f/0/3.jpg',
	'./tiles/2-market/3/f/1/0.jpg',
	'./tiles/2-market/3/f/1/1.jpg',
	'./tiles/2-market/3/f/1/2.jpg',
	'./tiles/2-market/3/f/1/3.jpg',
	'./tiles/2-market/3/f/2/0.jpg',
	'./tiles/2-market/3/f/2/1.jpg',
	'./tiles/2-market/3/f/2/2.jpg',
	'./tiles/2-market/3/f/2/3.jpg',
	'./tiles/2-market/3/f/3/0.jpg',
	'./tiles/2-market/3/f/3/1.jpg',
	'./tiles/2-market/3/f/3/2.jpg',
	'./tiles/2-market/3/f/3/3.jpg',

	'./tiles/2-market/3/l/0/0.jpg',
	'./tiles/2-market/3/l/0/1.jpg',
	'./tiles/2-market/3/l/0/2.jpg',
	'./tiles/2-market/3/l/0/3.jpg',
	'./tiles/2-market/3/l/1/0.jpg',
	'./tiles/2-market/3/l/1/1.jpg',
	'./tiles/2-market/3/l/1/2.jpg',
	'./tiles/2-market/3/l/1/3.jpg',
	'./tiles/2-market/3/l/2/0.jpg',
	'./tiles/2-market/3/l/2/1.jpg',
	'./tiles/2-market/3/l/2/2.jpg',
	'./tiles/2-market/3/l/2/3.jpg',
	'./tiles/2-market/3/l/3/0.jpg',
	'./tiles/2-market/3/l/3/1.jpg',
	'./tiles/2-market/3/l/3/2.jpg',
	'./tiles/2-market/3/l/3/3.jpg',

	'./tiles/2-market/3/r/0/0.jpg',
	'./tiles/2-market/3/r/0/1.jpg',
	'./tiles/2-market/3/r/0/2.jpg',
	'./tiles/2-market/3/r/0/3.jpg',
	'./tiles/2-market/3/r/1/0.jpg',
	'./tiles/2-market/3/r/1/1.jpg',
	'./tiles/2-market/3/r/1/2.jpg',
	'./tiles/2-market/3/r/1/3.jpg',
	'./tiles/2-market/3/r/2/0.jpg',
	'./tiles/2-market/3/r/2/1.jpg',
	'./tiles/2-market/3/r/2/2.jpg',
	'./tiles/2-market/3/r/2/3.jpg',
	'./tiles/2-market/3/r/3/0.jpg',
	'./tiles/2-market/3/r/3/1.jpg',
	'./tiles/2-market/3/r/3/2.jpg',
	'./tiles/2-market/3/r/3/3.jpg',

	'./tiles/2-market/3/u/0/0.jpg',
	'./tiles/2-market/3/u/0/1.jpg',
	'./tiles/2-market/3/u/0/2.jpg',
	'./tiles/2-market/3/u/0/3.jpg',
	'./tiles/2-market/3/u/1/0.jpg',
	'./tiles/2-market/3/u/1/1.jpg',
	'./tiles/2-market/3/u/1/2.jpg',
	'./tiles/2-market/3/u/1/3.jpg',
	'./tiles/2-market/3/u/2/0.jpg',
	'./tiles/2-market/3/u/2/1.jpg',
	'./tiles/2-market/3/u/2/2.jpg',
	'./tiles/2-market/3/u/2/3.jpg',
	'./tiles/2-market/3/u/3/0.jpg',
	'./tiles/2-market/3/u/3/1.jpg',
	'./tiles/2-market/3/u/3/2.jpg',
	'./tiles/2-market/3/u/3/3.jpg',

	'./tiles/2-market/preview.jpg',


	'./tiles/3-game-corner/1/b/0/0.jpg',
	'./tiles/3-game-corner/1/d/0/0.jpg',
	'./tiles/3-game-corner/1/f/0/0.jpg',
	'./tiles/3-game-corner/1/l/0/0.jpg',
	'./tiles/3-game-corner/1/r/0/0.jpg',
	'./tiles/3-game-corner/1/u/0/0.jpg',

	'./tiles/3-game-corner/2/b/0/0.jpg',
	'./tiles/3-game-corner/2/b/0/1.jpg',
	'./tiles/3-game-corner/2/b/1/0.jpg',
	'./tiles/3-game-corner/2/b/1/1.jpg',
	'./tiles/3-game-corner/2/d/0/0.jpg',
	'./tiles/3-game-corner/2/d/0/1.jpg',
	'./tiles/3-game-corner/2/d/1/0.jpg',
	'./tiles/3-game-corner/2/d/1/1.jpg',
	'./tiles/3-game-corner/2/f/0/0.jpg',
	'./tiles/3-game-corner/2/f/0/1.jpg',
	'./tiles/3-game-corner/2/f/1/0.jpg',
	'./tiles/3-game-corner/2/f/1/1.jpg',
	'./tiles/3-game-corner/2/l/0/0.jpg',
	'./tiles/3-game-corner/2/l/0/1.jpg',
	'./tiles/3-game-corner/2/l/1/0.jpg',
	'./tiles/3-game-corner/2/l/1/1.jpg',
	'./tiles/3-game-corner/2/r/0/0.jpg',
	'./tiles/3-game-corner/2/r/0/1.jpg',
	'./tiles/3-game-corner/2/r/1/0.jpg',
	'./tiles/3-game-corner/2/r/1/1.jpg',
	'./tiles/3-game-corner/2/u/0/0.jpg',
	'./tiles/3-game-corner/2/u/0/1.jpg',
	'./tiles/3-game-corner/2/u/1/0.jpg',
	'./tiles/3-game-corner/2/u/1/1.jpg',

	'./tiles/3-game-corner/3/b/0/0.jpg',
	'./tiles/3-game-corner/3/b/0/1.jpg',
	'./tiles/3-game-corner/3/b/0/2.jpg',
	'./tiles/3-game-corner/3/b/0/3.jpg',
	'./tiles/3-game-corner/3/b/1/0.jpg',
	'./tiles/3-game-corner/3/b/1/1.jpg',
	'./tiles/3-game-corner/3/b/1/2.jpg',
	'./tiles/3-game-corner/3/b/1/3.jpg',
	'./tiles/3-game-corner/3/b/2/0.jpg',
	'./tiles/3-game-corner/3/b/2/1.jpg',
	'./tiles/3-game-corner/3/b/2/2.jpg',
	'./tiles/3-game-corner/3/b/2/3.jpg',
	'./tiles/3-game-corner/3/b/3/0.jpg',
	'./tiles/3-game-corner/3/b/3/1.jpg',
	'./tiles/3-game-corner/3/b/3/2.jpg',
	'./tiles/3-game-corner/3/b/3/3.jpg',

	'./tiles/3-game-corner/3/d/0/0.jpg',
	'./tiles/3-game-corner/3/d/0/1.jpg',
	'./tiles/3-game-corner/3/d/0/2.jpg',
	'./tiles/3-game-corner/3/d/0/3.jpg',
	'./tiles/3-game-corner/3/d/1/0.jpg',
	'./tiles/3-game-corner/3/d/1/1.jpg',
	'./tiles/3-game-corner/3/d/1/2.jpg',
	'./tiles/3-game-corner/3/d/1/3.jpg',
	'./tiles/3-game-corner/3/d/2/0.jpg',
	'./tiles/3-game-corner/3/d/2/1.jpg',
	'./tiles/3-game-corner/3/d/2/2.jpg',
	'./tiles/3-game-corner/3/d/2/3.jpg',
	'./tiles/3-game-corner/3/d/3/0.jpg',
	'./tiles/3-game-corner/3/d/3/1.jpg',
	'./tiles/3-game-corner/3/d/3/2.jpg',
	'./tiles/3-game-corner/3/d/3/3.jpg',

	'./tiles/3-game-corner/3/f/0/0.jpg',
	'./tiles/3-game-corner/3/f/0/1.jpg',
	'./tiles/3-game-corner/3/f/0/2.jpg',
	'./tiles/3-game-corner/3/f/0/3.jpg',
	'./tiles/3-game-corner/3/f/1/0.jpg',
	'./tiles/3-game-corner/3/f/1/1.jpg',
	'./tiles/3-game-corner/3/f/1/2.jpg',
	'./tiles/3-game-corner/3/f/1/3.jpg',
	'./tiles/3-game-corner/3/f/2/0.jpg',
	'./tiles/3-game-corner/3/f/2/1.jpg',
	'./tiles/3-game-corner/3/f/2/2.jpg',
	'./tiles/3-game-corner/3/f/2/3.jpg',
	'./tiles/3-game-corner/3/f/3/0.jpg',
	'./tiles/3-game-corner/3/f/3/1.jpg',
	'./tiles/3-game-corner/3/f/3/2.jpg',
	'./tiles/3-game-corner/3/f/3/3.jpg',

	'./tiles/3-game-corner/3/l/0/0.jpg',
	'./tiles/3-game-corner/3/l/0/1.jpg',
	'./tiles/3-game-corner/3/l/0/2.jpg',
	'./tiles/3-game-corner/3/l/0/3.jpg',
	'./tiles/3-game-corner/3/l/1/0.jpg',
	'./tiles/3-game-corner/3/l/1/1.jpg',
	'./tiles/3-game-corner/3/l/1/2.jpg',
	'./tiles/3-game-corner/3/l/1/3.jpg',
	'./tiles/3-game-corner/3/l/2/0.jpg',
	'./tiles/3-game-corner/3/l/2/1.jpg',
	'./tiles/3-game-corner/3/l/2/2.jpg',
	'./tiles/3-game-corner/3/l/2/3.jpg',
	'./tiles/3-game-corner/3/l/3/0.jpg',
	'./tiles/3-game-corner/3/l/3/1.jpg',
	'./tiles/3-game-corner/3/l/3/2.jpg',
	'./tiles/3-game-corner/3/l/3/3.jpg',

	'./tiles/3-game-corner/3/r/0/0.jpg',
	'./tiles/3-game-corner/3/r/0/1.jpg',
	'./tiles/3-game-corner/3/r/0/2.jpg',
	'./tiles/3-game-corner/3/r/0/3.jpg',
	'./tiles/3-game-corner/3/r/1/0.jpg',
	'./tiles/3-game-corner/3/r/1/1.jpg',
	'./tiles/3-game-corner/3/r/1/2.jpg',
	'./tiles/3-game-corner/3/r/1/3.jpg',
	'./tiles/3-game-corner/3/r/2/0.jpg',
	'./tiles/3-game-corner/3/r/2/1.jpg',
	'./tiles/3-game-corner/3/r/2/2.jpg',
	'./tiles/3-game-corner/3/r/2/3.jpg',
	'./tiles/3-game-corner/3/r/3/0.jpg',
	'./tiles/3-game-corner/3/r/3/1.jpg',
	'./tiles/3-game-corner/3/r/3/2.jpg',
	'./tiles/3-game-corner/3/r/3/3.jpg',

	'./tiles/3-game-corner/3/u/0/0.jpg',
	'./tiles/3-game-corner/3/u/0/1.jpg',
	'./tiles/3-game-corner/3/u/0/2.jpg',
	'./tiles/3-game-corner/3/u/0/3.jpg',
	'./tiles/3-game-corner/3/u/1/0.jpg',
	'./tiles/3-game-corner/3/u/1/1.jpg',
	'./tiles/3-game-corner/3/u/1/2.jpg',
	'./tiles/3-game-corner/3/u/1/3.jpg',
	'./tiles/3-game-corner/3/u/2/0.jpg',
	'./tiles/3-game-corner/3/u/2/1.jpg',
	'./tiles/3-game-corner/3/u/2/2.jpg',
	'./tiles/3-game-corner/3/u/2/3.jpg',
	'./tiles/3-game-corner/3/u/3/0.jpg',
	'./tiles/3-game-corner/3/u/3/1.jpg',
	'./tiles/3-game-corner/3/u/3/2.jpg',
	'./tiles/3-game-corner/3/u/3/3.jpg',

	'./tiles/3-game-corner/preview.jpg',





	'./vendor/bowser.min.js',
	'./vendor/marzipano.js',
	'./vendor/reset.min.css',
	'./vendor/screenfull.min.js'


]


self.addEventListener('install', function(e) {
		console.log('[ServiceWorker] Installed');

		// e.waitUntil Delays the event until the Promise is resolved
		e.waitUntil(

			// Open the cache
			caches.open(cacheName).then(function(cache) {

				// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
			})
	); // end e.waitUntil
});


self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {

				// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});


self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	// e.respondWidth Responds to the fetch event
	e.respondWith(

		// Check in cache for the request being made
		caches.match(e.request)


			.then(function(response) {

				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
					// Return the cached version
					return response;
				}

				// If the request is NOT in the cache, fetch and cache

				var requestClone = e.request.clone();
				return fetch(requestClone)
					.then(function(response) {

						if ( !response ) {
							console.log("[ServiceWorker] No response from fetch ")
							return response;
						}

						var responseClone = response.clone();

						//  Open the cache
						caches.open(cacheName).then(function(cache) {

							// Put the fetched response in the cache
							cache.put(e.request, responseClone);
							console.log('[ServiceWorker] New Data Cached', e.request.url);

							// Return the response
							return response;
			
				        }); // end caches.open

					})
					.catch(function(err) {
						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
					});


			}) // end caches.match(e.request)
	); // end e.respondWith
});