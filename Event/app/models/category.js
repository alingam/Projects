
var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

/**
 * Category Schema
 */

var CategorySchema = new Schema({
    name: {type: String, default: '', trim : true},
    user: {type : Schema.ObjectId, ref : 'User'},
    createDate: {type : Date, default : Date.now},
    modifyDate : {type : Date, default : Date.now}
});

mongoose.model('Category', CategorySchema);