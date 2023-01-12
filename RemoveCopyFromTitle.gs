function RemoveCopyFromTitle(){
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  for(var i=0; i<sh.getSheets().length; i++){
    var current_sheet = sh.getSheets()[i];
    if (current_sheet.getName().includes(" (копия)")) {
      current_sheet.setName(current_sheet.getName().replace(" (копия)",""));
    }
  }
}
