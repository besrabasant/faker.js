var Faker = require('../lib');
var faker = new Faker({ locale: 'hi', localeFallback: 'en' });
faker.locales['hi'] = require('../lib/locales/hi');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
