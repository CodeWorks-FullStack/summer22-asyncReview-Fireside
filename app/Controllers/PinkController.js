let color = '334477'

export class PinkController{
  constructor(){
    try {
      document.body.style.backgroundColor = `#${color}`
    } catch (error) {
      console.warn('your syntax is bad and you should feel bad', error)
    }
  }
}