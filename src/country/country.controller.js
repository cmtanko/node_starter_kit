import countryService from './country.service';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  countryService
    .getCountryList()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  countryService
    .getCountryList(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  countryService
    .deleteCountry(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  let country = req.body;
  countryService
    .addCountry(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

export default router;
