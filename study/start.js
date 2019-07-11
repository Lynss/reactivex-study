const { range,fromEvent,interval,Observable,of,Subject,BehaviorSubject,ReplaySubject,AsyncSubject,asyncScheduler } = rxjs;
const {map,filter,concatAll,mergeAll,multicast,take,refCount,observeOn} = rxjs.operators;
const $ = document.querySelector.bind(document);

(function () {
    fromEvent($('#begin'),'click').subscribe(()=>{
        range(1, 200).pipe(
            filter(x => x % 2 === 1),
            map(x => x + x),
        ).subscribe(x => console.log(x));
    });
})();