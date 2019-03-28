function svgPathPrepare() {
    var svgs = [];
    svgs = document.querySelectorAll('[data-svgAnimate]');

    if(svgs.length > 0){
        for (let i = 0; i < svgs.length; i++) {
            var paths = svgs[i].querySelectorAll('path');
            for (var j = 0; j < paths.length; j++) {
                var lineLength = paths[j].getTotalLength();
                paths[j].style.strokeDasharray = lineLength;
                paths[j].style.strokeDashoffset = lineLength;
                // console.log(lineLength);
            }
        }
    }else{
        console.log('no svgs');
        return;
    }
}