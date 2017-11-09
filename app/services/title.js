/**
 * Setting page title via hack.
 */

module.exports = function(title) {

    window.document.title = title;

    setTimeout(function() {

        var iframe = document.createElement('iframe');

        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.src = '/favicon.ico';

        iframe.onload = function() {

            setTimeout(function() {
                document.body.removeChild(iframe);
            }, 0);

        };

        document.body.appendChild(iframe);

    }, 0);

};