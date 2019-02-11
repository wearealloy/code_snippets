export default function equalizer($itemsToEquilizer, debug){
    var highest;
    var caseItems = $itemsToEquilizer;
    var itemHeightPrevious;
    var itemHeights = [];

    if(debug){
        console.log( 'items to be equilized ', caseItems);
    }    

    caseItems.each(function(i){
        var itemHeight = $(this).innerHeight();
        if(itemHeightPrevious){
            if(itemHeight > highest){
                highest = itemHeight;
                if(debug){
                    console.log(itemHeight + ' vs ' + itemHeightPrevious + ' number picked = ' + highest);
                }
            }
            if(debug){
                console.log('Highest still = ' + highest);
            }
            itemHeightPrevious = itemHeight;
        }else{
            itemHeightPrevious = itemHeight;
            highest = itemHeight;
            if(debug){
                console.log('First number picked, current highest = ' + highest);
            }
        }
        if(debug){
            itemHeights.push(itemHeight);
        }
    })

    if(debug){
        console.log('item heights', itemHeights);
        console.log('highest = ', highest);
    }
    
    $itemsToEquilizer.css('min-height', highest);
}