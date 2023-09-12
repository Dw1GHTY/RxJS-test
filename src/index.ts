import {
    interval,
    map,
    take,
    range,
    filter,
    Subscription,
    takeUntil,
    Observable,
    Subject,
    fromEvent,
    sampleTime,
    debounceTime,
    from,
    switchMap,
    scan,
    pairwise,
    forkJoin,
    combineLatest,
    zip,
    merge
} from "rxjs";

const first$ = interval(200).pipe(
    map(x => "prvi-" + x),
    take(5)
)

const second$ = interval(2000).pipe(
    map(x => "drugi-" + x),
    take(3)
)

//forkJoin, combineLatest, zip

merge(first$, second$).subscribe(x => {
    console.log('synced ', x)
});





