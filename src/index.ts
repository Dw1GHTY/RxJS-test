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
    debounceTime
} from "rxjs";
import { Movie } from "./movie";

const URL = "http://localhost:3000/movies/";

function getMovie(title: string): Promise<Movie> {
    return fetch(URL + title)
        .then(response => {
            if (!response.ok) {
                throw new Error("Movie not found!");
            } else {
                return response.json();
            }
        })
        .catch(err => console.log(err))
}

getMovie("rocky");

//stao si na 31:15