import { test as base } from '@playwright/test';
import path from 'path';

const storagePath = path.resolve(__dirname, '../fixtures/storageState.json');

export const test = base.extend({
  storageState: async ({}, use) => {
    await use(storagePath);
  },
});
