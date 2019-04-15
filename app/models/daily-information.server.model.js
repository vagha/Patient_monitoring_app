// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const DailyInfoSchema = new Schema({
    info: {
        type: String,
        required: "Daily information is required"
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
mongoose.model('DailyInfo', DailyInfoSchema);