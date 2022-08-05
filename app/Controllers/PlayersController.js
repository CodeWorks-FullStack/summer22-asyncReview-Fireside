import { playersService } from "../Services/PlayersService.js";


export class PlayersController {

  async createPlayer() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      console.log('handle form');

      // @ts-ignore
      const form = window.event.target

      const formData = {
        // @ts-ignore
        name: form.banana.value
      }


      await playersService.create(formData)


    } catch (error) {
      console.error('[Create Player]', error)
    }
  }


}
