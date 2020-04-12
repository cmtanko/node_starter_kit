"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = function (knex) {
    let tblName = 'address';
    let rows = [
        {
            address: 'Kobahal',
            address2: 'Patan',
            district: 'Lalitpur',
            phone: '98568525487',
            city_id: 1,
            postal_code: '00977',
        },
        {
            address: 'Sapal',
            address2: 'Patan',
            district: 'Kathmandu',
            phone: '98568525487',
            city_id: 2,
            postal_code: '00977',
        },
        {
            address: 'M-Road',
            address2: 'Sifal',
            district: 'Bhaktapur',
            phone: '98568525487',
            city_id: 3,
            postal_code: '00977',
        },
        {
            address: 'Japt',
            address2: 'Patan',
            district: 'Kiod',
            phone: '98564222',
            city_id: 4,
            postal_code: '00977',
        },
        {
            address: 'Andi',
            address2: 'Pond',
            district: 'Burt',
            phone: '985632523487',
            city_id: 2,
            postal_code: '00977',
        },
        {
            address: 'Kobahal',
            address2: 'Ponew',
            district: 'dse',
            phone: '9856432347',
            city_id: 3,
            postal_code: '00977',
        },
        {
            address: 'Gioi',
            address2: 'Tui',
            district: 'Lalitpur',
            phone: '9856876764587',
            city_id: 4,
            postal_code: '00977',
        },
        {
            address: 'Quio',
            address2: 'Patana',
            district: 'Lalitpur',
            phone: '985683453487',
            city_id: 2,
            postal_code: '00977',
        },
    ];
    return knex(tblName)
        .del()
        .then(function () {
        return knex.insert(rows).into(tblName);
    });
};
//# sourceMappingURL=03-address.js.map