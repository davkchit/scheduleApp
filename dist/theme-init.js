(function () {
    var t = localStorage.getItem('theme');
    if (t === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        var meta = document.getElementById('meta-theme-color');
        if (meta) meta.content = '#0f172a';
    }
})();
