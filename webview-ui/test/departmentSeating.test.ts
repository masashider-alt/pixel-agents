import assert from 'node:assert/strict';

import { test } from 'vitest';

import { closestFreeSeatInArea } from '../src/office/engine/seatPlacement.js';

test('department seat: nearest free seat inside the matching Area only', () => {
  const seats = new Map([
    ['lobby', { seatCol: 1, seatRow: 1, assigned: false }],
    ['dev-taken', { seatCol: 5, seatRow: 1, assigned: true }],
    ['dev-far', { seatCol: 9, seatRow: 1, assigned: false }],
    ['dev-near', { seatCol: 6, seatRow: 1, assigned: false }],
  ]);
  const zone = (uid: string): string | null => (uid.startsWith('dev') ? 'kaihatsu' : null);
  assert.equal(closestFreeSeatInArea(seats, zone, 'kaihatsu', 1, 1), 'dev-near');
  assert.equal(closestFreeSeatInArea(seats, zone, 'hisho', 1, 1), null);
});
