import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/config/config.json'; 
@Injectable()
export class ConfigService {
 public configUrl='';
     private _config: any;

  constructor() {}
  
  getUserDetails() { return data.userDetails; }
  getUserSkills() { return data.userDetails.job.skills; }


}