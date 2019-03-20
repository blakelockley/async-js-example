$('#request-data-button').click(function(){
    get_message();

    // The same behaviour can be observed without using async/await by relying on callbacks.
    // get_message_noawait();

    // NOTE: Function will continue to execute while async function runs.

    $('#request-data-button').detach();
    $('#message').text('Loading...');
});

async function get_message() {
    const json = await fetch('/api/message').then(res => res.json());
    const message = json['message'];

    $('#message').text(message);
}

function get_message_noawait() {
    fetch('/api/message').then(res => res.json()).then(function(json) {
        const message = json['message'];
        $('#message').text(message);
    });
}