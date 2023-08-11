import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginForm } from "../models/login";
import { Household } from "../models/household";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}


    public getHouseholdByUserName(householdUsername: string): Observable<Household[]> {
        return this.http.get<Household[]>(`${this.apiServerUrl}/account/find/${householdUsername}`);
    }


    
}