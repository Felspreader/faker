/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '..';
import pt_PT from '../locales/pt_PT';
import en from '../locales/en';

const faker = new Faker({
  locale: 'pt_PT',
  localeFallback: 'en',
  locales: {
    pt_PT,
    en,
  },
});

export = faker;