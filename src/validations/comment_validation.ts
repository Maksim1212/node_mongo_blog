import { body } from 'express-validator';
import validateData from '../middleware/is_valid';

const createCommentValidation = [
    body('user_id').isString().isLength({ min: 24, max: 24 }),
    body('post_id').isString().isLength({ min: 24, max: 24 }),
    body('body').isString().isLength({ min: 1, max: 1000 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];
const likeCommentValidation = [
    body('id').isString().isLength({ min: 24, max: 24 }),
    body('user_id').isString().isLength({ min: 24, max: 24 }),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];

const deleteCommentValidation = [
    body('id').isString().isLength({ min: 24, max: 24 }),
    body('user_id').isString().isLength({ min: 24, max: 24 }),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
    validateData,
];

export { createCommentValidation, likeCommentValidation, deleteCommentValidation };
