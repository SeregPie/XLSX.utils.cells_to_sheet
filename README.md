# XLSX.utils.cells_to_sheet

`XLSX.utils.cells_to_sheet(data)`

Converts an array of arrays of cell objects to a worksheet.

## setup

### npm

```shell
npm i xlsx.utils.cells_to_sheet
```

---

Import inside an ES module.

```javascript
import 'xlsx.utils.cells_to_sheet';
import XLSX from 'xlsx';
```

*or*

Import inside a CommonJS module.

```javascript
require('xlsx.utils.cells_to_sheet');
let XLSX = require('xlsx');
```

### browser

```html
<script src="https://unpkg.com/xlsx"></script>
<script src="https://unpkg.com/xlsx.utils.cells_to_sheet"></script>
```

## usage

```javascript
let items = [
  ['a', 0.543],
  ['b', 0.164],
  ['c', 0.774],
];
let ws = XLSX.utils.cells_to_sheet(items.map(([label, value]) => [
  {t: 's', v: label},
  {t: 'n', v: value, z: '0%'},
]));
```
