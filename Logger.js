export class Logger {
  constructor(name) {
    this.testGroupName = name;
  }

  logStart = (testGroupName) => {
    console.log();
    console.log(`Test group ${this.testGroupName}`);
    console.log('==============================================');
  }

  logFail = (testCaseName, actualValue) => {
    console.log(`FAIL: ${testCaseName} Actual value: ${actualValue}`)
  }

  logPass = (testCaseName) => {
    console.log(`PASS: ${testCaseName}`)
  }

  logGroupError = (error) => {
    console.log();
    console.log(`***** Cannot run test group ${this.testGroupName}. Error:  ${error.message}`);
  }
}