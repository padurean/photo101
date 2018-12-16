function getPage(i, prefix, clb) {
  var page = prefix + 'pages/page-' + i + '.html';
  var jqxhr = myJq.get(page)
    .done(function(data) {
      clb(data);
    })
    .fail(function() {
      alert('Error fetching page ' + page);
    });
}

function renderPage(pageHtml) {
  myState.pageJqElem.html(pageHtml);
}
