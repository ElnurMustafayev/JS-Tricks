function CreateBall(event) {
    var span = document.createElement('span');
    var color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    var style = {
        backgroundColor: color,
        width: '50px',
        height: '50px',
        left: `${event.clientX - 25}px`,
        top: `${event.clientY - 25}px`,
    }

    $(span).addClass("cursor")
            .css(style);

    $('body').append(span);
}

$('body').on('click', function (e) {
    CreateBall(e);
});

$('body').on('mousemove', function (e) {
    CreateBall(e);

    $('#cursor').css({
        left: `${e.clientX - 100}px`,
        top: `${e.clientY - 100}px`,
    });
});