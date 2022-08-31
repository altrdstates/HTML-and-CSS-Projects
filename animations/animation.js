const bouncyCircle = new mojs.Shape({
parent:       '.container',
shape:        'circle',
fill:         {'#F64040': '#FC46AD'},
radius:       {20: 80},
duration:     2000,
isYoyo:       true,
isShowStart:  true,
easing:       'elastic.inout',
repeat:       1,
});

document.querySelector('.play').addEventListener("click", function() {
    bouncyCircle.play()
});




