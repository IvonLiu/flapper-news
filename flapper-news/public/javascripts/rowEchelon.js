var matrix = [
	[0, 2, 3, 0],
	[3, 4, 5, 0],
	[5, 6, 7, 0]
];

console.log(matrix);

for (var col=0; col<matrix[0].length; col++) {
	var isPivotCol = false;
	for (var row=0; row<matrix.length; row++) {
		if (matrix[row][col] != 0) {
			isPivotCol = true;
			if (row != 0) {
				swap(0, row);
				console.log(matrix);
			}
		}
	}
}

function swap(a, b) {
	var temp = matrix[a];
	matrix[a] = matrix[b];
	matrix[b] = temp;
}