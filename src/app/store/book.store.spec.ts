import { TestBed } from '@angular/core/testing';
import { BooksStore } from './book.store';

describe('BookStore', () => {
  let bookStore: InstanceType<typeof BooksStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksStore]
    });
    bookStore = TestBed.inject(BooksStore);
  });

  fit('should call bookStore.doSomething after calling bookStore.doSomethingElse', () => {
    const spy = spyOn(bookStore, 'doSomething');

    bookStore.doSomethingElse();

    expect(spy).toHaveBeenCalled();
  });

  fit('should call bookStore.doSomething after calling bookStore.doSomething2', () => {
    const spy = spyOn(bookStore, 'doSomething');

    bookStore.doSomething2();

    expect(spy).toHaveBeenCalled();
  });
});
