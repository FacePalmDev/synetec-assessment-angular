import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICity } from 'src/app/models/city.model';

@Injectable()
export class CitiesEndpoint extends BaseService {

    private citiesUrl = `${environment.apiBaseUrl}api/cities`;

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    get(): Observable<ICity[]> {

        return this._httpClient.get<ICity[]>(this.citiesUrl);
    }

    delete(id: number): Observable<void> {

        const deleteUrl = `${this.citiesUrl}/delete-city/${id}`;

        return this._httpClient.delete<void>(deleteUrl, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });

    }
}