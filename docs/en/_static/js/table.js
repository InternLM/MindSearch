$(document).ready(function () {
    table = $('.model-summary').DataTable({
        "stateSave": false,
        "lengthChange": false,
        "pageLength": 10,
        "order": [],
        "scrollX": true,
        "columnDefs": [
            { "type": "summary", targets: '_all' },
        ]
    });
    // Override the default sorting for the summary columns, which
    // never takes the "-" character into account.
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "summary-asc": function (str1, str2) {
            if (str1 == "<p>-</p>")
                return 1;
            if (str2 == "<p>-</p>")
                return -1;
            return ((str1 < str2) ? -1 : ((str1 > str2) ? 1 : 0));
        },

        "summary-desc": function (str1, str2) {
            if (str1 == "<p>-</p>")
                return 1;
            if (str2 == "<p>-</p>")
                return -1;
            return ((str1 < str2) ? 1 : ((str1 > str2) ? -1 : 0));
        }
    });
})
