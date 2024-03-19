var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'green';

ctx.fillRect(300,30,1000,1000);