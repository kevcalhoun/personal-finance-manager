import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginForm } from "../models/login";
import { Household } from "../models/household";


@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}


    public getHouseholdByUserName(householdUserName: string): Observable<Household[]> {
        return this.http.get<Household[]>(`${this.apiServerUrl}/account/find/${householdUserName}`);
    }

    public createHousehold(household: Household): Observable<Household> {
        return this.http.post<Household>(`${this.apiServerUrl}/account/add`, household);
    }

    
}