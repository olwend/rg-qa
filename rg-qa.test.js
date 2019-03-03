describe('QA position is in rewardgateway', () => {
  beforeAll(async () => {
    await page.goto('https://www.rewardgateway.com/careers');
  });

  it('should be titled "Careers | Reward Gateway"', async () => {
    await expect(page.title()).resolves.toMatch('Careers | Reward Gateway');
    await page.screenshot({path: './careers.png'});
  });
});

// https://www.rewardgateway.com/careers
