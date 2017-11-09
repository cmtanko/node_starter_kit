import userService from './user.service';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  userService
    .getUserList()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  userService
    .getUserList(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  userService
    .deleteUser(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  let user = req.body;
  userService
    .addUser(user)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
export default router;
