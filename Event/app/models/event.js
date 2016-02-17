/**
 * Created with JetBrains WebStorm.
 * User: alingam
 * Date: 8/19/13
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

/**
 * Event Schema
 */

var getSupportNeeded = function (support) {
    return support.join(',')
}

var setSupportNeeded = function (support) {
    return support.split(',')
}
var EventSchema = new Schema({

    title: {type: String, default: '', trim : true},
    location: {type: String, default: '', trim : true},
    venue: {type: String, default: '', trim : true},
    description: {type: String, default: '', trim : true},
    startDate: {type : Date, default : Date.now},
    endDate: {type : Date, default : Date.now},
    startTime : {type: String, default: '', trim : true},
    endTime : {type: String, default: '', trim : true},
    imageUrl :{type: String, default: ''},
    status :{type: String, default: '', trim : true},
    supportNeeded : {type:[],get: getSupportNeeded, set: setSupportNeeded},
    broadcast:{type: String, default: '', trim : true},
    eventTemplate: {type: String, default: '', trim : true},
    category:{type : Schema.ObjectId, ref : 'Category'},
    eventType : {type: String, default: '', trim : true},
    webAddress : {type: String, default: '', trim : true},
    user: {type : Schema.ObjectId, ref : 'User'},
    createDate: {type : Date, default : Date.now},
    modifyDate : {type : Date, default : Date.now}
});

mongoose.model('Event', EventSchema);