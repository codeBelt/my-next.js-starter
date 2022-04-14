import { render, screen } from '@testing-library/react';
import { IndexPage } from './IndexPage';
import { Foo } from './Foo';
import { Bar } from './Bar';
import { container } from 'tsyringe';

class NewFoo {
  subHeader = 'Test Sub Header';
}

class NextGenFoo {
  subHeader = '789';
}

// https://vhiairrassary.com/engineer/2020-07-18-overriding-singletons-from-tsyringe-within-jest-tests/

describe('IndexPage', () => {
  let store: Bar;

  beforeEach(() => {
    store = container.createChildContainer().register<Foo>(Foo, NewFoo).resolve(Bar);

    container.clearInstances();
  });

  test('renders the about button', () => {
    render(<IndexPage store={store} />);

    expect(screen.getByTestId('IndexPage_about-button')).toContainHTML('About');
  });

  test('renders the sub header', () => {
    render(<IndexPage store={store} />);

    expect(screen.getByTestId('IndexPage_sub-header')).toContainHTML('Test Sub Header');
  });

  test('renders the sub s', () => {
    const storeOverride = container.createChildContainer().register<Foo>(Foo, NextGenFoo).resolve(Bar);

    render(<IndexPage store={storeOverride} />);

    expect(screen.getByTestId('IndexPage_sub-header')).toContainHTML('789');
  });
});
