function addNbrbCources() {
  var start_col = 7;
  var end_col = 607;
  var row = 3;
  var usd_row = 23;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var usd_course = 0;
  const current_date = new Date();

  for(var col=start_col; col <= end_col; col++){
    var date = sheet.getRange(col, row).getValue();
    if(date < current_date){
      var response = UrlFetchApp.fetch("https://api.nbrb.by/exrates/rates/USD?parammode=2&ondate=" + date.toLocaleDateString('sv-SE')); // yyyy-mm-dd
      var json = response.getContentText();
      var data = JSON.parse(json);
      usd_course = data["Cur_OfficialRate"]
    }
    sheet.getRange(col, usd_row).setValue(usd_course);
  }
}
