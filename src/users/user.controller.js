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
    .getUser(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get('/country', (req, res) => {
  userService
    .getCountryList()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
router.get('/country/:id', (req, res) => {
  userService
    .getCountry(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
router.get('/city', (req, res) => {
  userService
    .getCityList()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
export default router;
