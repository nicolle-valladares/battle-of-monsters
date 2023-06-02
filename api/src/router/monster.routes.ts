import { Router } from 'express';
import { MonsterController } from '../controllers/monster.controller';
const router = Router();

router.get('/', MonsterController.getAllMonsters);

export default router;
