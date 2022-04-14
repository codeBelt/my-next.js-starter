import { singleton } from 'tsyringe';
import { Foo } from './Foo';

@singleton()
export class Bar {
  constructor(public foo: Foo) {}

  get subHeader(): string {
    return this.foo.subHeader;
  }
}
