/**
 * Created by ling on 15-9-17.
 */
function linedata(params){
    var line = new Object;
    line.name = params['name'];
    line.value = params['data']['value'];
    line.data = params['data'];
    return line;
}
function piedata(value,name){
    var line = new Object;
    line.name = name;
    line.value = value;
    return line;
}
