
jQuery(function (){

        $("#bf-submit").hover(
        function () {
            $(this).css("background", "green");
        },
        function () {
            $(this).css("background", "white");
        }
        );


        $('#book-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: function (data, callback) {
            const page = Math.floor(data.start / data.length);
            const size = data.length;
            const sortBy = data.columns[data.order[0].column].data;
            const sortDirection = data.order[0].dir;
             console.log(sessionStorage.getItem("sessionId"))
            $.ajax({
            url: `http://localhost:8080/api/book/list?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
            type: 'GET',
            headers :{
                sessionId : sessionStorage.getItem("sessionId")
            },
            success: function (response) {
                callback({
                draw: data.draw,
                recordsTotal: response.totalRecords,
                recordsFiltered: response.totalRecords,
                data: response.data
                });
            }
            });
        },
        columns: [
            { data: "bookName", title: "Book Name" },
            { data: "bookAuthor", title: "Author" },
            { data: "bookPrice", title: "Price" },
            { data: "bookDescription", title: "Description" }
        ],
        pageLength: 5,
        ordering: true,
        searching: false,
        responsive: true
    
        });


    $('#b-form').on('submit', function(e) {
        e.preventDefault();

        const bookData = {
            bookName: $('#b-name').val(),
            bookAuthor: $('#b-author').val(),
            bookPrice: $('#b-price').val(),
            bookDescription: $("#b-desc").val()
        };

        $.ajax({
            url: "http://localhost:8080/api/book/",
            type: "POST",
            contentType: "application/json",
            headers :{
                sessionId : sessionStorage.getItem("sessionId")
                
            },
            data: JSON.stringify(bookData),
            success: function() {
            alert("Book added successfully!");
            $('#book-table').DataTable().ajax.reload() // Refresh table
            },
            error: function() {
            alert("Error adding book.");
            }
        });
        });

}
);

