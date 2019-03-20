$('#request-data-button').click(function(){
    get_message();

    // NOTE: Function will continue to execute while async function runs.

    $('#request-data-button').detach();
    $('#message').text('Loading... (2 seconds)');
});


async function get_message() {
    const json = await fetch('/api/message').then(res => res.json());
    const message = json['message'];

    $('#message').text(message);
}