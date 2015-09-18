/**
 * Created by ling on 15-9-17.
 */
var line_option = function(legend,tooltip,x,y,series){
    var line = new Object;
    line.legend=legend;
    line.tooltip=tooltip;
    line.xAxis=x;
    line.yAxis=y;
    line.series=series;
    return line;
};

var pie_option = function(title,tootip,series){
    var pie = new Object;
    pie.title = title;
    pie.tooltip = tootip;
    pie.series = series;
    return pie;
};

var mline = function(data){
    var mline = new Object;
    mline.data=data;
    return mline;
};

var mpoint = function(data){
    var mpoint = new Object;
    mpoint.data=data;
    return mpoint;
};

var mkdata = function(type,name){
    var data = new Object;
    data.type = type;
    data.name = name;
    return data;
};

var pie_data = function(value,name){
    var piedt = new Object;
    piedt.value = value;
    piedt.name = name;
    return piedt;
};
