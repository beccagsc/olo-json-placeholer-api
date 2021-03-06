import fetch from 'node-fetch';
import { Logger } from './Logger.js';

export class ApiTestGroup {
  constructor(method, url, body = {}) {
    this.method = method;
    this.url = url;
    this.body = body;
    this.testGroupName = `${method} ${url}`;
    this.logger = new Logger(this.testGroupName);
  }

  fetchResponse = () => {
    if (JSON.stringify(this.body) === '{}') {
      return fetch(this.url, {
        method: this.method
      })
        .then((response) => {
          this.response = response;
          return response.json()
        })
        .then((json) => {
          this.responseBody = json;
          this.logger.logStart();
        })
        .catch(error => {
          throw (error);
        });
    } else {
      return fetch(this.url, {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          this.response = response;
          return response.json()
        })
        .then((json) => {
          this.responseBody = json;
          this.logger.logStart();
        })
        .catch(error => {
          throw (error);
        });
    }
  }

  testCase = (responseField, expectedValue) => {
    let actualValue = '';
    const testCaseName = `${responseField} should equal: ${expectedValue}`;
    if (responseField.startsWith('body.')) {
      const actualField = responseField.replace('body.', '');
      actualValue = eval(`this.responseBody.${actualField}`);
    } else {
      actualValue = eval(`this.response.${responseField}`);
    }
    if (actualValue === expectedValue) {
      this.logger.logPass(testCaseName);
    } else {
      this.logger.logFail(testCaseName, actualValue);
    }
  }
}