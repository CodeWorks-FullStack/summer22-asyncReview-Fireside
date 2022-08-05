let even = 0
const elem = document.getElementById('blue-box')

function wave(){
  if(!even){
    even++
    // @ts-ignore
    elem.innerText = `✋`
  }else{
    // @ts-ignore
    elem.innerText = `👋`
    even--
  }
}

export class BlueController{
  constructor(){
    setInterval(wave, 300);
  }



}