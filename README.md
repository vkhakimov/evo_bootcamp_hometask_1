# evo_bootcamp_hometask_1
# Hometask: #project setup #unit tests #integration tests

### Step 1:
Clone the repository to your local machine using git clone command. 

### Step 2:
Check the project structure:
- js folder - for js files
- tests folder - contains test suites
- .gitignore file
- package.json file - dependencies are here

### Step 3:
Run "yarn" command in the project repository folder to install all debendencies to your local machine.

### Step 4: 
Run "yarn test" command in the project repository folder to execute the test suites. After executing the console output should be like:

``` Output example

yarn run v1.22.19
$ jest
 PASS  tests/test.js
  ✓ should properly get the rectangle perimeter (1 ms)
  ✓ should properly get the rectangle area
  ✓ should properly get the rectangle info

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.396 s, estimated 1 s
Ran all test suites.
✨  Done in 0.97s.

```