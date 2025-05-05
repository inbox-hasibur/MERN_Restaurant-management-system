import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({ 
    name: {type: String, required: true, minLength: 3, maxLength: 50},
    description: {type: String, required: true},
    price: { 
        type: Number, 
        required: true, 
        min: 0, 
        max: 10000, 
        validate: { validator: Number.isInteger }
    },
    image: {type: String, required: true}
})


const foodModel = mongoose.models.food || mongoose.model('food', foodSchema)

export default foodModel;