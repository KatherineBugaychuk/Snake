$(document).ready(function() {

    //tooltipster-master
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        trigger: 'custom',
        triggerOpen: {
            mouseenter: true,
            touchstart: true
        },

        triggerClose: {
            mouseleave: false,
            originClick: false,
            touchleave: false
        }
    });


    //segment
    var myPath = document.getElementById("my-path"),
        segment = new Segment(myPath);

    segment.draw("0%", "0%", 0);

    function cubicIn(t) {
        return t * t;
    }


    var pointPercents = {
        'point1': 12,
        'point2': 27,
        'point3': 41,
        'point4': 76,
        'point5': 100
    };

    $('.point').mouseover(function() {
        var point_id = $(this).attr('id');
        console.log(point_id);

        $('.point').each(function(){
            if ($(this).attr('id')!= point_id) {

                $(this).tooltipster('close');}

                else {
                    // alert('we have id'+point_id);
            }
        });
        segment.draw("0%", pointPercents[point_id] + "%", 1, {delay: 0.3, easing: cubicIn, circular: false});
    });

})
