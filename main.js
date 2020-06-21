const ExcelJS = require('exceljs');
var workbook = new ExcelJS.Workbook();
function exTest(){
workbook.xlsx.readFile('userFeedback.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
         var lastRow = worksheet.lastRow;
         var getRowInsert = worksheet.getRow(++(lastRow.number));
         var input ={date:new Date, feedback:"awesome"}
    getRowInsert.getCell('A').value = input.date;
    getRowInsert.getCell('B').value = input.feedback;
	getRowInsert.commit();
        return workbook.xlsx.writeFile('userFeedback.xlsx');
    }).catch(e => console.log("vivek Error =>  ",e));
}
exTest();

