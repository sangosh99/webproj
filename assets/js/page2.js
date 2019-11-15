
$(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        $('#startDate').val(start.format('YYYY-MM-DD'));
        $('#endDate').val(end.format('YYYY-MM-DD'));
        populateArea(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

    function populateArea(start, end) {
        const param = { start: start, end: end };
        console.log(param);
        $.ajax({
            type: "POST",
            url: "graph.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                var data = eval("(" + result.d + ")");
                $("#area-graph").empty();
                if (data.status == 0) {
                    var donut = Morris.Bar({
                        element: 'area-graph',
                        data: data,
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Series A', 'Series B']
                    });
                }
            },
            error: function () {
                console.log('failed to load');
            }
        });
    }

});








