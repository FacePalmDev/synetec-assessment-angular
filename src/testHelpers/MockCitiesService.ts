import { Observable, of } from 'rxjs';
import { ICity } from 'src/app/models/city.model';

export class MockCitiesService {

    public get(): Observable<ICity[]> {

        const data = [
            {
                "id": 1,
                "name": "New York City",
                "description": "The one with that big park."
            },
            {
                "id": 2,
                "name": "Antwerp",
                "description": "The one with the cathedral that was never really finished."
            },
            {
                "id": 3,
                "name": "Paris",
                "description": "The one with that big tower."
            }
        ] as Array<ICity>;

        return of(data);
    }
}
