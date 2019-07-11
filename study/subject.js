(function () {
    fromEvent($('#subject'), 'click').subscribe(()=>{
        const source = interval(500);
        const subject = new Subject();
        const refCounted = source.pipe(
            multicast(subject),
            refCount(),
        );
        let subscription1,subscription2;
        subscription1 = refCounted.subscribe(console.log);
        console.log('subscription1 subscribed');
        setTimeout(()=>{
            subscription2 = refCounted.subscribe(console.warn);
            console.warn('subscription2 subscribed');
        },1000);
        setTimeout(()=>{
            subscription1.unsubscribe();
            console.log('subscription1 unsubscribed');
        },2000);
        setTimeout(()=>{
            subscription2.unsubscribe();
            console.warn('subscription2 unsubscribed');
        },3000);
    });
    fromEvent($('#behaviorSubject'), 'click').subscribe(()=>{
        const behaviorSubject = new BehaviorSubject(0);
        behaviorSubject.subscribe(console.log);
        behaviorSubject.next(1);
        behaviorSubject.next(2);
        behaviorSubject.subscribe(console.warn);
        behaviorSubject.next(3);
    });
    fromEvent($('#replaySubject'), 'click').subscribe(()=>{
        //一个是缓冲区，一个是窗口时间
        const replaySubject = new ReplaySubject(4,500);
        replaySubject.subscribe(console.log);
        interval(200).pipe(take(4)).subscribe(replaySubject);
        setTimeout(() => {
            replaySubject.subscribe(console.warn);
        }, 1000);
    });
    fromEvent($('#asyncSubject'), 'click').subscribe(()=>{
        const asyncSubject = new AsyncSubject(0);
        asyncSubject.subscribe(console.log);
        asyncSubject.next(1);
        asyncSubject.next(2);
        asyncSubject.subscribe(console.warn);
        asyncSubject.next(3);
        asyncSubject.complete();
    });
}());