window.app.filter('getObjByField', function() {
    return function(input, id, field) {

        var i=0, len=input.length;
        for (; i<len; i++) {

            if (input[i][field] == id) {
                return input[i];
            }
        }
        return null;
    }
});

window.app.filter('getIndexByField', function() {
    return function(input, id, field) {

        var i=0, len=input.length;
        for (; i<len; i++) {

            if (input[i][field] == id) {
                return i;
            }
        }
        return null;
    }
});