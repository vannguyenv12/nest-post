import { Injectable } from '@nestjs/common';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
  constructor(private testRepo: TestRepository) {}

  add() {
    return this.testRepo.getNumberInDB() + 1;
  }
}
