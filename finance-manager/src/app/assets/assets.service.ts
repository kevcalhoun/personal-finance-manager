import { Injectable } from "@angular/core";
import { Asset } from "./models/asset";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getAssets(): Observable<Asset[]> {
        return this.http.get<Asset[]>(`${this.apiServerUrl}/asset/all`);
    }

    public getAssetsByUserId(userId: number): Observable<Asset[]> {
        return this.http.get<Asset[]>(`${this.apiServerUrl}/asset/find/${userId}`);
    }

    public createAsset(asset: Asset): Observable<Asset> {
        return this.http.post<Asset>(`${this.apiServerUrl}/asset/add`, asset);
    }

    public updateAsset(asset: Asset): Observable<Asset> {
        return this.http.put<Asset>(`${this.apiServerUrl}/asset/update`, asset);
    }

    public deleteAsset(assetId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/asset/delete/${assetId}`);
    }


}