import { Router } from 'express';
import { BattleController } from '../controllers/battle.controller';

const router = Router();

router.get('/', BattleController.getAllBattles);
router.post('/', BattleController.createBattle);

export default router;
