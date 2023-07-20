const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.json(goals)
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
    })
    res.json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    const goal = Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    res.json(deletedGoal)
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}