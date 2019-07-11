(function () {
    fromEvent($('#subscription'), 'click').subscribe(()=>{
        let father = interval(400).subscribe(console.warn);
        let child = interval(300).subscribe(console.warn);
        father.add(child);
        setTimeout(father.unsubscribe.bind(father), 1000);
    });
}());