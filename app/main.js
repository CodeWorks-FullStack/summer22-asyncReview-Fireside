import { BlueController } from "./Controllers/BlueController.js";
import { PinkController } from "./Controllers/PinkController.js";
import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  playersController = new PlayersController()
  blueController = new BlueController()
  pinkController = new PinkController()
}

window["app"] = new App();
