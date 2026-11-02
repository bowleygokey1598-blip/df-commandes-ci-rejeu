'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { remisesDevis, appliquerRemiseExceptionnelle } = require('../../src/devis/remises');

test('la remise exceptionnelle baisse le total HT', () => {
  const devis = remisesDevis([{ quantite: 100, prixUnitaireHT: 10 }], true);
  assert.ok(appliquerRemiseExceptionnelle(devis, 0.1).totalHT < devis.totalHT);
});
