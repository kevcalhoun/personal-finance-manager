import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../assets/models/asset';
import { environment } from 'src/environments/environment';
import { AssetService } from '../assets/assets.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiServerUrl = environment.apiBaseUrl;
 

  constructor(private http: HttpClient,
    private assetService: AssetService) { }

    
}
