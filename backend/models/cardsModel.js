const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    postcards: {
        type: [String],
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema)

