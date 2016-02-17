if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }
}

window.bootstrap = function () {
    angular.bootstrap(document, ['flock']);
}

window.init = function () {
    window.bootstrap();
}

$(document).ready(function () {
	//Fixing facebook bug with redirect
	if (window.location.hash == "#_=_") window.location.hash = "";
    window.init();
});