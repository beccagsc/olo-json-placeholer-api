export class Logger {

  logStart = (testGroupName) => {
    console.log();
    console.log(`Test group ${testGroupName}`);
  }

  logFail = (testCaseName, actualValue) => {
    console.log(`FAIL: ${testCaseName} Actual value: ${actualValue}`)
  }

  logPass = (testCaseName) => {
    console.log(`PASS: ${testCaseName}`)
  }

}