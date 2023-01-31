const orderSchema = require('../models/order')

const createOrder = async (req, res) =>{
    const order = orderSchema(req.body)
    order.created_at = new Date()
    order
      .save()
      .then((data) => res.json(data))
      .catch((error)=>{res.json({message: error})})
}

const getOrders = async (req, res) => {
  const id = req.params.id
    orderSchema
      .find({
        user_id: id
      })
      .then((data) => {
        console.log(data, 'data>>>>>>>>>')
        res.json(data)
      })
      .catch((error) => res.json({ message: error }))
}

module.exports = {
    createOrder,
    getOrders
}