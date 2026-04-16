setTimeout(() => {
  document.getElementById("loadingscreen").style.opacity = 0;
  document.getElementById("loadingscreen").style.zIndex = 0;
  document.getElementById("main-loading").style.opacity = 1;
  document.getElementById("main-loading").style.zIndex = 5;
}, 2000);

window.addEventListener("DOMContentLoaded",function(){
  let audio = document.querySelectorAll(".AudioMusic")
  let btn = document.querySelectorAll(".btnPlay")
  let DescriptionMusic = document.querySelectorAll(".DescriptionMusic")
  let audiosNiki = document.querySelectorAll(".AudioNiki")
  let btnNiki = document.querySelectorAll(".BtnNiki")

  let songsLany = [ 
      {music1: false,title1:"DNA",src: "List Song/DNA.wav"},  
      {music2: false,title2:"XXL",src: "List Song/XXLANy.wav"}, 
      {music3: false,title3:"Anything4You",src: "List Song/anything4u.wav"},  
      {music4: false,title4:"you!",src: "List Song/You!.wav"}  
    ]
  let songsNiki = [
    {music1: false,title1:"Autumn",src: "List Song/Niki/niki-autumn-official-lyric-video-goojmt.wav"},  
    {music2: false,title2:"Backburner",src: "List Song/Niki/niki-backburner-official-lyric-video-zeuwnv.wav"}, 
    {music3: false,title3:"lalalostYou(Acoustic)",src: "List Song/Niki/niki-la-la-lost-you-acoustic-lyrics-r-4-gza-2.wav"},  
    {music4: false,title4:"lowkey",src: "List Song/Niki/niki-lowkey-lyrics-3-bnsze.wav"}  
  ]

    let isPlaying = false
    let isPlayingByLany = false
    let isPlayingByNiki = false

 let MenuBar = document.querySelector(".MenuBar")
  for (let i = 0; i < audio.length; i++) {
    audio[i].addEventListener("play",function(){
      document.getElementById("bgMenuBar").style.boxShadow = "0rem 0rem 0.5rem 0.4rem #0d1a36"
      document.getElementById("bgMenuBar").style.backdropFilter = "blur(3px)"
    isPlayingByLany = true
    })
}
   
  
  for (let i = 0; i < audiosNiki.length; i++) {
    audiosNiki[i].addEventListener("play",function(){
      document.getElementById("bgMenuBar").style.boxShadow = "0rem 0rem 0.5rem 0.4rem #0d1a36"
      document.getElementById("bgMenuBar").style.backdropFilter = "blur(3px)"
      isPlayingByNiki = true
    })  
  }
  
const allAudios = document.querySelectorAll("audio");

allAudios.forEach(audio => {
  audio.addEventListener("play", () => {

    allAudios.forEach(other => {
      if (other !== audio) {
        other.pause();
        other.controls = false;
      }
    });

    audio.controls = true;
  });
});

let titlesLany = document.createElement("span")
titlesLany.classList.add("MenuTitles")
let titlesNiki = document.createElement("span")
titlesNiki.classList.add("MenuTitles")
//Button Lany Playlist
btn[0].addEventListener("click",function(){
    try{
    if(isPlayingByNiki){
      titlesNiki.remove()
      isPlayingByNiki = false
    }
    songsLany[0].music1 = true
  if(isPlaying == false || songsLany[0].music2 === true || songsLany[0].music3 === true || songsLany[0].music4 == true){
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause()
    }
    console.log(songsLany[0].title1)
  console.log(titlesLany)
    titlesLany.textContent = songsLany[0].title1
    MenuBar.append(titlesLany)
    MenuBar.append(audio[0])
    audio[0].controls = true
    isPlaying = true
    audio[0].src = songsLany[0].src
      audio[0].load()
    console.log(isPlaying)
      audio[0].play()
  }else if(isPlaying){
  audio[0].pause()
      isPlaying = false
    console.log(isPlaying)
      songsLany[0].music1 = false
  }else if(isPlaying && isPlayingByNiki){
    isPlaying = false
    audio[0].pause()
    songsLany[0].music1 = false 
  }
    console.log(isPlaying)
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btn[1].addEventListener("click",function(){
  try{
    songsLany[0].music2 = true
  if(isPlaying == false || songsLany[0].music1 === true || songsLany[0].music3 === true || songsLany[0].music4 === true){
    isPlaying = true
    for (let i = 0; i < audio.length; i++) {
    if(audio[1]){
      continue
    }else{
      audio[i].pause()
    }
  }
  console.log(songsLany[1].title2)
  console.log(titlesLany)
  titlesLany.textContent = songsLany[1].title2
  if(isPlayingByNiki){
      titlesNiki.remove()
      isPlayingByNiki = false
  }
    MenuBar.append(titlesLany)
    MenuBar.append(audio[1])
    audio[1].controls = true
    isPlaying = true
    audio[1].src = songsLany[1].src
      audio[1].load()
    console.log(isPlaying)
      audio[1].play()
  }else if(isPlaying == true){
  audio[1].pause()
      isPlaying = false
    console.log(isPlaying)
      music2 = false
  }else if(isPlaying && isPlayingByNiki){
    isPlaying = false
    audio[1].pause()
    songsLany[0].music2 = false 
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btn[2].addEventListener("click",function(){
  try{
    songsLany[0].music3 = true
  if(isPlaying == false || songsLany[0].music1 === true || songsLany[0].music2 === true || songsLany[0].music4 == true){
    isPlaying = true
    for (let i = 0; i < audio.length; i++) {
    if(audio[2]){
      continue
    }else{
      audio[i].pause()
    }
  }
  titlesLany.textContent = songsLany[2].title3
  if(isPlayingByNiki){
      titlesNiki.remove()
      isPlayingByNiki = false
  }
  MenuBar.append(titlesLany)
    MenuBar.append(audio[2])
    audio[2].controls = true
      audio[2].src = songsLany[2].src
      audio[2].load()
      audio[2].play()
  } else if(isPlaying == true){
    audio[2].pause()
      isPlaying = false
      music2 = false
  }else if(isPlaying && isPlayingByNiki){
    isPlaying = false
    audio[2].pause()
    songsLany[0].music3 = false 
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btn[3].addEventListener("click",function(){
  try{
    songsLany[0].music4 = true
  if(isPlaying == false || songsLany[0].music2 === true || songsLany[0].music3 === true || songsLany[0].music1 === true){
    isPlaying = true
    for (let i = 0; i < audio.length; i++) {
    if(audio[3]){
      continue
    }else{
      audio[i].pause()
    }
  }
  titlesLany.textContent = songsLany[3].title4
  if(isPlayingByNiki){
      titlesNiki.remove()
      isPlayingByNiki = false
  }
  MenuBar.append(titlesLany)
    MenuBar.append(audio[3])
    audio[3].controls = true
      audio[3].src = songsLany[3].src
      audio[3].load()
      audio[3].play()
  } else if(isPlaying){
    audio[3].pause()
      isPlaying = false
      songsLany[0].music4 = false
  } else if(isPlaying && isPlayingByNiki){
    isPlaying = false
    audio[3].pause()
    songsLany[0].music4 = false 
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
//Button Niki Playlist
btnNiki[0].addEventListener("click",function(){
  try{
    songsNiki[0].music1 = true
  if(!isPlaying || 
    songsNiki[0].music2 || 
    songsNiki[0].music3 || 
    songsNiki[0].music4 || 
    songsLany[0].music2 || 
    songsLany[0].music3 || 
    songsLany[0].music4)
    {

    isPlaying = true
    for (let i = 0; i < audiosNiki.length; i++) {
    if(audiosNiki[0]){
      continue
    }else{
      audiosNiki[i].pause()
    }
  }
  titlesNiki.textContent = songsNiki[0].title1
  if(isPlayingByLany){
      titlesNiki.remove()
      isPlayingByLany = false
  }
  MenuBar.append(titlesNiki)
    MenuBar.append(audiosNiki[0])
    audiosNiki[0].controls = true
      audiosNiki[0].src = songsNiki[0].src
      audiosNiki[0].load()
      audiosNiki[0].play()
  } else if(isPlaying){
    audiosNiki[0].pause()
      isPlaying = false
    console.log("WOrk1")
      audiosNiki[0].music1 = false
  } else if(isPlayingByLany && !isPlayingByNiki){
    console.log("WOrk")
      audiosNiki[0].pause()
      isPlaying = false
      isPlayingByLany = false
      audiosNiki[0].music1 = false
    }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btnNiki[1].addEventListener("click",function(){
  try{
    songsNiki[0].music2 = true
  if(isPlaying == false || songsNiki[0].music1 === true || songsNiki[0].music3 === true || 
    songsNiki[0].music4 === true || songsLany[0].music2 === true || songsLany[0].music3 === true || songsLany[0].music4 == true){
    isPlaying = true
    for (let i = 0; i < audiosNiki.length; i++) {
    if(audiosNiki[1]){
      continue
    }else{
      audiosNiki[i].pause()
    }
  }
  titlesNiki.textContent = songsNiki[1].title2
  if(isPlayingByLany){
    titlesLany.remove()
    isPlayingByLany = false
  }
  MenuBar.append(titlesNiki)
    MenuBar.append(audiosNiki[1])
    audiosNiki[1].controls = true
      audiosNiki[1].src = songsNiki[1].src
      audiosNiki[1].load()
      audiosNiki[1].play()
  } else if(isPlaying === true){
    audiosNiki[1].pause()
      isPlaying = false
      music3 = false
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btnNiki[2].addEventListener("click",function(){
  try{
    songsNiki[0].music3 = true
  if(isPlaying == false || songsNiki[0].music1 === true || songsNiki[0].music2 === true || 
    songsNiki[0].music4 === true || songsLany[0].music2 === true || songsLany[0].music3 === true || songsLany[0].music4 == true){
    isPlaying = true
    for (let i = 0; i < audiosNiki.length; i++) {
    if(audiosNiki[2]){
      continue
    }else{
      audiosNiki[i].pause()
    }
  }
  titlesNiki.textContent = songsNiki[2].title3
  if(isPlayingByLany){
    titlesLany.remove()
      isPlayingByLany = false
  }
  MenuBar.append(titlesNiki)
    MenuBar.append(audiosNiki[2])
    audiosNiki[2].controls = true
      audiosNiki[2].src = songsNiki[2].src
      audiosNiki[2].load()
      audiosNiki[2].play()
  } else if(isPlaying === true){
    audiosNiki[2].pause()
      isPlaying = false
      music3 = false
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
btnNiki[3].addEventListener("click",function(){
  try{
    songsNiki[0].music4 = true
  if(isPlaying == false || songsNiki[0].music1 === true || songsNiki[0].music3 === true || 
    songsNiki[0].music2 === true || songsLany[0].music2 === true || songsLany[0].music3 === true || songsLany[0].music4 == true){
    isPlaying = true
    for (let i = 0; i < audiosNiki.length; i++) {
    if(audiosNiki[3]){
      continue
    }else{
      audiosNiki[i].pause()
    }
  }
  titlesNiki.textContent = songsNiki[3].title4
  if(isPlayingByLany){
    titlesLany.remove()
      isPlayingByLany = false
  }
  MenuBar.append(titlesNiki)
    MenuBar.append(audiosNiki[3])
    audiosNiki[3].controls = true
      audiosNiki[3].src = songsNiki[3].src
      audiosNiki[3].load()
      audiosNiki[3].play()
  } else if(isPlaying === true){
    audiosNiki[3].pause()
      isPlaying = false
      music4 = false
  }
  } catch (error){
    console.error(`Something is wrong ${error}`)
  }
  })
})




