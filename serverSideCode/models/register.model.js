const mongoose = require('mongoose');

/**connection to the database */
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@demodb-ynmyj.mongodb.net/booktopus?retryWrites=true&w=majority');

var registerSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    email: String,
    password: String,
    contact: String,
    gender: String,
    register_date: {
        type: Date,
        default: Date.now
    }
});

var userDetailModel = mongoose.model('user_details', registerSchema);

module.exports = userDetailModel;