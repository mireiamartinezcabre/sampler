document.getElementById("sliderVol").oninput = canviaVolum;
function canviaVolum() {
        document.getElementById("drum1").volume = document.getElementById("sliderVol").value;
    document.getElementById("bass1").volume = document.getElementById("sliderVol").value;
    document.getElementById("guitar1").volume = document.getElementById("sliderVol").value;
    document.getElementById("bell1").volume = document.getElementById("sliderVol").value;     
        document.getElementById("drum2").volume = document.getElementById("sliderVol").value;
    document.getElementById("bass2").volume = document.getElementById("sliderVol").value;
    document.getElementById("guitar2").volume = document.getElementById("sliderVol").value;
    document.getElementById("bell2").volume = document.getElementById("sliderVol").value;
        document.getElementById("drum3").volume = document.getElementById("sliderVol").value;
    document.getElementById("bass3").volume = document.getElementById("sliderVol").value;
    document.getElementById("guitar3").volume = document.getElementById("sliderVol").value;
    document.getElementById("bell3").volume = document.getElementById("sliderVol").value;
        document.getElementById("drum4").volume = document.getElementById("sliderVol").value;
    document.getElementById("bass4").volume = document.getElementById("sliderVol").value;
    document.getElementById("guitar4").volume = document.getElementById("sliderVol").value;
    document.getElementById("bell4").volume = document.getElementById("sliderVol").value; 
}
function miraPausaVideo() {
    if (document.getElementById("drum1").paused && document.getElementById("drum2").paused && document.getElementById("drum3").paused && document.getElementById("bass1").paused && document.getElementById("bass2").paused && document.getElementById("bass3").paused && document.getElementById("guitar1").paused && document.getElementById("guitar2").paused && document.getElementById("guitar3").paused && document.getElementById("bell1").paused && document.getElementById("bell2").paused && document.getElementById("bell3").paused) {
        document.getElementById("video").pause();        
    }
}

document.getElementById("b1boto").onclick = playPause1;
function playPause1() {
    if (document.getElementById("drum1").paused) {
        document.getElementById("drum1").currentTime = "0";
        document.getElementById("drum1").play();
        document.getElementById("b1boto").style.backgroundColor = "yellow";
        document.getElementById("b1boto").style.color = "black";
        document.getElementById("b1controls").style.opacity = 1;
        document.getElementById("imgLoop1").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("drum1").pause();
        document.getElementById("b1boto").style.backgroundColor = "transparent";
        document.getElementById("b1controls").style.opacity = 0;
        document.getElementById("b1boto").style.color = "yellow";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol1").value = document.getElementById("drum1").volume;
document.getElementById("sliderVol1").oninput = canviaVolum1;
function canviaVolum1() {
   document.getElementById("drum1").volume =  document.getElementById("sliderVol1").value;
}
document.getElementById("imgLoop1").onclick = loop1;
function loop1() {
    if (document.getElementById("drum1").loop) {
        document.getElementById("imgLoop1").src = "../media/noLoop.svg";
        document.getElementById("drum1").loop = false;
    } else {
        document.getElementById("imgLoop1").src = "../media/loop.svg";
        document.getElementById("drum1").loop = true;
    }
}
document.getElementById("drum1").onended = end1;
function end1() {
    document.getElementById("b1boto").style.backgroundColor = "transparent";
    document.getElementById("b1boto").style.color = "yellow";
    document.getElementById("b1controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe1").oninput = canviaVelocitat1;
function canviaVelocitat1() {
   document.getElementById("drum1").playbackRate =  document.getElementById("sliderVe1").value;
}


document.getElementById("b2boto").onclick = playPause2;
function playPause2() {
    if (document.getElementById("bass1").paused) {
        document.getElementById("bass1").currentTime = "0";
        document.getElementById("bass1").play();
        document.getElementById("b2boto").style.backgroundColor = "red";
        document.getElementById("b2boto").style.color = "black";
        document.getElementById("b2controls").style.opacity = 1;
        document.getElementById("imgLoop2").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bass1").pause();
        document.getElementById("b2boto").style.backgroundColor = "transparent";
        document.getElementById("b2controls").style.opacity = 0;
        document.getElementById("b2boto").style.color = "red";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol2").value = document.getElementById("bass1").volume;
document.getElementById("sliderVol2").oninput = canviaVolum2;
function canviaVolum2() {
   document.getElementById("bass1").volume =  document.getElementById("sliderVol2").value;
}
document.getElementById("imgLoop2").onclick = loop2;
function loop2() {
    if (document.getElementById("bass1").loop) {
        document.getElementById("imgLoop2").src = "../media/noLoop.svg";
        document.getElementById("bass1").loop = false;
    } else {
        document.getElementById("imgLoop2").src = "../media/loop.svg";
        document.getElementById("bass1").loop = true;
    }
}
document.getElementById("bass1").onended = end2;
function end2() {
    document.getElementById("b2boto").style.backgroundColor = "transparent";
    document.getElementById("b2boto").style.color = "red";
    document.getElementById("b2controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe2").oninput = canviaVelocitat2;
function canviaVelocitat2() {
   document.getElementById("bass1").playbackRate =  document.getElementById("sliderVe2").value;
}


document.getElementById("b3boto").onclick = playPause3;
function playPause3() {
    if (document.getElementById("guitar1").paused) {
        document.getElementById("guitar1").currentTime = "0";
        document.getElementById("guitar1").play();
        document.getElementById("b3boto").style.backgroundColor = "green";
        document.getElementById("b3boto").style.color = "black";
        document.getElementById("b3controls").style.opacity = 1;
        document.getElementById("imgLoop3").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("guitar1").pause();
        document.getElementById("b3boto").style.backgroundColor = "transparent";
        document.getElementById("b3controls").style.opacity = 0;
        document.getElementById("b3boto").style.color = "green";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol3").value = document.getElementById("guitar1").volume;
document.getElementById("sliderVol3").oninput = canviaVolum3;
function canviaVolum3() {
   document.getElementById("guitar1").volume =  document.getElementById("sliderVol3").value;
}
document.getElementById("imgLoop3").onclick = loop3;
function loop3() {
    if (document.getElementById("guitar1").loop) {
        document.getElementById("imgLoop3").src = "../media/noLoop.svg";
        document.getElementById("guitar1").loop = false;
    } else {
        document.getElementById("imgLoop3").src = "../media/loop.svg";
        document.getElementById("guitar1").loop = true;
    }
}
document.getElementById("guitar1").onended = end3;
function end3() {
    document.getElementById("b3boto").style.backgroundColor = "transparent";
    document.getElementById("b3boto").style.color = "green";
    document.getElementById("b3controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe3").oninput = canviaVelocitat3;
function canviaVelocitat3() {
   document.getElementById("guitar1").playbackRate =  document.getElementById("sliderVe3").value;
}


document.getElementById("b4boto").onclick = playPause4;
function playPause4() {
    if (document.getElementById("bell1").paused) {
        document.getElementById("bell1").currentTime = "0";
        document.getElementById("bell1").play();
        document.getElementById("b4boto").style.backgroundColor = "blue";
        document.getElementById("b4boto").style.color = "black";
        document.getElementById("b4controls").style.opacity = 1;
        document.getElementById("imgLoop4").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bell1").pause();
        document.getElementById("b4boto").style.backgroundColor = "transparent";
        document.getElementById("b4controls").style.opacity = 0;
        document.getElementById("b4boto").style.color = "blue";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol4").value = document.getElementById("bell1").volume;
document.getElementById("sliderVol4").oninput = canviaVolum4;
function canviaVolum4() {
   document.getElementById("bell1").volume =  document.getElementById("sliderVol4").value;
}
document.getElementById("imgLoop4").onclick = loop4;
function loop4() {
    if (document.getElementById("bell1").loop) {
        document.getElementById("imgLoop4").src = "../media/noLoop.svg";
        document.getElementById("bell1").loop = false;
    } else {
        document.getElementById("imgLoop4").src = "../media/loop.svg";
        document.getElementById("bell1").loop = true;
    }
}
document.getElementById("bell1").onended = end4;
function end4() {
    document.getElementById("b4boto").style.backgroundColor = "transparent";
    document.getElementById("b4boto").style.color = "blue";
    document.getElementById("b4controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe4").oninput = canviaVelocitat4;
function canviaVelocitat4() {
   document.getElementById("bell1").playbackRate =  document.getElementById("sliderVe4").value;
}


document.getElementById("b5boto").onclick = playPause5;
function playPause5() {
    if (document.getElementById("drum2").paused) {
        document.getElementById("drum2").currentTime = "0";
        document.getElementById("drum2").play();
        document.getElementById("b5boto").style.backgroundColor = "yellow";
        document.getElementById("b5boto").style.color = "black";
        document.getElementById("b5controls").style.opacity = 1;
        document.getElementById("imgLoop5").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("drum2").pause();
        document.getElementById("b5boto").style.backgroundColor = "transparent";
        document.getElementById("b5controls").style.opacity = 0; 
        document.getElementById("b5boto").style.color = "yellow";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol5").value = document.getElementById("drum2").volume;
document.getElementById("sliderVol5").oninput = canviaVolum5;
function canviaVolum5() {
   document.getElementById("drum2").volume =  document.getElementById("sliderVol5").value;
}
document.getElementById("imgLoop5").onclick = loop5;
function loop5() {
    if (document.getElementById("drum2").loop) {
        document.getElementById("imgLoop5").src = "../media/noLoop.svg";
        document.getElementById("drum2").loop = false;
    } else {
        document.getElementById("imgLoop5").src = "../media/loop.svg";
        document.getElementById("drum2").loop = true;
    }
}
document.getElementById("drum2").onended = end5;
function end5() {
    document.getElementById("b5boto").style.backgroundColor = "transparent";
    document.getElementById("b5boto").style.color = "yellow";
    document.getElementById("b5controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe5").oninput = canviaVelocitat5;
function canviaVelocitat5() {
   document.getElementById("drum2").playbackRate =  document.getElementById("sliderVe5").value;
}


document.getElementById("b6boto").onclick = playPause6;
function playPause6() {
    if (document.getElementById("bass2").paused) {
        document.getElementById("bass2").currentTime = "0";
        document.getElementById("bass2").play();
        document.getElementById("b6boto").style.backgroundColor = "red";
        document.getElementById("b6boto").style.color = "black";
        document.getElementById("b6controls").style.opacity = 1;
        document.getElementById("imgLoop6").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bass2").pause();
        document.getElementById("b6boto").style.backgroundColor = "transparent";
        document.getElementById("b6controls").style.opacity = 0;
        document.getElementById("b6boto").style.color = "red";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol6").value = document.getElementById("bass2").volume;
document.getElementById("sliderVol6").oninput = canviaVolum6;
function canviaVolum6() {
   document.getElementById("bass2").volume =  document.getElementById("sliderVol6").value;
}
document.getElementById("imgLoop6").onclick = loop6;
function loop6() {
    if (document.getElementById("bass2").loop) {
        document.getElementById("imgLoop6").src = "../media/noLoop.svg";
        document.getElementById("bass2").loop = false;
    } else {
        document.getElementById("imgLoop6").src = "../media/loop.svg";
        document.getElementById("bass2").loop = true;
    }
}
document.getElementById("bass2").onended = end6;
function end6() {
    document.getElementById("b6boto").style.backgroundColor = "transparent";
    document.getElementById("b6boto").style.color = "red";
    document.getElementById("b6controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe6").oninput = canviaVelocitat6;
function canviaVelocitat6() {
   document.getElementById("bass2").playbackRate =  document.getElementById("sliderVe6").value;
}


document.getElementById("b7boto").onclick = playPause7;
function playPause7() {
    if (document.getElementById("guitar2").paused) {
        document.getElementById("guitar2").currentTime = "0";
        document.getElementById("guitar2").play();
        document.getElementById("b7boto").style.backgroundColor = "green";
        document.getElementById("b7boto").style.color = "black";
        document.getElementById("b7controls").style.opacity = 1;
        document.getElementById("imgLoop7").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("guitar2").pause();
        document.getElementById("b7boto").style.backgroundColor = "transparent";
        document.getElementById("b7controls").style.opacity = 0;
        document.getElementById("b7boto").style.color = "green";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol7").value = document.getElementById("guitar2").volume;
document.getElementById("sliderVol7").oninput = canviaVolum7;
function canviaVolum7() {
   document.getElementById("guitar2").volume =  document.getElementById("sliderVol7").value;
}
document.getElementById("imgLoop7").onclick = loop7;
function loop7() {
    if (document.getElementById("guitar2").loop) {
        document.getElementById("imgLoop7").src = "../media/noLoop.svg";
        document.getElementById("guitar2").loop = false;
    } else {
        document.getElementById("imgLoop7").src = "../media/loop.svg";
        document.getElementById("guitar2").loop = true;
    }
}
document.getElementById("guitar2").onended = end7;
function end7() {
    document.getElementById("b7boto").style.backgroundColor = "transparent";
    document.getElementById("b7boto").style.color = "green";
    document.getElementById("b7controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe7").oninput = canviaVelocitat7;
function canviaVelocitat7() {
   document.getElementById("guitar2").playbackRate =  document.getElementById("sliderVe7").value;
}


document.getElementById("b8boto").onclick = playPause8;
function playPause8() {
    if (document.getElementById("bell2").paused) {
        document.getElementById("bell2").currentTime = "0";
        document.getElementById("bell2").play();
        document.getElementById("b8boto").style.backgroundColor = "blue";
        document.getElementById("b8boto").style.color = "black";
        document.getElementById("b8controls").style.opacity = 1;
        document.getElementById("imgLoop8").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bell2").pause();
        document.getElementById("b8boto").style.backgroundColor = "transparent";
        document.getElementById("b8controls").style.opacity = 0;
        document.getElementById("b8boto").style.color = "blue";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol8").value = document.getElementById("bell2").volume;
document.getElementById("sliderVol8").oninput = canviaVolum8;
function canviaVolum8() {
   document.getElementById("bell2").volume =  document.getElementById("sliderVol8").value;
}
document.getElementById("imgLoop8").onclick = loop8;
function loop8() {
    if (document.getElementById("bell2").loop) {
        document.getElementById("imgLoop8").src = "../media/noLoop.svg";
        document.getElementById("bell2").loop = false;
    } else {
        document.getElementById("imgLoop8").src = "../media/loop.svg";
        document.getElementById("bell2").loop = true;
    }
}
document.getElementById("bell2").onended = end8;
function end8() {
    document.getElementById("b8boto").style.backgroundColor = "transparent";
    document.getElementById("b8boto").style.color = "blue";
    document.getElementById("b8controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe8").oninput = canviaVelocitat8;
function canviaVelocitat8() {
   document.getElementById("bell2").playbackRate =  document.getElementById("sliderVe8").value;
}


document.getElementById("b9boto").onclick = playPause9;
function playPause9() {
    if (document.getElementById("drum3").paused) {
        document.getElementById("drum3").currentTime = "0";
        document.getElementById("drum3").play();
        document.getElementById("b9boto").style.backgroundColor = "yellow";
        document.getElementById("b9boto").style.color = "black";
        document.getElementById("b9controls").style.opacity = 1;
        document.getElementById("imgLoop9").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("drum3").pause();
        document.getElementById("b9boto").style.backgroundColor = "transparent";
        document.getElementById("b9controls").style.opacity = 0;
        document.getElementById("b9boto").style.color = "yellow";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol9").value = document.getElementById("drum3").volume;
document.getElementById("sliderVol9").oninput = canviaVolum9;
function canviaVolum9() {
   document.getElementById("drum3").volume =  document.getElementById("sliderVol9").value;
}
document.getElementById("imgLoop9").onclick = loop9;
function loop9() {
    if (document.getElementById("drum3").loop) {
        document.getElementById("imgLoop9").src = "../media/noLoop.svg";
        document.getElementById("drum3").loop = false;
    } else {
        document.getElementById("imgLoop9").src = "../media/loop.svg";
        document.getElementById("drum3").loop = true;
    }
}
document.getElementById("drum3").onended = end9;
function end9() {
    document.getElementById("b9boto").style.backgroundColor = "transparent";
    document.getElementById("b9boto").style.color = "yellow";
    document.getElementById("b9controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe9").oninput = canviaVelocitat9;
function canviaVelocitat9() {
   document.getElementById("drum3").playbackRate =  document.getElementById("sliderVe9").value;
}


document.getElementById("b10boto").onclick = playPause10;
function playPause10() {
    if (document.getElementById("bass3").paused) {
        document.getElementById("bass3").currentTime = "0";
        document.getElementById("bass3").play();
        document.getElementById("b10boto").style.backgroundColor = "red";
        document.getElementById("b10boto").style.color = "black";
        document.getElementById("b10controls").style.opacity = 1;
        document.getElementById("imgLoop10").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bass3").pause();
        document.getElementById("b10boto").style.backgroundColor = "transparent";
        document.getElementById("b10controls").style.opacity = 0;
        document.getElementById("b10boto").style.color = "red";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol10").value = document.getElementById("bass3").volume;
document.getElementById("sliderVol10").oninput = canviaVolum10;
function canviaVolum10() {
   document.getElementById("bass3").volume =  document.getElementById("sliderVol10").value;
}
document.getElementById("imgLoop10").onclick = loop10;
function loop10() {
    if (document.getElementById("bass3").loop) {
        document.getElementById("imgLoop10").src = "../media/noLoop.svg";
        document.getElementById("bass3").loop = false;
    } else {
        document.getElementById("imgLoop10").src = "../media/loop.svg";
        document.getElementById("bass3").loop = true;
    }
}
document.getElementById("bass3").onended = end10;
function end10() {
    document.getElementById("b10boto").style.backgroundColor = "transparent";
    document.getElementById("b10boto").style.color = "red";
    document.getElementById("b10controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe10").oninput = canviaVelocitat10;
function canviaVelocitat10() {
   document.getElementById("bass3").playbackRate =  document.getElementById("sliderVe10").value;
}


document.getElementById("b11boto").onclick = playPause11;
function playPause11() {
    if (document.getElementById("guitar3").paused) {
        document.getElementById("guitar3").currentTime = "0";
        document.getElementById("guitar3").play();
        document.getElementById("b11boto").style.backgroundColor = "green";
        document.getElementById("b11boto").style.color = "black";
        document.getElementById("b11controls").style.opacity = 1;
        document.getElementById("imgLoop11").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("guitar3").pause();
        document.getElementById("b11boto").style.backgroundColor = "transparent";
        document.getElementById("b11controls").style.opacity = 0;
        document.getElementById("b11boto").style.color = "green";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol11").value = document.getElementById("guitar3").volume;
document.getElementById("sliderVol11").oninput = canviaVolum11;
function canviaVolum11() {
   document.getElementById("guitar3").volume =  document.getElementById("sliderVol11").value;
}
document.getElementById("imgLoop11").onclick = loop11;
function loop11() {
    if (document.getElementById("guitar3").loop) {
        document.getElementById("imgLoop11").src = "../media/noLoop.svg";
        document.getElementById("guitar3").loop = false;
    } else {
        document.getElementById("imgLoop11").src = "../media/loop.svg";
        document.getElementById("guitar3").loop = true;
    }
}
document.getElementById("guitar3").onended = end11;
function end11() {
    document.getElementById("b11boto").style.backgroundColor = "transparent";
    document.getElementById("b11boto").style.color = "green";
    document.getElementById("b11controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe11").oninput = canviaVelocitat11;
function canviaVelocitat11() {
   document.getElementById("guitar3").playbackRate =  document.getElementById("sliderVe11").value;
}

    
document.getElementById("b12boto").onclick = playPause12;
function playPause12() {
    if (document.getElementById("bell3").paused) {
        document.getElementById("bell3").currentTime = "0";
        document.getElementById("bell3").play();
        document.getElementById("b12boto").style.backgroundColor = "blue";
        document.getElementById("b12boto").style.color = "black";
        document.getElementById("b12controls").style.opacity = 1;
        document.getElementById("imgLoop12").src = "../media/noLoop.svg";
        document.getElementById("video").play();
    } else {
        document.getElementById("bell3").pause();
        document.getElementById("b12boto").style.backgroundColor = "transparent";
        document.getElementById("b12controls").style.opacity = 0;
        document.getElementById("b12boto").style.color = "blue";
        miraPausaVideo();
    }
}
document.getElementById("sliderVol12").value = document.getElementById("bell3").volume;
document.getElementById("sliderVol12").oninput = canviaVolum12;
function canviaVolum12() {
   document.getElementById("bell3").volume =  document.getElementById("sliderVol12").value;
}
document.getElementById("imgLoop12").onclick = loop12;
function loop12() {
    if (document.getElementById("bell3").loop) {
        document.getElementById("imgLoop12").src = "../media/noLoop.svg";
        document.getElementById("bell3").loop = false;
    } else {
        document.getElementById("imgLoop12").src = "../media/loop.svg";
        document.getElementById("bell3").loop = true;
    }
}
document.getElementById("bell3").onended = end12;
function end12() {
    document.getElementById("b12boto").style.backgroundColor = "transparent";
    document.getElementById("b12boto").style.color = "blue";
    document.getElementById("b12controls").style.opacity = 0;
    miraPausaVideo();
}
document.getElementById("sliderVe12").oninput = canviaVelocitat12;
function canviaVelocitat12() {
   document.getElementById("bell3").playbackRate =  document.getElementById("sliderVe12").value;
}