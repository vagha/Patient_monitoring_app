// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const VitalSignsSchema = new Schema({
    bodyTemperature: {
        type: Number,
        required: "Body temperature is required"
    },
    heartRate: {
        type: Number,
        required: "Heart rate is required"
    },
    bloodPressure: {
        type: String,
        required: "Blood pressure is required"
    },
    respiratoryRate: {
        type: Number,
        required: "Respiratory rate is required"
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
mongoose.model('VitalSigns', VitalSignsSchema);