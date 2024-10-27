import { TestRepository } from './test.repository';

export class TestService {
  private testRepo: TestRepository = new TestRepository();

  add() {
    return this.testRepo.getNumberInDB() + 1;
  }
}
