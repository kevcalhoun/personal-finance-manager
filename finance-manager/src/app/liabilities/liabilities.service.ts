import { Injectable } from "@angular/core";
import { Liability } from "./models/liabilty";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LiabilityService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getLiabilities(): Observable<Liability[]> {
        return this.http.get<Liability[]>(`${this.apiServerUrl}/liability/all`);
    }

    public createLiability(liability: Liability): Observable<Liability> {
        return this.http.post<Liability>(`${this.apiServerUrl}/liability/add`, liability);
    }

    public updateLiability(liability: Liability): Observable<Liability> {
        return this.http.put<Liability>(`${this.apiServerUrl}/liability/update`, liability);
    }

    public deleteLiability(liabilityId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/liability/delete/${liabilityId}`);
    }


}