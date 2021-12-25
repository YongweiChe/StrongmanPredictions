import express from 'express';
import auth from "../middleware/auth.js";
import { getPost, getPosts, createPost, updatePost } from '../controllers/posts.js'
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);


export default router;