/**
 * Created by ling on 15-9-17.
 */
var line_tooltip = function(show,formatter){
  var ltip = new Object;
    ltip.show = show;
    ltip.formatter = formatter;
    return ltip;
};

var pie_tooltip = function(show,formatter,position){
  var ptip = new Object;
    ptip.show = show;
    ptip.formatter = formatter;
    ptip.position = position;
    return ptip;
};

var line_series = function(name,type,y,smooth,data,markline,markpoint){
    var lser = new Object;
    lser.name = name;
    lser.type = type;
    lser.yAxisIndex = y;
    lser.smooth = smooth;
    lser.data = data;
    lser.markline = markline;
    lser.markpoint = markpoint;
    return lser;
};

var pie_series = function(name,type,center,data){
    var pser = new Object;
    pser.name = name;
    pser.type = type;
    pser.center = center;
    pser.data = data;
    return pser;
};

var pardata = function(params){
    var pardt = new Array;
    pardt[0] = params['name'];
    pardt[1] = params['data'];
    pardt[2] = params['data']['value'];
    return pardt;
};

var ajax = function(name){

}



