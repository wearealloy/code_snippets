function alloyEqualizer({
    responsive = true,
    debug = false
} = {}) {

    var highest;
    var equilizerContainers = $('[data-alloyEqualize]');
    var windowWidth = $(window).width();

    equilizerContainers.each(function (i) {
      
        var equilizerItems = $(this).find('[data-alloyEqualize-watch]');
        var bp = $(this).data('alloyequalizeResponsive');
        var responsiveStop = bp ? responsiveStop = bp : responsiveStop = 0;
      
        var itemHeightPrevious;
        var itemHeights = [];
        if (debug) {
            console.log('items to be equalized: ', equilizerItems);
            if(responsive){
            console.log('breakpoint: ', responsiveStop);
            }
        }
        equilizerItems.css('min-height', 'auto');
        if (windowWidth > responsiveStop) {
            equilizerItems.each(function (i) {
                var itemHeight = $(this).innerHeight();
                if (itemHeightPrevious) {
                    if (itemHeight > highest) {
                        highest = itemHeight;
                        if (debug) {
                            console.log(itemHeight + ' vs ' + itemHeightPrevious + ' number picked = ' + highest);
                        }
                    }
                    if (debug) {
                        console.log('Highest still = ' + highest);
                    }
                    itemHeightPrevious = itemHeight;
                } else {
                    itemHeightPrevious = itemHeight;
                    highest = itemHeight;
                    if (debug) {
                        console.log('First number picked, current highest = ' + highest);
                    }
                }
                if (debug) {
                    itemHeights.push(itemHeight);
                }
            })
        }
        if (debug) {
                console.log('item heights', itemHeights);
                console.log('highest = ', highest); 
        }
        equilizerItems.css('min-height', highest);
    });

    if (responsive) {
        $(window).resize(function () {
            if (debug) {
                alloyEqualizer({
                    debug: true,
                    responsive: false
                });
            } else {
                alloyEqualizer({
                  responsive: false
                });
            }
        })
    }

}