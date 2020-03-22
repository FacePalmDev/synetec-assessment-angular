import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from 'src/app/services/cities/cities.service';
import { Observable, of } from 'rxjs';
import { map, scan, filter, last } from 'rxjs/operators';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    showError = false;
    errorMessage: string;
    constructor(private _citiesService: CitiesService, private spinner: NgxSpinnerService) {
        this.refreshCities();
    }

    private refreshCities() {
        this.spinner.show();
        this._citiesService.get().subscribe(cities => {
            this.cities = cities;
            this.spinner.hide();
        },
            error => {
                this.spinner.hide();
                this.showErrorMessage("Unable to retrieve list of cities from the server.");
                return Observable.throw(error);
            });
    }

    ngOnInit(): void {

    }


    showErrorMessage(message: string) {
        this.showError = true;
        this.errorMessage = message;
    }

    delete(id: number): void {

        this._citiesService.delete(id).subscribe(() => {
            // todo: seems to be an issue with the MVC service here?
            this.refreshCities();
        },
            error => {

                this.showErrorMessage("An arror occured whilst attempting to delete city.");
                return Observable.throw(error);
            });





    }
}