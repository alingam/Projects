window.app.directive('tiles', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            scope.$watch("eventsList", function () {

                var eventDataList= scope.eventsList;

                var dateToYMD=function(dateStr) {

                    if(dateStr===null){
                        var date=new Date()
                        var d = date.getDate();
                        var m = date.getMonth() + 1;
                        var y = date.getFullYear();
                        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
                    }
                    else{

                        var a=dateStr.split("T");

                        var d=a[0].split("-");

                        var d1 = d[2]
                        var m1 = d[1]
                        var y1 = d[0]
                        return '' + y1 + '-' +  m1 + '-' + d1;
                    }

                }

                var el = document.getElementById('sample2-grid'),
                    grid = new Tiles.Grid(el);

                // template is selected by user, not generated so just
                // return the number of columns in the current template
                grid.resizeColumns = function() {
                    var d = Tiles.Grid.prototype.resizeColumns.call(this);
                    if(grid.mode==="Small" && grid.getContentWidth() >600){
                        d++;
                    }
                    return d

                };

                // by default, each tile is an empty div, we'll override creation
                // to add a tile number to each div
                grid.createTile = function(tileId) {
                    var tile = new Tiles.Tile(tileId);
                    tile.$el.addClass('tile-block tile-1x1')
                    var displayeventDate=tileId.startDate
                    tile.$el.append('<a href="#!/events/'+tileId._id+'"><div style="background-image: url('+decodeURIComponent(tileId.imageUrl)+')" class="tile-bg rel"><div class="tile-details"><div class="title">'+tileId.title +'</div></div><div class="schedule"><div>Date :'+ dateToYMD(displayeventDate)+ '</div><div>Location:'+tileId.location +'</div></div></div></a>');
                    return tile;
                };

                $("#header-layout-toggle").addClass('zoom').show();



                var $templateButtons = $('#header-layout-toggle .dev-template').on('click', function(e) {

                    // unselect all templates
                    $templateButtons.removeClass("selected");

                    // select the template we clicked on
                    $(e.target).addClass("selected");

                    // get the JSON rows for the selection
                    var index = $(e.target).index()

                    grid.mode="1"
                    grid.template=null
                    grid.cellSizeMin=200;
                    $("#header-layout-toggle").removeClass('zoom').removeClass('grid1').removeClass('smart')
                    if(index==0){
                        grid.templateFactory =Tiles.DynamicTemplates
                        grid.resize()
                        $("#header-layout-toggle").addClass('smart').show()
                    }
                    if(index==1){
                        grid.templateFactory =Tiles.UniformTemplates
                        grid.resize()
                        $("#header-layout-toggle").addClass('grid1').show()

                    }
                    if(index==2){
                        grid.templateFactory =Tiles.UniformTemplates
                        grid.mode="Small"
                        grid.resize()
                        $("#header-layout-toggle").addClass('zoom').show()

                    }
                   // alert($('#Eventlist').attr('mydata'))
                    grid.updateTiles(eventDataList);
                    grid.isDirty = true;
                    grid.redraw(true)


                });


                // make the initial selection
                $('#header-layout-zoom').trigger('click');

                var debounce = function(func, wait, immediate) {
                    var timeout;
                    return function() {
                        var context = this, args = arguments;
                        var later = function() {
                            timeout = null;
                            if (!immediate) func.apply(context, args);
                        };
                        if (immediate && !timeout) func.apply(context, args);
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                    };
                };

                // wait until users finishes resizing the browser
                var debouncedResize = debounce(function() {
                    grid.resize();
                    grid.redraw(true);

                }, 200);

                // when the window resizes, redraw the grid
                $(window).resize(debouncedResize);




            }, true);
        }
    }
});
window.app.directive('ngFrame', function() {
    return{
        restrict: "E",
        transclude: true,
        replace:true,
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function(scope) {
                    transclude(scope, function(clone) {
                        scope.transcluded_content = clone;
                    });
                },
                post:  function(scope, element, attrs){
                    element.contents().find('body').html(scope.transcluded_content);
                }
            };
        },
        template: "<iframe></iframe>"
    };
});

window.app.directive('resize-iframe', function() {
    return {
        restrict: 'A',
        link: function ( scope, elm, attrs ) {

            var container = elm.contentWindow.document.getElementById('ifrm_container'); // Iframe container. Usualy a div.

            function autoResize(){
                ifrmNewHeight = container.offsetHeight; // New height of the document.

                if(ifrmNewHeight !== ifrmOldHeight) {
                    ifrmOldHeight = ifrmNewHeight + 30; // +30 for no scrollbar.
                    ifrm.style.height= (ifrmNewHeight + 30) + "px"; // Set iframe style.
                }

                setTimeout(autoResize, 250);
            }
            // First call of autoResize().
            autoResize();
        }
    }
});


/*window.app.directive('ckEditor', function() {
    return {
        require: '?ngModel',
        link: function(scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);

            if (!ngModel) return;

            ck.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function(value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});*/
