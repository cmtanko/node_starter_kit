"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = function (knex) {
    var tblName = 'country';
    var rows = [
        { country: 'Afghanistan' },
        { country: 'Algeria' },
        { country: 'American Samoa' },
        { country: 'Angola' },
        { country: 'Anguilla' },
        { country: 'Argentina' },
        { country: 'Armenia' },
        { country: 'Australia' },
        { country: 'Austria' },
        { country: 'Azerbaijan' },
        { country: 'Bahrain' },
        { country: 'Bangladesh' },
        { country: 'Belarus' },
        { country: 'Bolivia' },
        { country: 'Brazil' },
        { country: 'Brunei' },
        { country: 'Bulgaria' },
        { country: 'Cambodia' },
        { country: 'Cameroon' },
        { country: 'Canada' },
        { country: 'Chad' },
        { country: 'Chile' },
        { country: 'China' },
        { country: 'Colombia' },
        { country: 'Congo' },
        { country: 'Czech Republic' },
        { country: 'Dominican Republic' },
        { country: 'Ecuador' },
        { country: 'Egypt' },
        { country: 'Estonia' },
        { country: 'Ethiopia' },
        { country: 'Faroe Islands' },
        { country: 'Finland' },
        { country: 'France' },
        { country: 'French Guiana' },
        { country: 'French Polynesia' },
        { country: 'Gambia' },
        { country: 'Germany' },
        { country: 'Greece' },
        { country: 'Greenland' },
        { country: 'Holy See ' },
        { country: 'Hong Kong' },
        { country: 'Hungary' },
        { country: 'India' },
        { country: 'Indonesia' },
        { country: 'Iran' },
        { country: 'Iraq' },
        { country: 'Israel' },
        { country: 'Italy' },
        { country: 'Japan' },
        { country: 'Kazakstan' },
        { country: 'Kenya' },
        { country: 'Kuwait' },
        { country: 'Latvia' },
        { country: 'Liechtenstein' },
        { country: 'Lithuania' },
        { country: 'Madagascar' },
        { country: 'Malawi' },
        { country: 'Malaysia' },
        { country: 'Mexico' },
        { country: 'Moldova' },
        { country: 'Morocco' },
        { country: 'Mozambique' },
        { country: 'Myanmar' },
        { country: 'Nauru' },
        { country: 'Nepal' },
        { country: 'Netherlands' },
        { country: 'New Zealand' },
        { country: 'Nigeria' },
        { country: 'North Korea' },
        { country: 'Oman' },
        { country: 'Pakistan' },
        { country: 'Paraguay' },
        { country: 'Peru' },
        { country: 'Philippines' },
        { country: 'Poland' },
        { country: 'Puerto Rico' },
        { country: 'Romania' },
        { country: 'Runion' },
        { country: 'Russian Federation' },
        { country: 'Saint Vincent' },
        { country: 'Saudi Arabia' },
        { country: 'Senegal' },
        { country: 'Slovakia' },
        { country: 'South Africa' },
        { country: 'South Korea' },
        { country: 'Spain' },
        { country: 'Sri Lanka' },
        { country: 'Sudan' },
        { country: 'Sweden' },
        { country: 'Switzerland' },
        { country: 'Taiwan' },
        { country: 'Tanzania' },
        { country: 'Thailand' },
        { country: 'Tonga' },
        { country: 'Tunisia' },
        { country: 'Turkey' },
        { country: 'Turkmenistan' },
        { country: 'Tuvalu' },
        { country: 'Ukraine' },
        { country: 'United Arab Emirates' },
        { country: 'United Kingdom' },
        { country: 'United States' },
        { country: 'Venezuela' },
        { country: 'Vietnam' },
        { country: 'Virgin Islands, U.S.' },
        { country: 'Yemen' },
        { country: 'Yugoslavia' },
        { country: 'Zambia' },
    ];
    return knex(tblName)
        .del()
        .then(function () {
        return knex.insert(rows).into(tblName);
    });
};
//# sourceMappingURL=01-country.js.map