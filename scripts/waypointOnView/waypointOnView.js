// create animation waypoints on view
export default function createWapointOnView(){
    var elements = document.querySelectorAll('[data-animateInView]');
    var inViewWaypoints = [];

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let inViewWaypoint = new Waypoint.Inview({
            element: element,
            enter: function(){
                element.classList.add('animated');
            }
        })
        inViewWaypoints.push(inViewWaypoint);
    }

    return inViewWaypoints;
}