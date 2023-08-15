const mongoFoodTemplate = require('../model/Food')


const getAllFoods = async (req, res, next) => {
    let foods

    try{
        foods = await mongoFoodTemplate.find()
    }
    catch (err){
        console.log(err);
    }

    if(!foods) return res.status(404).json({message:'No Foods are available...'})

    return res.status(200).json({foods})
}


const getFood = async (req, res, next) => {
    const id = req.params.id;
    
    let food

    try{ 
        food = await mongoFoodTemplate.findById(id)
    }

    catch(err){
        console.log(err);
    }

    if(!food) return res.status(500).json({message:"No matching food data is found"})

    return res.status(200).json({food})
}


const addFood = async (req, res, next) => {
    const {foodName, foodDesc,foodOrigin, foodImg, foodPopularity} = req.body;
    
    let food

    try{ 
        food = new mongoFoodTemplate({foodName, foodDesc, foodOrigin, foodImg, foodPopularity})
        await food.save()
    }

    catch(err){
        console.log(err);
    }

    if(!food) return res.status(500).json({message:"The provided food couldn't be added"})

    return res.status(201).json({food})
}


const updateFood = async (req, res, next) => {
    const id = req.params.id;
    const {foodName, foodDesc,foodOrigin, foodImg, foodPopularity} = req.body;
    
    let food

    try{ 
        food = await mongoFoodTemplate.findByIdAndUpdate(id, {foodName, foodDesc, foodOrigin, foodImg, foodPopularity})
        food = await food.save()
    }

    catch(err){
        console.log(err);
    }

    if(!food) return res.status(404).json({message:"Unable to update the food"})

    return res.status(200).json({food})
}


const deleteFood = async (req, res, next) => {
    const id = req.params.id;
    
    let food

    try{ 
        food = await mongoFoodTemplate.findByIdAndRemove(id)
    }

    catch(err){
        console.log(err);
    }

    if(!food) return res.status(404).json({message:"Unable to delete the food"})

    return res.status(200).json({food})
}


exports.getAllFoods = getAllFoods
exports.addFood = addFood
exports.getFood = getFood
exports.updateFood = updateFood
exports.deleteFood = deleteFood