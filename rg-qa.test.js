jest.setTimeout(15000);

describe('QA position is in rewardgateway', () => {
  beforeAll(async () => {
    await page.goto('https://www.rewardgateway.com/careers');
  });

  it('should be titled "Careers | Reward Gateway"', async () => {
    await expect(page.title()).resolves.toMatch('Careers | Reward Gateway');
    await page.screenshot({path: './careers.png'});
  });

  it('should contain a role called "Automation QA"', async () => {
    await page.waitForSelector('#jobs-container');
    let result = await page.evaluate(() => document.body.textContent);
      expect(result).toContain('Automation QA')
  });

  it('should contain "Jest or Mocha experience" specific to the role', async () => {
    await page.click('#jobs-container > div > div:nth-child(1) > a');
    await page.waitFor(2000);
    await page.screenshot({path: './automationQA.png'});
    const selector = 'body > div.content-wrapper.posting-page > div';
    const text = 'Jest or Mocha experience';
    const selected = await page.$eval(selector, el => el.textContent);
        expect(selected).toContain(text);
    // console.log(selected);
  });
});
