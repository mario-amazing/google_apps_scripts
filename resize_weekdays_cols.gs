function ResizeWeekdaysCols(){
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  for(var i=0; i<sh.getSheets().length; i++){
    sh.getSheets()[i].setColumnWidths(3, 7, 110);
  }
}
