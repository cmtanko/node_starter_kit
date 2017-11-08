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
    .getCountry(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

export default router;
