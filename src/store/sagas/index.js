import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DronesLocationsSagas from "./DronesLocation";

export default [...ApiErrors, ...WeatherSagas, ...DronesLocationsSagas];
