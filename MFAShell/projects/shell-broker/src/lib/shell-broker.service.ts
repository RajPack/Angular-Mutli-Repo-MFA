import { BehaviorSubject } from 'rxjs';
import {pluck} from 'rxjs/operators';


export class ShellBrokerService {
  shellBrokerData: {[x: string]: any} = {};
  shellBrokerData$ = new BehaviorSubject<{[x: string]: any}>(this.shellBrokerData);
  constructor() {
   }

  get(key: string) {
    return this.shellBrokerData$.pipe(
      pluck(key)
    );
  }

  set(key: string, value: any) {
    this.shellBrokerData[key] = value;
    this.shellBrokerData$.next(this.shellBrokerData);
  }

}
