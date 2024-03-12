
var tl = gsap.timeline()


tl.from("nav>img,nav>ul,.right-side-nav>h1,.right-side-nav>button",{
   y:-100,
   delay:0.5,
  
   duration:1,
   stagger:0.3,
                      // Stagger is a delay timing property in each element coming one by one.
   opacity:0,
                  //Opaciaty is a blinking type
                  // when we give value is 0 it's intial position when come with slow 
})
tl.from("#main-area>h1",{
  x:100,
  delay:0.5,
  duration:1,
  stagger:0.3,
  opacity:0,
 color:"lightsalmon",

})

tl.from(".image-div>img",{
    x:100,
    delay:0.2,
    rotate:360,
    duration:1,
    stagger:0.5,
    opacity:0,
    yoyo:true,
   
    scale:0,
  
  })
  tl.from("footer>div>h1",{
    scale:0,
    opacity:0,
  })
  tl.to("footer>div>h1",{
   y:40,
   duration:1,
   delay:0.5,
   repeat:-1,
   yoyo:true,
   color:"yellow",

  })