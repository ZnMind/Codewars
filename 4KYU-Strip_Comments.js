/* https://www.codewars.com/kata/51c8e37cee245da6b40000bd

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

    apples, pears # and bananas
    grapes
    bananas !apples
    The output expected would be:

    apples, pears
    grapes
    bananas

The code would be called like so:

    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    // result should == "apples, pears\ngrapes\nbananas" */

function solution(input, markers) {
    let arr = input.split("\n");
    let str = [], string = [], temp = [];

    for (let i = 0; i < markers.length; i++) {
        str[i] = [];
        for (let j = 0; j < arr.length; j++) {
            temp[j] = [];
            str[i].push(arr[j].split(markers[i])[0]);
        }
    }

    for (let i = 0; i < str.length; i++) {
        string[i] = [];
        for (let j = 0; j < str[0].length; j++) {
            temp[j].push(str[i][j]);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        string[i] = temp[i].reduce((acc, cur) => acc.length < cur.length ? acc : cur)
        string[i] = string[i].trim();
    }

    return string.join('\n')
};