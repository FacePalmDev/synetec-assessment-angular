import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from 'src/app/services/cities/cities.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities$: Observable<ICity[]>;
    constructor(private _citiesService: CitiesService) {
        this.cities$ = _citiesService.get();
    }

    ngOnInit(): void {
    }
}