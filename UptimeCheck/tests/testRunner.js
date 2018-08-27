
var testRunner = {};
testRunner.Run = function (tests) {

    var totalTests = Number(0);
    for (key in tests.unit) {
        if (tests.unit.hasOwnProperty(key)) {
            totalTests++;
        }
    };

    var counter = Number(0)
    var passed = Number(0)
    var failed = Number(0)
    var testName = [];
    var testResults = [];
    var testMessages = [];

    for (key in tests.unit) {
        if (tests.unit.hasOwnProperty(key)) {
            testName.push(key.toString());

            (function () {
                tests.unit[key](tests.config, function (err, message) {
                    counter++;
                    if (!err) {
                        // console.log("SUCCESS");
                        passed++;
                        testResults.push('success');
                        testMessages.push(message.toString());
                    } else {
                        // console.log("FAILED");
                        failed++;
                        testResults.push('fail');
                        testMessages.push(message.toString());
                    }

                    // console.log(counter);
                    // console.log(totalTests);

                    if (counter == totalTests) {
                        var resutls = {
                            "passed":passed,
                            "failed":failed,
                            "totalTests": totalTests,
                            "testName": testName,
                            "testResults": testResults,
                            "testMessages": testMessages
                        };

                        testRunner.report(resutls);
                    };

                });

            })();
        }
    };
};

testRunner.report = function (results) {
    console.log("");
    console.log("--------- TEST REPORT ---------");
    console.log("");
    console.log("\x1b[33m", "Total Tests: ", results.totalTests, "\x1b[0m");
    console.log("\x1b[32m","Passed: ", results.passed ,"\x1b[0m");
    console.log("\x1b[31m","Failed: ", results.failed ,"\x1b[0m");
    console.log("");

    console.log("-------- DETAILS --------");
    console.log("");

    // console.log(results.testResults);
    // console.log(results.testMessages);

    results.testName.forEach(function (test, index) {

        console.log("\x1b[33m", test, "\x1b[0m");
        // console.log(index, results.testResults[index]);

        if (results.testResults[index]=='success') {
            console.log("\x1b[32m", "Success", "\x1b[0m")
        } else {
            console.log("\x1b[31m", "Failed", "\x1b[0m");
        }
    });

    console.log("");
    console.log("-------- DETAILS --------");

    console.log("");
    console.log("--------- TEST REPORT ---------");
};

module.exports = testRunner;