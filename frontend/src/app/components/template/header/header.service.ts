import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { HEaderData } from './header-data.model';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HEaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HEaderData {
    return this._headerData.value
  }

  set headerData(headerData: HEaderData){
    this._headerData.next(headerData)
  }
}
