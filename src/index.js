import XLSX from 'xlsx';

XLSX.utils.cells_to_sheet = function(table) {
	let range = {c: 0, r: table.length};
	let sheet = {};
	table.forEach((row, r) => {
		range.c = Math.max(row.length, range.c);
		row.forEach((cell, c) => {
			sheet[XLSX.utils.encode_cell({c, r})] = cell;
		});
	});
	sheet['!ref'] = XLSX.utils.encode_range({s: {c: 0, r: 0}, e: range});
	return sheet;
};
