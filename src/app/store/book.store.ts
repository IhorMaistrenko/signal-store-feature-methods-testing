import { signalStore, withState } from '@ngrx/signals';
import { withCustomFeatureOne } from './features/custom-feature1.feature';
import { withCustomFeatureTwo } from './features/custom-feature2.feature';

export const BooksStore = signalStore(
  withState({ books: []}),
  withCustomFeatureOne(),
  withCustomFeatureTwo()
);
