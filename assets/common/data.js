/**
 * Created by ling on 15-9-17.
 */

require.config({
    paths: {
        assets: '/assets'
    }
});

$.ajax({
    url: "/test/" + params['name']
}).done(function (data) {
    for (var i in data['rank']) {

        var percent = Number(data['rank'][i]['percent']);
        percent = percent.toFixed(2);
        var name = data['rank'][i]['name'];
        var count = data['rank'][i]['count'];
        var len = data['rank'].length;
        var other = params['data'];
        if (params['seriesName'] == "日发言量" && params['data'] != Object && $.inArray(params['name'], ["avg", "min", "max"]) == -1) {
            pied[i] = piedata(count, name);
            sum += data['rank'][i]['count'];
            len--;
            if (i == len) {
                other = other - sum;
                i++;
                pied[i] = piedata(other, '其他');
                //console.log(data1);
            }
        }else{
            $("#pie").hide();
        }
        res += '<div style="margin-bottom:3px"><div class="ui circular pink label"><a href="/user/' +
            encodeURI(name) + '">' + name + '</a></div>' +
            '<div class="ui circular yellow label">' + count +
            '</div><div class="ui circular violet label">' + percent + '%</div></div>';
    }
    callback(ticket, res);
});
