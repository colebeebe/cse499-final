import express, { Router } from 'express';
import { getPaths } from '../util/path.js';
import path from 'path';
import apiRouter from './api.js';

const { __dirname } = getPaths(import.meta.url);

const router = Router();

router.use('/api', apiRouter);

router.use(express.static(path.join(__dirname, '..', 'dist')));

router.get(/^\/(?!api\/).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

export default router;
