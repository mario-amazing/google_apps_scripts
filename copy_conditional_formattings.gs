function copyconditionalformating() {
  var sh = SpreadsheetApp.getActiveSpreadsheet();
    for(var i=0; i<sh.getSheets().length; i++){
      sh.setActiveSheet(sh.getSheets()[i], true);
      sh.getRange('C5:I15').activate();
      sh.getRange('\'Template\'!I15').copyTo(sh.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_CONDITIONAL_FORMATTING, false);
    }
};
