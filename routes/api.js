import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('primary api endpoint');
});

export default router;
