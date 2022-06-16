import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';
import { AppModule } from './../src/app.module';
import { Connection } from 'mongoose';
import { DatabaseService } from '@/database/database.service';
import { SignInAuthDto, SignUpAuthDto } from '@/auth/dto';
import { CreatePropertyDto, PaymentDto, PropertyTypeDto, TenantDto } from '@/properties/dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let dbConnection: Connection;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    if (process.env.NODE_ENV == 'test') {
      app.listen(3080);
    }
    dbConnection = moduleFixture.get<DatabaseService>(DatabaseService).getDbHandle();
  });

  afterAll(() => {
    dbConnection.collection('properties').deleteMany({});
    dbConnection.collection('users').deleteMany({});
    app.close();
  });

  describe('Authentication', () => {
    describe('SignUp', () => {
      const signUpDto: SignUpAuthDto = {
        email: 'messy@gmail.com',
        firstname: 'messy',
        lastname: 'wambua',
        ID: 36430147,
        'phone number': 254728455643,
        password: 'messyHunter',
      };

      it('should signUp', () => {
        return pactum.spec().post('http://localhost:3080/auth/signup').withBody(signUpDto).expectStatus(200).inspect();
      });
    });

    describe('SignIn', () => {
      const signInDto: SignInAuthDto = {
        email: 'messy@gmail.com',
        password: 'messyHunter',
      };

      it('should sign', () => {
        return pactum
          .spec()
          .post('http://localhost:3080/auth/signin')
          .withBody(signInDto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });
});
