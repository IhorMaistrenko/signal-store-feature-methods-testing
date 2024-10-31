import { signalStoreFeature, type, withMethods } from '@ngrx/signals';

export function withCustomFeatureTwo() {
  return signalStoreFeature(
    {
      methods: type<{ doSomething(): void }>(),
    },
    withMethods((store) => ({
      doSomethingElse(): void {
        store.doSomething();
        console.log('customFeatureTwo.doSomethingElse');
      }
    }))
  );
}
