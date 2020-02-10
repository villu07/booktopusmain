const mongoose = require('mongoose');

/**connection to the database */
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@demodb-ynmyj.mongodb.net/booktopus?retryWrites=true&w=majority');

var verificationSchema = mongoose.Schema({
    email: String,
    sixDigitCode: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    expireTime: String
});

var verificationDetailModel = mongoose.model('verification_collection', verificationSchema);

module.exports = verificationDetailModel;