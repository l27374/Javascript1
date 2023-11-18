$(document).ready(function () {
    displayDataAll();
});

function displayDataAll() {
    $.ajax({
        url: 'cit5students.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            renderTable({ students: data });
        },
        error: function (error) {
            console.error('Error loading data:', error);
        }
    });
}

function displayData(major) {
    $.ajax({
        url: 'cit5students.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            const filteredData = data.filter(student => student.major === major);
            const sortedData = sortData(filteredData, 'name');
            renderTable({ students: sortedData });
        },
        error: function (error) {
            console.error('Error loading data:', error);
        }
    });
}

function sortData(data, key) {
    return data.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

function renderTable(data) {
    const template = $('#table-template').html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(data);
    $('#data-container').html(html);
}
