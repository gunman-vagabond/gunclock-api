var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var uristring = 'mongodb://localhost/gunclock';
//var uristring = process.env.MONGODB_URI;

//mongoose.connect('mongodb://localhost/todoAppTest');
//mongoose.connect(uristring);
mongoose.connect(uristring);


var GunclockSchema   = new Schema({
//    _id : Number,
    size   : Number,
    color  : String,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gunclock', GunclockSchema);

