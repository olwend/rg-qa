const sum = require('./sum');

test('adds 1 + 2 to be 3', () => {
  expect(sum(1,2)).toBe(3);
});

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});

// https://www.rewardgateway.com/careers
