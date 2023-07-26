/* https://www.codewars.com/kata/55905b7597175ffc1a00005a

Johnny is working as an intern for a publishing company, and was tasked with cleaning up old code. He is working on a program that determines how many digits are in all of the page numbers in a book with pages from 1 to n (inclusive).

For example, a book with 4 pages has 4 digits (one for each page) while a 12-page book has 15 (9 for 1-9, plus 2 each for 10, 11, 12).

Johnny's boss, looking to futureproof, demanded that the new program be able to handle books up to 400,000,000,000,000,000 pages. */

function pageDigits(pages, count) {
    let str = pages.toString();
    let digits = 1n, sum = 0n;
    count = count || 0n;
    if (pages < 10n) return pages + count;

    while (digits.toString().length < str.length) {
        digits *= 10n;
    }

    sum += pages - (digits - 1n);
    pages -= sum;
    count += sum * BigInt(str.length);

    return pageDigits(pages, count);
}