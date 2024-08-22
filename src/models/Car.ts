
import { CarDTO } from "../dto/CarDTO";

export class Car {
  static async get_all_cars() {
    return await CarDTO.findAll({
      attributes: [
        "id",
        "model",
        "year",
        "number",
        "color",
        "type",
        "isnew",
        "vengine",
      ],
    });
  }

  static async get_car_by_id(id: string) {
    return await CarDTO.findOne({
      where: { id },
      attributes: [
        "id",
        "model",
        "year",
        "number",
        "color",
        "type",
        "isnew",
        "vengine",
      ],
    });
  }
}