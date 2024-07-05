document.addEventListener('DOMContentLoaded', function() {
    fetch('content.md')
        .then(response => response.text())
        .then(text => {
            var converter = new showdown.Converter();
            var html = converter.makeHtml(text);
            document.getElementById('content').innerHTML = html;
        });
});

