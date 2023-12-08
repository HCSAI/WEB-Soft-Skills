var check = 0;
function info(){
    infomove();
    infoback();
    if(check == 0) check = 1; else
    if(check == 1) check = 0;
}
function infomove(){
    if(check == 0){
    document.getElementById("body").style.animation = "infomove 1s";
    document.documentElement.style.setProperty("--margin-top", "10vw");
    document.getElementById("group-info").style.height = "calc(662px - calc(682px + var(--margin-top) - 100vh))";
    document.getElementById("group-info").style.opacity = "0";
    setTimeout(function(){
        document.getElementById("group-info").style.animation = "fade 1s";
        document.getElementById("group-info").style.opacity = "100";
    }, 800);
    }
}
function infoback(){
    if(check == 1){
    document.getElementById("body").style.animation = "infoback 0.9s";
    document.documentElement.style.setProperty("--margin-top", "-700px");
    document.getElementById("group-info").style.height = "fit-content";
    }
}
function imgback(){
    document.getElementById("imgv1").style.display = "none";
    document.getElementById("imgv4").style.display = "none";
    document.getElementById("imgv5").style.display = "none";
    document.getElementById("block").style.display = "none";
    document.getElementById("bd").style.filter = "none";
    document.getElementById("paper1").style.display = "none";
    document.getElementById("paper4").style.display = "none";
    document.getElementById("paper5").style.display = "none";
    document.getElementById("head").style.transform = "translateY(0vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("main").style.overflowY = "scroll";
}
function img1(){
    document.getElementById("imgv1").style.animation = "fade 500ms";
    document.getElementById("imgv1").style.display = "block";
    document.getElementById("bd").style.filter = "blur(2px) saturate(0.5)";
    document.getElementById("block").style.display = "block";
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("main").style.overflowY = "hidden";
    document.getElementById("paper1").style.animation = "fade 500ms";
    document.getElementById("paper1").style.display = "block";
}
function img4(){
    document.getElementById("imgv4").style.animation = "fade 500ms";
    document.getElementById("imgv4").style.display = "block";
    document.getElementById("bd").style.filter = "blur(2px) saturate(0.5)";
    document.getElementById("block").style.display = "block";
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("main").style.overflowY = "hidden";
    document.getElementById("paper4").style.animation = "fade 500ms";
    document.getElementById("paper4").style.display = "block";
}
function img5(){
    document.getElementById("imgv5").style.animation = "fade 500ms";
    document.getElementById("imgv5").style.display = "block";
    document.getElementById("bd").style.filter = "blur(2px) saturate(0.5)";
    document.getElementById("block").style.display = "block";
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("main").style.overflowY = "hidden";
    document.getElementById("paper5").style.animation = "fade 500ms";
    document.getElementById("paper5").style.display = "block";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const elmnt = document.getElementById("main");
    var left = elmnt.offsetWidth;
    left = 1.4*left - 0.06*left;
    const block = document.getElementById("block");
    var dis = block.style.display;
  if (document.body.scrollTop > left || document.documentElement.scrollTop > left || dis == "block") {
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("head").style.transform = "translateY(-10vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("body").style.animation = "infoback 0.9s";
    document.documentElement.style.setProperty("--margin-top", "-700px");
    document.getElementById("group-info").style.height = "fit-content";
  } else {
    document.getElementById("head").style.transform = "translateY(0vw)";
    document.getElementById("head").style.transitionDuration = "500ms";
    document.getElementById("main").style.overflowY = "scroll";
  }
}