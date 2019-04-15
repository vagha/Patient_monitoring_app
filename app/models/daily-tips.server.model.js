// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const DailyTipsSchema = new Schema({
    tip: {
        type: String,
        required: "Daily tip is required"
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: "Patient is required"
    },
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('DailyTips', DailyTipsSchema);