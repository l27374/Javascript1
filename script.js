function displayData(major) {
    $.ajax({
        url: 'cit5students.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            const filteredData = data.filter(student => student.major === major);
            renderTable({ students: filteredData });
        },
        error: function (error) {
            console.error('Error loading data:', error);
        }
    });
}

function renderTable(data) {
    const template = $('#table-template').html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(data);
    $('#data-container').html(html);
}
