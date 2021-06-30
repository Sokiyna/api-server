'use strict';

const express = require('express');
const router = express.Router();
const foodModel = require('../models/food');
const DataCollections = require('../models/data-collection-class');
const food = new DataCollections(foodModel);

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


async function getFood(req, res, next) {
    try{
        const id = req.params.id;
        const newFood= await food.read(id);
        res.json(newFood);
    }catch(e){
        next(e);
    }
    
}

async function createFood(req, res, next) {
    try {
      const data = req.body;
      const newFood = await food.create(data);
      res.json(newFood);
    } catch (e) {
      next(e);
    }
  }

async function updateFood(req, res, next){
    try{
        const id = req.params.id;
        const data = req.body;
        const newFood = await food.update(id, data);
        res.json(newFood);
    }catch (e){
        next(e);
    }
}

async function deleteFood(req, res, next){
    try{
        const id = req.params.id;
        const deleteFood = await food.delete(id);
        res.json(deleteFood);
    }catch(e){
        next(e);
    }
}

module.exports = router;




