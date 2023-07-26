/* https://www.codewars.com/kata/5254ca2719453dcc0b00027d

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck! */

function permutations(string) {
    let results = [];
    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        let first = string[i];
        if (string.indexOf(first) !== i) continue;
        let other = string.substring(0, i) + string.substring(i + 1);
        let next = permutations(other);

        for (let j = 0; j < next.length; j++) {
            results.push(first + next[j]);
        }
    }
    return results;
}