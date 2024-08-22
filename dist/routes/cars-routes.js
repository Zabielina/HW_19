"use strict";
// import { Router } from "express";
// import { Car } from "../models/Car";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cars_routes = void 0;
// const cars_routes = Router();
// cars_routes.get("/", async (req, res) => {
//   Car.get_all_cars()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err: Error) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });
// export { cars_routes };
const express_1 = require("express");
const Car_1 = require("../models/Car");
const cars_routes = (0, express_1.Router)();
exports.cars_routes = cars_routes;
// Existing route for fetching all cars
cars_routes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Car_1.Car.get_all_cars();
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}));
// New route for fetching a specific car by ID
cars_routes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const car = yield Car_1.Car.get_car_by_id(id);
        if (car) {
            res.send(car);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}));
