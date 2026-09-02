(function () {
    var url = "https://cinejoy.to/";

    document.body.innerHTML =
        '<div style="' +
        'background:#111;' +
        'color:white;' +
        'font-family:Arial;' +
        'padding:50px;' +
        'font-size:28px;' +
        '">' +
        '<h1>Cinejoy diagnostic</h1>' +
        '<p>TV: Samsung TU7000</p>' +
        '<p>Browser: Chromium M69</p>' +
        '<p>Opening Cinejoy...</p>' +
        '</div>';

    setTimeout(function () {
        window.location.href = url;
    }, 1000);
})();
