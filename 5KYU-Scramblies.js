/* https://www.codewars.com/kata/55c04b4cc56a697bb0000048

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples
    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False */

function scramble(str1, str2) {
    let obj = {}, obj2 = {}, cond = true;
    str1.split('').forEach(x => obj[x] = (obj[x] || 0) + 1);
    str2.split('').forEach(x => obj2[x] = (obj2[x] || 0) + 1);
    
    Object.keys(obj2).forEach(x => {
        if (!obj[x]) {
            cond = false;
        }
        if (obj2[x] > obj[x]) {
            cond = false;
        }
    })
    
    return cond;
}