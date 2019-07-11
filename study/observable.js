
(function () {
    let a = Observable.create(observer => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        let init = 4;
        let listener = setInterval(() => {
            console.warn(1);
            observer.next(init);
            init++;
        }, 1000);
        return clearInterval.bind(null, listener);
    });
    fromEvent($('#observable'), 'click').subscribe(()=>{
        let subscription = a.subscribe({
            next(n){
                console.log(n);
            },
            error(e){
                console.error(e);
            },
            complete(c){
                console.log(c);
            }
        });
        setTimeout(subscription.unsubscribe.bind(subscription), 2000);
    });
}());