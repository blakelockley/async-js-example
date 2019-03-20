$('#request-data-button').click(function () {
    get_message();
    load_chart();

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
    fetch('/api/message').then(res => res.json()).then(function (json) {
        const message = json['message'];
        $('#message').text(message);
    });
}

async function load_chart() {

    const data = await fetch('/api/data').then(res => res.json());

    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'sales',
            data: data
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
}
