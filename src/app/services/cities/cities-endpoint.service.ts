import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICity } from 'src/app/models/city.model';

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    public get(): Observable<ICity[]> {

        const citiesUrl = `${environment.apiBaseUrl}api/cities`;
        return this._httpClient.get<ICity[]>(citiesUrl);

    }
}