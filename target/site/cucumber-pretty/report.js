$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("multpulInvaliLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify Invalid Login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression-3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "mohammad@technosoftacademy.io",
        "test1234"
      ],
      "line": 13,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "chris@technosoftacademy.io",
        "abc123"
      ],
      "line": 14,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11098380342,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Invalid Login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@regression-3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter mohammad@technosoftacademy.io into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter test1234 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mohammad@technosoftacademy.io",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 43
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 512784506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 46083462,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 1729229316,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLoginPage()"
});
formatter.result({
  "duration": 33677013,
  "status": "passed"
});
formatter.after({
  "duration": 261729278,
  "status": "passed"
});
formatter.before({
  "duration": 6536222839,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Invalid Login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@regression-3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter chris@technosoftacademy.io into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter abc123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chris@technosoftacademy.io",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 40
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 105914390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 20
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 43051382,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 1861009178,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLoginPage()"
});
formatter.result({
  "duration": 23608530,
  "status": "passed"
});
formatter.after({
  "duration": 198181449,
  "status": "passed"
});
});