document.oncontextmenu = function() { return false; };

$(document).ready(function() {
    $(document).mousedown(function(event) {
        var map = document.getElementById('map');

        if (event.which === 3) {
            $('.context-menu').remove();

            if (event.target !== map) {
                return false;
            }

            $('<div/>', {
                class: 'context-menu'
            })
            .css({
                left: event.pageX + 'px',
                top: event.pageY + 'px'
            })
            .appendTo('body')
            .append(
                $('<ul/>')
                    .append('<button class="context-button">Add new place</button>')
                    .append('<button class="context-button">Copy location link</button>')
            )
            .show('fast');
        }

        if (event.which !== 3) {
            setTimeout(function() {
                $('.context-menu').remove();
            }, 10);
        }
    });
});
