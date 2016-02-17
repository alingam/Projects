/**
 * Created with JetBrains WebStorm.
 * User: alingam
 * Date: 8/19/13
 * Time: 10:24 AM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , async = require('async')
    , Event = mongoose.model('Event')
    , _ = require('underscore')


exports.event = function(req, res, next, id){
    var User = mongoose.model('User')

    Event.load(id, function (err, event) {
        if (err) return next(err)
        if (!event) return next(new Error('Failed to load article ' + id))
        req.event = event
        next()
    })
}

/**
 * Create a event
 */
exports.create = function (req, res) {
    var event = new Event(req.body)
    console.log("inside the event controller"+event);
    event.user = req.user
    event.save()
    res.jsonp(event)
}

exports.show = function(req, res){
    res.jsonp(req.event);
}


/**
 * List of Articles
 */
exports.all = function(req, res){
    Event.find().populate('user','name email username').sort('-createDate').exec(function(err, events) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(events);
        }
    });
}
