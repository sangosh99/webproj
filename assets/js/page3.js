$(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        $('#startDate').val(start.format('YYYY-MM-DD'));
        $('#endDate').val(end.format('YYYY-MM-DD'));
        populateArea(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
		populateArea2(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
		populateArea3(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
		populateArea4(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
		populateArea5(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
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
            url: "graph6.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                $("#area-graph").empty();
                if (result !== '') {
                    var donut1 = Morris.Area({
                        element: 'area-graph',
                        data: result,
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Series A', 'Series B']
					
                    });
                }
            },
            error: function (xhr, status, error) {
				// debugger;
                console.log('failed to load' + error);
            }
        });
    }
	
	    function populateArea2(start, end) {
        const param = { start: start, end: end };
        console.log(param);
        $.ajax({
            type: "POST",
            url: "graph7.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                $("#area-graph-2").empty();
                if (result !== '') {
                    var donut2 = Morris.Line({
                        element: 'area-graph-2',
                        data: result,
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Series A', 'Series B']
                    });
                }
            },
            error: function (xhr, status, error) {
				// debugger;
                console.log('failed to load' + error);
            }
        });
    }
		    function populateArea3(start, end) {
        const param = { start: start, end: end };
        console.log(param);
        $.ajax({
            type: "POST",
            url: "graph8.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                $("#avg-stay").empty();
                if (result !== '') {
                    var donut3 = Morris.Bar({
                        element: 'avg-stay',
                        data: result,
                        xkey: 'd',
                        ykeys: ['a', 'b'],
                        labels: ['Length of Days in Stay', 'Percent']
                    });
                }
            },
            error: function (xhr, status, error) {
				// debugger;
                console.log('failed to load' + error);
            }
        });
    }
		function populateArea4(start, end) {
        const param = { start: start, end: end };
        console.log(param);
        $.ajax({
            type: "POST",
            url: "graph9.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                $("#morrisBar1").empty();
                if (result !== '') {
                    var donut4 = Morris.Bar({
                        element: 'morrisBar1',
                        data: result,
                        xkey: 'd',
                        ykeys: ['a', 'b'],
                        labels: ['Length of Days in Stay', 'Percent']
                    });
                }
            },
            error: function (xhr, status, error) {
				// debugger;
                console.log('failed to load' + error);
            }
        });
    }
		function populateArea5(start, end) {
        const param = { start: start, end: end };
        console.log(param);
        $.ajax({
            type: "POST",
            url: "stays_by_payer.php",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify(param),
            success: function (result) {
                $("#donut-example").empty();
                if (result !== '') {
                    var donut5 = Morris.Donut({
                        element: 'donut-example',
                        data: result,
                        resize: true
                    });
                }
            },
            error: function (xhr, status, error) {
				// debugger;
                console.log('failed to load' + error);
            }
        });
    }
	
	

});
// Morris.Area({
//     element: 'area-graph',
//     data: [
//         { y: '2006', a: 100, b: 90 },
//         { y: '2007', a: 75,  b: 65 },
//         { y: '2008', a: 50,  b: 40 },
//         { y: '2009', a: 75,  b: 65 },
//         { y: '2010', a: 50,  b: 40 },
//         { y: '2011', a: 75,  b: 65 },
//         { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B']
// });
/*
Morris.Line({
    element: 'area-graph-2',
    data: [
        { y: '2001', a: 100, b: 90 },
        { y: '2002', a: 75,  b: 65 },
        { y: '2003', a: 50,  b: 40 },
        { y: '2004', a: 75,  b: 65 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
});
*/

/*Morris.Donut({
    element: 'donut-example',
    data: [
        {label: "Download Sales", value: 12},
        {label: "In-Store Sales", value: 30},
        {label: "Mail-Order Sales", value: 20}
    ]
});
*/


/*Morris.Bar({
  element: 'avg-stay',
  data: [
    { d: '1', a: 10 },
    { d: '2', a: 20 },
    { d: '3', a: 30 },
    { d: '4', a: 40 }
  ],
  xkey: 'd',
  ykeys: ['a', 'b'],
  labels: ['Length of Days in Stay', 'Percent']
});
/*

/*

Morris.Bar({
  element: 'morrisBar1',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
   barColors: ['#5058AB', '#14A0C1'],
  gridTextSize: 11,
  hideHover: 'auto',
  resize: true
});
*/
/*

Morris.Bar({
  element: 'morrisBar2',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
});
*/






