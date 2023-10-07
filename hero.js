
var hero = document.querySelector(".hero");
var isMoving = false;

hero.style.transform = `rotate(0deg)`;
hero.style.top=`40px`
hero.style.left=`280px`

//pre load images
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

function heromove() {
  var i = 1;
  if (!isMoving) {
    isMoving = true;

    function move() {
      if (i < 14) {
        hero.style.backgroundImage = `url(Assets/Hero/hero${i}.png)`;
        i++;
        setTimeout(move, 70);
      } else {
        isMoving = false;
      }
    }

    move();
  }
}

var r = 1, d = u = l = 0;
var dir=0,tp=40,lt=280
// Handle arrow key events
window.addEventListener("keydown", function(event) {
    //left
    if (event.keyCode == 37) {
    if(l==1)
    {hero.style.transform = `rotate(${dir-180}deg)`;dir-=180}
    else if(d==1)
    {hero.style.transform = `rotate(${dir-90}deg)`;dir-=90}
    else if(u==1)
    {hero.style.transform = `rotate(${dir+90}deg)`;dir+=90}
    r = 1;
    d = u = l = 0;
    heromove();
  }
  //up
  else if (event.keyCode == 38) {
    if(l==1)
    {hero.style.transform = `rotate(${dir-90}deg)`;dir-=90}
    else if(r==1)
    {hero.style.transform = `rotate(${dir+90}deg)`;dir+=90}
    else if(u==1)
    {hero.style.transform = `rotate(${dir+180}deg)`;dir+=180}
    d = 1;
    l = u = r = 0;
    heromove();
  }
  //right
  else if (event.keyCode == 39) {
    if(r==1)
    {hero.style.transform = `rotate(${dir-180}deg)`;dir-=180;}
    else if(u==1)
    {hero.style.transform = `rotate(${dir-90}deg)`;dir-=90}
    else if(d==1)
    {hero.style.transform = `rotate(${dir+90}deg)`;dir+=90}
    l = 1;
    d = u = r = 0;
    heromove();
  } 
  //down
  else if (event.keyCode == 40) {
    if(l==1)
    {hero.style.transform = `rotate(${dir+90}deg)`;dir+=90}
    else if(r==1)
    {hero.style.transform = `rotate(${dir-90}deg)`;dir-=90}
    else if(d==1)
    {hero.style.transform = `rotate(${dir+180}deg)`;dir+=180}
    u = 1;
    d = l = r = 0;
    heromove();
  }
  console.log(tp,lt)
  if(tp<40){tp=40}
  else if(tp>540){tp=540}
  else if(lt>605){lt=605}
  else if(lt<30){lt=30}

  if(tp>39&&tp<541&&lt>29&&lt<606){
    console.log(tp,lt)
    if (u) 
    {hero.style.top =`${tp+3}px`;tp+=3}
    else if (d) 
    {hero.style.top =`${tp-3}px`;tp-=3}
    else if (l) 
    {hero.style.left =`${lt+3}px`;lt+=3}
    else if (r) 
    {hero.style.left =`${lt-3}px`;lt-=3}
  }
});