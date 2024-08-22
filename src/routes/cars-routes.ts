
import { Router } from "express";
import { Car } from "../models/Car";

const cars_routes = Router();


cars_routes.get("/", async (req, res) => {
  try {
    const cars = await Car.get_all_cars();
    res.send(cars);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


cars_routes.get("/:id", async (req, res) => {
  const id_car = req.params.id;
  try {
    const car = await Car.get_car_by_id(id_car);
    if (car) {
      res.send(car);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export { cars_routes };
