if (window.location.hash === '#footer') {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
}