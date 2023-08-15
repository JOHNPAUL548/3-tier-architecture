const app = require('express')
const foodController = require('../controller/food-controller')
const router = app.Router()



router.get('/', foodController.getAllFoods)
router.post('/', foodController.addFood)
router.get('/:id', foodController.getFood)
router.put('/:id', foodController.updateFood)
router.delete('/:id', foodController.deleteFood)


module.exports = router