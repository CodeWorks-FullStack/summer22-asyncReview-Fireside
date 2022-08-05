import { sandboxApi } from "./AxiosService.js"

class PlayersService {

  async create(formData){

    const res = await sandboxApi.post('/players', formData)


  }

}


export const playersService = new PlayersService()