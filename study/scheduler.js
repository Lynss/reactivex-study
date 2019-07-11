(function () {
    fromEvent($('#scheduler'),'click').subscribe(()=>{
        const source = of(1,2,3);
        const proxyObservable = source.pipe(observeOn(asyncScheduler,1000));
        const observer = {
            next:console.log,
            complete(){
                console.warn('complete');
            }
        };

        console.warn("before subscribe");
        proxyObservable.subscribe(observer);
        console.warn("after subscribe");
    });
})();