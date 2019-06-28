$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterUser.feature");
formatter.feature({
  "line": 2,
  "name": "Registration of a new user",
  "description": "As a application user\r\nI want to register a new user in the app Selendroid-test-app\r\nSo that a verification user card should appear\r\n\r\nComment: Depois de criar esse arquivo e instalar o cucumber plugin File-\u003esettings-\u003epluggins-\u003ecucumber java, clicar com o direito e rodar o cenario, no log vai aparecer a estrutura dos steps para copiar e preencher mais facilmente os steps",
  "id": "registration-of-a-new-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register-User--UserStory01"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Register a new user",
  "description": "",
  "id": "registration-of-a-new-user;register-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Create-User-Positive--AcceptanceCriteria01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Selendroid-test-app",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select Register button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "fill the Username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill the E-mail as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "fill the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "fill the name as \"Leonardo\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select the programming language as",
  "rows": [
    {
      "cells": [
        "Ruby"
      ],
      "line": 20
    },
    {
      "cells": [
        "PHP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Python"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "check the checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click Register User button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the verify user card",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the Name should be \"Leonardo\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "registration-of-a-new-user;register-a-new-user;",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "password"
      ],
      "line": 30,
      "id": "registration-of-a-new-user;register-a-new-user;;1"
    },
    {
      "cells": [
        "Leo1",
        "teste@gmail.com",
        "teste1"
      ],
      "line": 31,
      "id": "registration-of-a-new-user;register-a-new-user;;2"
    },
    {
      "cells": [
        "Leo2",
        "teste@gmail.com",
        "teste2"
      ],
      "line": 32,
      "id": "registration-of-a-new-user;register-a-new-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41548614823,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Register a new user",
  "description": "",
  "id": "registration-of-a-new-user;register-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Create-User-Positive--AcceptanceCriteria01"
    },
    {
      "line": 1,
      "name": "@Register-User--UserStory01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Selendroid-test-app",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select Register button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "fill the Username as \"Leo1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill the E-mail as \"teste@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "fill the password as \"teste1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "fill the name as \"Leonardo\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select the programming language as",
  "rows": [
    {
      "cells": [
        "Ruby"
      ],
      "line": 20
    },
    {
      "cells": [
        "PHP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Python"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "check the checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click Register User button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the verify user card",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the Name should be \"Leonardo\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterUserSteps.i_am_on()"
});
formatter.result({
  "duration": 74099681,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.i_select()"
});
formatter.result({
  "duration": 595644298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leo1",
      "offset": 22
    }
  ],
  "location": "RegisterUserSteps.fill_the_Username_as(String)"
});
formatter.result({
  "duration": 6821258493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUserSteps.fill_the_E_mail(String)"
});
formatter.result({
  "duration": 7753634892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste1",
      "offset": 22
    }
  ],
  "location": "RegisterUserSteps.fill_the_password(String)"
});
formatter.result({
  "duration": 6988777635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo",
      "offset": 18
    }
  ],
  "location": "RegisterUserSteps.fill_the_name(String)"
});
formatter.result({
  "duration": 9305366440,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.select_the_programming_language_as_from_dropdown(String\u003e)"
});
formatter.result({
  "duration": 5572740517,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WR-MORENO02\u0027, ip: \u0027105.103.83.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: D:\\Wellynton\\Projetos\\Appiu..., appActivity: io.selendroid.testapp.HomeS..., appPackage: io.selendroid.testapp, appWaitActivity: io.selendroid.testapp.HomeS..., appWaitPackage: io.selendroid.testapp, databaseEnabled: false, desired: {app: D:\\Wellynton\\Projetos\\Appiu..., deviceName: Android, platformName: android}, deviceManufacturer: samsung, deviceModel: SM-N920G, deviceName: 0115344244413438, deviceScreenSize: 1440x2560, deviceUDID: 0115344244413438, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 7.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: c19c2f31-5c4d-41c7-8fd3-4522eef2210d\n*** Element info: {Using\u003did, value\u003dio.selendroid.testapp:id/input_preferedProgrammingLanguage}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat pages.RegisterUserPage.selectProgrammingLanguage(RegisterUserPage.java:28)\r\n\tat steps.RegisterUserSteps.select_the_programming_language_as_from_dropdown(RegisterUserSteps.java:69)\r\n\tat ✽.And select the programming language as(RegisterUser.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterUserSteps.check_the_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUserSteps.click_Register_User_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUserSteps.i_should_see_the_verify_user_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo",
      "offset": 20
    }
  ],
  "location": "RegisterUserSteps.the_Name_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 25554409267,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Register a new user",
  "description": "",
  "id": "registration-of-a-new-user;register-a-new-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Create-User-Positive--AcceptanceCriteria01"
    },
    {
      "line": 1,
      "name": "@Register-User--UserStory01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Selendroid-test-app",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select Register button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "fill the Username as \"Leo2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill the E-mail as \"teste@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "fill the password as \"teste2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "fill the name as \"Leonardo\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select the programming language as",
  "rows": [
    {
      "cells": [
        "Ruby"
      ],
      "line": 20
    },
    {
      "cells": [
        "PHP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Python"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "check the checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click Register User button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the verify user card",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the Name should be \"Leonardo\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterUserSteps.i_am_on()"
});
formatter.result({
  "duration": 30330,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.i_select()"
});
formatter.result({
  "duration": 306102569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leo2",
      "offset": 22
    }
  ],
  "location": "RegisterUserSteps.fill_the_Username_as(String)"
});
formatter.result({
  "duration": 6730360477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUserSteps.fill_the_E_mail(String)"
});
formatter.result({
  "duration": 7840432794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste2",
      "offset": 22
    }
  ],
  "location": "RegisterUserSteps.fill_the_password(String)"
});
formatter.result({
  "duration": 6926180479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo",
      "offset": 18
    }
  ],
  "location": "RegisterUserSteps.fill_the_name(String)"
});
formatter.result({
  "duration": 9075113914,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.select_the_programming_language_as_from_dropdown(String\u003e)"
});
formatter.result({
  "duration": 5056458296,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WR-MORENO02\u0027, ip: \u0027105.103.83.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: D:\\Wellynton\\Projetos\\Appiu..., appActivity: io.selendroid.testapp.HomeS..., appPackage: io.selendroid.testapp, appWaitActivity: io.selendroid.testapp.HomeS..., appWaitPackage: io.selendroid.testapp, databaseEnabled: false, desired: {app: D:\\Wellynton\\Projetos\\Appiu..., deviceName: Android, platformName: android}, deviceManufacturer: samsung, deviceModel: SM-N920G, deviceName: 0115344244413438, deviceScreenSize: 1440x2560, deviceUDID: 0115344244413438, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 7.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: b98258a6-e18d-4703-b498-5f518576176a\n*** Element info: {Using\u003did, value\u003dio.selendroid.testapp:id/input_preferedProgrammingLanguage}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat pages.RegisterUserPage.selectProgrammingLanguage(RegisterUserPage.java:28)\r\n\tat steps.RegisterUserSteps.select_the_programming_language_as_from_dropdown(RegisterUserSteps.java:69)\r\n\tat ✽.And select the programming language as(RegisterUser.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterUserSteps.check_the_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUserSteps.click_Register_User_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUserSteps.i_should_see_the_verify_user_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo",
      "offset": 20
    }
  ],
  "location": "RegisterUserSteps.the_Name_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});