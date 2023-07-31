import { Injectable } from "@angular/core";
import { Bill } from "./models/bill";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BillService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getBills(): Observable<Bill[]> {
        return this.http.get<Bill[]>(`${this.apiServerUrl}/bill/all`);
    }

    public getBillsByUserId(userId: number): Observable<Bill[]> {
        return this.http.get<Bill[]>(`${this.apiServerUrl}/bill/find/${userId}`);
    }

    public createBill(bill: Bill): Observable<Bill> {
        return this.http.post<Bill>(`${this.apiServerUrl}/bill/add`, bill);
    }

    public updateBill(bill: Bill): Observable<Bill> {
        return this.http.put<Bill>(`${this.apiServerUrl}/bill/update`, bill);
    }

    public deleteBill(billId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/bill/delete/${billId}`);
    }


}