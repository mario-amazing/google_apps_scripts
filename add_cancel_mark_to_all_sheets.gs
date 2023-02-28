// JOINED functionnn!!!
function AddMarkByBGColorAndRegexp() {
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  for(var i=0; i<sh.getSheets().length; i++){
    Logger.log(sh.getSheets()[i].getName() + ' index: ' + i);
    var colHeaders = sh.getSheets()[i].getRange("A:A").getValues();
    var index = colHeaders.slice(4, 18).findIndex((el) => {return  el[0].length == 0; });
    for(x=0;x < 7; x++) {
      for(y=0;y < index; y++){
        var range = sh.getSheets()[i].getRange(y+5,x+3);
        if(range.getBackgroundColor() == '#4a86e8' && range.getValue()[0] != '-'){
          range.setValue('-' + range.getValue());
        }
        if(range.getBackgroundColor() == '#f4cccc' && range.getValue()[0] != '^'){
          range.setValue('^' + range.getValue());
        }
        if(range.getValue()[0] != '-'){
          var value = range.getValue();
          value = value.replace(/отмен/gi, '^отмен');
          value = value.replace(/перен/gi, '^перен');
          value = value.replace(/переза/gi, '^переза');
          value = value.replace(/\^\^/gi, '^');
          value = value.replace(/\^ \^/gi, '^');
          range.setValue(value);
          // Logger.log(value);
        }
      }
    }
  }
}


// For debugg
function AddCancelMarkByBGColor() {
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  var values = sh.getActiveSheet().getRange("A:A").getValues();
  var index = values.slice(4, 18).findIndex((el) => {return  el[0].length == 0; });
  for(x=0;x < 7; x++) {
    for(y=0;y < index; y++){
      var range = sh.getActiveSheet().getRange(y+5,x+3);
      Logger.log(range.getValue());
    }
  }
}

function AddCancelMarkByBGColor() {
  // Logger.log(array);
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  var values = sh.getActiveSheet().getRange("A:A").getValues();
  var index = values.slice(4, 18).findIndex((el) => {return  el[0].length == 0; });
  for(x=0;x < 7; x++) {
    for(y=0;y < index; y++){
      var range = sh.getActiveSheet().getRange(y+5,x+3);
      if(range.getValue()[0] != '-'){
        var value = range.getValue();
        value = value.replace(/отмен/gi, '^отмен');
        value = value.replace(/перен/gi, '^перен');
        value = value.replace(/\^\^/gi, '^');
        value = value.replace(/\^ \^/gi, '^');
        Logger.log(value);
        // Logger.log(range.getValue().replace('отмен', '^отмен'));
      }
    }
  }
}
