# Reward Gateway QA test

Front end user testing to check a position is still advertised

## Testing framework is Jest - Puppeteer

This is an example of using Jest24.1 with config in package.json

 ```
 "jest": {
    "preset": "jest-puppeteer"
  },
  ```

### Dependencies
- node version v9.11.2
- npm 5.6.0

### Installation
When you have upgraded node and npm to meet above requirements `npm install` will install all the packages on the package.json

`npm install -g jest` may be required to use `jest` from the command line

### Run tests
Type 
```
jest test
``` 
on command line at root of project
