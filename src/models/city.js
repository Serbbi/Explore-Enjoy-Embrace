import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    id_api: {
        type: String,
        required: true
    }
});

export default mongoose.models.City || mongoose.model('City', citySchema);