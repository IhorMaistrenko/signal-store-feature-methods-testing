import { computed } from '@angular/core';
import {signalStoreFeature, withComputed, withMethods, withState} from '@ngrx/signals';

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | { error: string };
export type RequestStatusState = { requestStatus: RequestStatus };

export function withCustomFeatureOne() {
  return signalStoreFeature(
    withMethods((store) => ({
      doSomething(): void {
        console.log('customFeatureOne.doSomething');
      },
      doSomething2(): void {
        this.doSomething();
        console.log('customFeatureOne.doSomething 2');
      }
    }))
  );
}
