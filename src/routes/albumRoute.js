import express from 'express'
import upload from '../middleware/multer';
import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumController';


const albumRouter = express.Router();

albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove', removeAlbum);

export default albumRouter;