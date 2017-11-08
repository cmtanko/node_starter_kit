import cityService from './city.service';
import { Router } from 'express';
import _ from 'lodash';

const router = Router();

router.get('/', (req, res) => {
  let country = _.get(req, 'query.country') || undefined;
  cityService
    .getCityList(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  cityService
    .getCity(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  cityService
    .deleteCity(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  let country = req.body;
  cityService
    .addCity(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

export default router;
