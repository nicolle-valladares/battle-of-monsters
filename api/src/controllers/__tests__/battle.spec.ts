import app from '../../app';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import factories from '../../factories';

const server = app.listen();

beforeAll(() => jest.useRealTimers());
afterAll(() => server.close());

describe('BattleController', () => {
  describe('List', () => {
    test('should list all battles', async () => {
      const response = await request(server).get('/battle');
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Battle', () => {
    test('should fail when trying a battle of monsters with an undefined monster', async () => {
      const sampleSize = 1;
      const monsters = factories.monster.buildList(sampleSize);

      const response = await request(server).post('/battle').send({
        monsterA: undefined,
        monsterB: monsters[0],
      });

      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    test('should fail when trying a battle of monsters with an inexistent monster', async () => {
      const sampleSize = 2;
      const monsters = factories.monster.buildList(sampleSize);

      const response = await request(server).post('/battle').send({
        monsterA: monsters[0],
        monsterB: monsters[1],
      });

      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });

    test('should insert a battle of monsters successfully with monster 1 winning', async () => {
      // @TODO
    });

    test('should insert a battle of monsters successfully with monster 2 winning', async () => {
      // @TODO
    });
  });
});
