(function () {
    fromEvent($('#operators'), 'click').pipe(
        map(()=>interval(1000).pipe(take(4))),
        concatAll(),
    ).subscribe(console.warn);
}());