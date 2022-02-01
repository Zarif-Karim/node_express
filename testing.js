//custom library for testing this project

const { throws } = require("assert");

//colors
/* Printing colourful lines in console:
    console.log(color, 'this wiil be colored');
*/
const color_red = '\x1b[31m%s\x1b[0m';
const color_green = '\x1b[32m%s\x1b[0m';
const color_yellow = '\x1b[33m%s\x1b[0m';
const color_blue = '\x1b[34m%s\x1b[0m';
const color_magenta = '\x1b[35m%s\x1b[0m';
const color_cyan = '\x1b[36m%s\x1b[0m';



//class for testing
class Testing {

    constructor(){
        this.TESTS = [];
        this.passed_tests = 0;
        this.failed_tests = 0;
    }
    
    passed_test(name) {
        this.passed_tests += 1;
        console.log(color_green, `Passed: ${name}`);
    }
    
    failed_test(test_obj,actual) {
        this.failed_tests += 1;
        console.log(color_red, `Failed: ${test_obj.name}`,{
            Expected : test_obj.expected,
            Returned : actual
        });
        //console.log(color_green, `\tExpected: ${test_obj.expected}`)
        //console.log(color_red, `\tReturned: ${actual}`)
    }
    
    summary_tests() {
        console.log(color_magenta, '\n------------------------------\n');
        console.log(color_cyan, `${this.TESTS.length} total Test Cases`);
        console.log(color_green, `${this.passed_tests} Test Cases Passed`);
        console.log(color_red, `${this.failed_tests} Test Cases Failed`);
        console.log(color_magenta, '\n------------------------------\n');
    }
    
    reset_stats() {
        this.passed_tests = 0;
        this.failed_tests = 0;
    }

    //input : function reference : the function to test
    //expected_output : the exact output expected for the function (type needs to match)
    add(descripton,input_function,expected_output, /*options = {is_async : false}*/){
        const newTest = {
            name : descripton,
            execute : input_function,
            expected : expected_output
            //options : options
        }

        this.TESTS.push(newTest);
    }

    run() { 
        this.TESTS.forEach(test => {
            // const {is_async} = test.options;
            // if(is_async) {
            //     this.run_async(test);
            // }
            // else {
                const output = test.execute();
                if(output === test.expected) 
                    this.passed_test(test.name);
                else 
                    this.failed_test(test,output);
            //}
        });

        this.summary_tests();
        this.reset_stats();
    }
    async run_async(test){
        try {
            const output = await test.execute();
            if(output === test.expected_output) this.passed_test(test.name);
            else this.failed_test(test.name);
        } catch(error){
            this.failed_test(test.name);
        }

    }
};

module.exports = Testing;

/*
//testing the Testing class
const test = new Testing();


//create dummy function
function addP(num1, num2) {
    return num1 + num2;
}

function addF(num1, num2) {
    return num1 - num2;
}

test.add('adding 1 and 2 addP',()=>{ return addP(1,2); },3);
test.add('adding 1 and 2 addF',()=>{ return addF(1,2); },3);

test.run();
*/


