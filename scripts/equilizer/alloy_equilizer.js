export default function equalizer($itemsToEquilizer, debug){
    var highest;
    var caseItems = $itemsToEquilizer;
    var itemHeightPrevious;
    var itemHeights = [];

    caseItems.each(function(){
        var itemHeight = $(this).innerHeight();
        if(itemHeightPrevious){
            if(itemHeight > itemHeightPrevious){
                highest = itemHeight;
            }
            itemHeightPrevious = $(this).innerHeight();
        }else{
            itemHeightPrevious = $(this).innerHeight();
            highest = itemHeightPrevious;
        }
        if(debug){
            itemHeights.push($(this).innerHeight());
        }
    })

    if(debug){
        console.log('item heights', itemHeights);
        console.log('highest = ', highest);
    }
    
    $itemsToEquilizer.css('height', highest);
}