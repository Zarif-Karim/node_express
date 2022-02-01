//custom library for testing this project

const { throws } = require("assert");

//colors
/* Printing colourful lines in console:
    console.log(color, 'this wiil be colored');
*/
const color = {
    red : '\x1b[31m%s\x1b[0m',
    green : '\x1b[32m%s\x1b[0m',
    yellow : '\x1b[33m%s\x1b[0m',
    blue : '\x1b[34m%s\x1b[0m',
    magenta : '\x1b[35m%s\x1b[0m',
    cyan : '\x1b[36m%s\x1b[0m'
}



//class for testing
class Testing {

    constructor(){
        //this.TESTS = [];
        this.total_tests = 0;
        this.passed_tests = 0;
        this.failed_tests = 0;
    }
    
    passed_test(name) {
        this.passed_tests += 1;
        console.log(color.green, `Passed: ${name}`);
    }
    
    failed_test(name,actual,expected) {
        this.failed_tests += 1;
        console.log(color.red, `Failed: ${name}`,{
            Expected : expected,
            Returned : actual
        });
    }
    
    summary() {
        console.log(color.magenta, '\n------------------------------\n');
        console.log(color.cyan, `${this.total_tests} total Test Cases`);
        console.log(color.green, `${this.passed_tests} Test Cases Passed`);
        console.log(color.red, `${this.failed_tests} Test Cases Failed`);
        console.log(color.magenta, '\n------------------------------\n');
    }
    
    // reset_stats() {
    //     this.total_tests = 0;
    //     this.passed_tests = 0;
    //     this.failed_tests = 0;
    // }

    //input : function reference : the function to test
    //expected_output : the exact output expected for the function (type needs to match)
    // add(descripton,actual_output,expected_output, /*options = {is_async : false}*/){
    //     const newTest = {
    //         name : descripton,
    //         actual : actual_output,
    //         expected : expected_output
    //     }

    //     this.TESTS.push(newTest);
    // }

    // run_all() { 
    //     this.TESTS.forEach((_,index) => run(index));
    //     this.summary_tests();
    //     this.reset_stats();
    // }

    /*
     * Parameters:
     * const test = {
     *      name : 'Name/Description',
     *      actual : 'Output from the function to be tested'
     *      expected : 'Correct output to be matched'
     * }
     * e.g : run({name:'add 2 and 3',acutal: 5, expected: 5})
     */
    run(name,actual,expected) {
        this.total_tests += 1;
        
        const actual_json = JSON.stringify(actual);
        const expected_json = JSON.stringify(expected);
        if(actual_json === expected_json) {
            this.passed_test(name);
            return true;
        } 
        
        this.failed_test(name,actual,expected);
        return false;
    }
};

module.exports = { Testing, color };


// //testing the Testing class
// const test = new Testing();


// //create dummy function
// function addP(num1, num2) {
//     return num1 + num2;
// }

// function addF(num1, num2) {
//     return num1 - num2;
// }

// test.run('adding 1 and 2 addP',addP(1,2),3);
// test.run('adding 1 and 2 addF',addF(1,2),3);

// test.summary();

