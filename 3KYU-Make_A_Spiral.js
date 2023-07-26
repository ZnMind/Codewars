/* https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000

and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000

Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. */

function spiralize(n) {
    let spiral = [], x = 0, y = 0, index = 1, dir = 'r', symbol = 1;
    let xMin = 0, yMin = 0, xMax = n - 1, yMax = n - 1;

    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
        }
        spiral.push(temp);
    }

    while (index <= n * n) {
        if (dir === 'u' && y === yMin) {
            xMin += 1;
            dir = 'r';
            if (symbol === 1) {
                symbol = 0;
            } else {
                symbol = 1;
            }
        }
        if (dir === 'r' && x === xMax) {
            yMin += 1;
            dir = 'd';
        }
        if (dir === 'd' && y === yMax) {
            xMax -= 1;
            dir = 'l';
        }
        if (dir === 'l' && x === xMin) {
            yMax -= 1;
            dir = 'u';
        }

        spiral[y][x] = symbol;

        if (y > 0 && y < n - 1 && x > 0 && x < n - 1 && spiral[y - 1][x] + spiral[y + 1][x] + spiral[y][x - 1] + spiral[y][x + 1] > 1) {
            spiral[y][x] = 0;
        }

        if (dir === 'r') x += 1;
        if (dir === 'd') y += 1;
        if (dir === 'l') x -= 1;
        if (dir === 'u') y -= 1;

        index++;
    }

    return spiral
}