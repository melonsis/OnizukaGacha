//获取抽卡数据表格元素

var tbA = document.getElementById("tbA");
var tbB = document.getElementById("tbB");
var tbC = document.getElementById("tbC");
var tbD = document.getElementById("tbD");
var tbE = document.getElementById("tbE");
var tbF = document.getElementById("tbF");
var tbG = document.getElementById("tbG");
var poolname = 'A';

//切换卡池
function pool(id) {
    pool1 = document.getElementById("pool1");
    pool2 = document.getElementById("pool2");
    pool3 = document.getElementById("pool3");
    pool4 = document.getElementById("pool4");
    pool5 = document.getElementById("pool5");
    pool6 = document.getElementById("pool6");
    pool7 = document.getElementById("pool7");
    all = document.getElementById("Call-table");

    if (id == 1) {
        pool1.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        
        tbA.style.display="block";
        tbB.style.display="none";
        tbC.style.display="none";
        tbD.style.display="none";
        tbE.style.display="none";
        tbF.style.display="none";
        tbG.style.display="none";

    } else if (id == 2) {
        pool2.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="block";
        tbC.style.display="none";
        tbD.style.display="none";
        tbE.style.display="none";
        tbF.style.display="none";
        tbG.style.display="none";

    } else if (id == 3) {
        pool3.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="none";
        tbC.style.display="block";
        tbD.style.display="none";
        tbE.style.display="none";
        tbF.style.display="none";
        tbG.style.display="none";

    }
    else if (id == 4) {
        pool4.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="none";
        tbC.style.display="none";
        tbD.style.display="block";
        tbE.style.display="none";
        tbF.style.display="none";
        tbG.style.display="none";

    }
    else if (id == 5) {
        pool5.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="none";
        tbC.style.display="none";
        tbD.style.display="none";
        tbE.style.display="block";
        tbF.style.display="none";
        tbG.style.display="none";

    }
    else if (id == 6) {
        pool6.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool7.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="none";
        tbC.style.display="none";
        tbD.style.display="none";
        tbE.style.display="none";
        tbF.style.display="block";
        tbG.style.display="none";

    }
    else if (id == 7) {
        pool7.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool4.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool5.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool6.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";

        tbA.style.display="none";
        tbB.style.display="none";
        tbC.style.display="none";
        tbD.style.display="none";
        tbE.style.display="none";
        tbF.style.display="none";
        tbG.style.display="block";


    }
    //show(showid);
    $().setValue(id, "without");
}
//切换显示表格内容
/*
function show(id) {
    show1 = document.getElementById("show1");
    show2 = document.getElementById("show2");
    show3 = document.getElementById("show3");
    if (chr.style.display == "block") {
        all = document.getElementById("Call-table");
        r5 = document.getElementById("Cr5-table");
        r4 = document.getElementById("Cr4-table");
    } else if (arm.style.display == "block") {
        all = document.getElementById("Aall-table");
        r5 = document.getElementById("Ar5-table");
        r4 = document.getElementById("Ar4-table");
    } else if (nov.style.display == "block") {
        all = document.getElementById("Nall-table");
        r5 = document.getElementById("Nr5-table");
        r4 = document.getElementById("Nr4-table");
    }
    if (id == 1) {
        show1.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        all.style.display = "block";
        r5.style.display = "none";
        r4.style.display = "none";
    } else if (id == 2) {
        show2.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        r5.style.display = "block";
        r4.style.display = "none";
        all.style.display = "none";
    } else if (id == 3) {
        show3.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        r4.style.display = "block";
        all.style.display = "none";
        r5.style.display = "none";
    }
}

//设置角色池UP角色或设置武器池定轨
function setpool(name) {
    undo = document.getElementById("undo");
    if (chr.style.display == "block") {
        $().choice(name, 'chr');
    } else if (arm.style.display == "block") {
        $().choice(name, 'arm');
        document.getElementById("upr5note").style.display = "inline";
    }
    undo.style.display = "inline";
    undo.setAttribute("onclick", "undopool('" + name + "');");
}
//撤销角色池UP角色或撤销武器池定轨
function undopool(name) {
    undo = document.getElementById("undo");
    if (chr.style.display == "block") {
        $().choice("", 'chr');
    } else if (arm.style.display == "block") {
        $().choice("", 'arm');
        document.getElementById("upr5note").style.display = "none";
    }
    undo.style.display = "none";
    document.getElementById(name + "radio").checked = false;
}
*/
//jQuery部分
$(function() {
    //初始化数据记录全局变量
    //var CR5num = 0;
    //var CR4num = 0;
    //var AR5num = 0;
    //var AR4num = 0;
    //var NR5num = 0;
    //var NR4num = 0;
    var gachalog = {};
    gachalog['A'] = {};
    gachalog['B'] = {};
    gachalog['C'] = {};
    gachalog['D'] = {};
    gachalog['E'] = {};
    gachalog['F'] = {};
    gachalog['G'] = {};
    for (var key in gachalog) {
        gachalog[key]['c'] = 0;
        gachalog[key]['r5c'] = 0;
        //gachalog[key]['choice'] = "";
        //gachalog[key]['r5times'] = 0;
    }
    //获取items.json包含的卡池数据
    var itemsdata = $.ajax({
        type: "get",
        url: "items2.json",
        async: false,
        dataType: 'json'
    });
    var items = itemsdata.responseJSON;
    //获取UP物品数据
    function askup(poolname) {
        arrayname = "now-" + poolname;
        r5up = items.r5[arrayname];
        var r5upArr = [];
        if (r5up.length != 10 || r5up.length != 13) {
            for (var r5k in r5up) {
                r5upArr.push(r5up[r5k][1]);
            }
        } else {
            r5upArr.push(r5up[1]);
        }
        r4up = items.r4[arrayname];
        var r4upArr = [];
        if (r4up.length != 10 || r4up.length != 13) {
            for (var r4k in r4up) {
                r4upArr.push(r4up[r4k][1]);
            }
        } else {
            r4upArr.push(r4up[1]);
        }
        var result = [];
        result.upr5 = r5upArr;
        result.upr4 = r4upArr;
        return(result);
    }
    //核心抽卡模块，包括随机选择和保底
    function action(poolname) {
        let info = gachalog[poolname];
        if (poolname == arm) {
            flootnum = 80;
            pluscell = 0.0994;
        } else {
            flootnum = 90;
            pluscell = 0.0497;
        }
        info['cx'] = info['c'] + 1;
        count = info['cx'] - info['r5c'];
        r5per = 0.006;
        r4per = 0.051;
        if (count >= 70) {
            r5per = r5per + (count - 70) * pluscell;
        }
        var seed = Math.random();
        var cseed = Math.random();
        if (count == 1 && info['r5c'] != 0 && (info['r5c'] % 10) == 0 && seed >= r5per) {
            seed = 0.05;
        }
        if (seed <= r5per || count == flootnum) {
            if (poolname == 'chr') {
                if ((cseed <= 0.5 || info['r5times'] == 1) && items.r5['now-chr'] != []) {
                    if (info['choice'] == "") {
                        crs = items.r5['now-chr'][Math.floor(Math.random() * items.r5['now-chr'].length)];
                    } else {
                        for (var r5nck in items.r5['now-chr']) {
                            if (items.r5['now-chr'][r5nck][1] == info['choice']) {
                                crs = items.r5['now-chr'][r5nck];
                            }
                        }
                    }
                } else {
                    crs = items.r5['always-chr'][Math.floor(Math.random() * items.r5['always-chr'].length)];
                }
            } else if (poolname == 'arm') {
                if ((cseed <= 0.5 || info['r5times'] == 2) && items.r5['now-arm'] != []) {
                    if (info['choice'] == "" || info['r5times'] != 2) {
                        crs = items.r5['now-arm'][Math.floor(Math.random() * items.r5['now-arm'].length)];
                    } else {
                        for (var r5nck in items.r5['now-arm']) {
                            if (items.r5['now-arm'][r5nck][1] == info['choice']) {
                                crs = items.r5['now-arm'][r5nck];
                            }
                        }
                    }
                } else {
                    crs = items.r5['always-arm'][Math.floor(Math.random() * items.r5['always-arm'].length)];
                }
            } else {
                if (cseed <= 0.5) {
                    crs = items.r5['always-chr'][Math.floor(Math.random() * items.r5['always-chr'].length)];
                } else {
                    crs = items.r5['always-arm'][Math.floor(Math.random() * items.r5['always-arm'].length)];
                }
            }
        } else if ((seed > r5per && seed <= (r5per + r4per)) || (info['cx'] % 10) == 0) {
            if (poolname == 'chr') {
                if (cseed <= 0.5 && items.r4['now-chr'].length != 0) {
                    crs = items.r4['now-chr'][Math.floor(Math.random() * items.r4['now-chr'].length)];
                } else {
                    crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
                }
            } else if (poolname == 'arm') {
                if (cseed <= 0.5 && items.r4['now-arm'].length != 0) {
                    crs = items.r4['now-arm'][Math.floor(Math.random() * items.r4['now-arm'].length)];
                } else {
                    crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
                }
            } else {
                crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
            }
        } else {
            crs = items.r3['always'][Math.floor(Math.random() * items.r3['always'].length)];
        }
        if (crs.length == 13) {
            rank = crs[2];
        } else if (crs.length == 10) {
            rank = crs[3];
        }
        var result = [];
        result.rank = rank;
        result.img = "<div><img src=\"" + crs[0] + "\" style='hight:40px;width:40px' align='absmiddle'/>";
        result.name = crs[1];
        return(result);
    }

    function modi_action(poolname) {
        let info = gachalog[poolname];

        info['cx'] = info['c'] + 1;
        count = info['cx'];
        switch(poolname){
            case 'A':
                if (items.A['now-chr'].length != 0){
                    crs = items.A['now-chr'][Math.floor(Math.random() * items.A['now-chr'].length)];
                }
                else{
                    crs = items.A['always'][Math.floor(Math.random() * items.A['always'].length)];
                }
            break;
            case 'B':        
                if (items.B['now-chr'].length != 0){
                    crs = items.B['now-chr'][Math.floor(Math.random() * items.B['now-chr'].length)];
                }else{
                    crs = items.B['always'][Math.floor(Math.random() * items.B['always'].length)];
                }
            break;
            case 'C':
                if (items.C['now-chr'].length != 0){
                    crs = items.C['now-chr'][Math.floor(Math.random() * items.C['now-chr'].length)];
                }else{
                    crs = items.C['always'][Math.floor(Math.random() * items.C['always'].length)];
                }
            break;
            case 'D':
                if (items.D['now-chr'].length != 0){
                    crs = items.D['now-chr'][Math.floor(Math.random() * items.D['now-chr'].length)];
                }else{
                    crs = items.D['always'][Math.floor(Math.random() * items.D['always'].length)];
                }
                break;
            case 'E':
                if (items.E['now-chr'].length != 0){
                    crs = items.E['now-chr'][Math.floor(Math.random() * items.E['now-chr'].length)];
                }else{
                    crs = items.E['always'][Math.floor(Math.random() * items.E['always'].length)];
                }
                break;
            case 'F':
                if (items.F['now-chr'].length != 0){
                    crs = items.F['now-chr'][Math.floor(Math.random() * items.F['now-chr'].length)];
                }else{
                    crs = items.F['always'][Math.floor(Math.random() * items.F['always'].length)];
                }
                break;
            case 'G':
                if (items.G['now-chr'].length != 0){
                    crs = items.G['now-chr'][Math.floor(Math.random() * items.G['now-chr'].length)];
                }else{
                    crs = items.G['always'][Math.floor(Math.random() * items.G['always'].length)];
                }
                break;
            default:
                console.error("未知 poolname: ", poolname);
                return null;
        }
        
        rank = crs[2];
        var result = [];
        result.rank = rank;
        result.img = "<div><img src=\"" + crs[0] + "\" style='hight:150px;width:150px' align='absmiddle'/>";
        result.name = crs[1];
        return(result);
    }
    //向action()提交具体的抽卡请求，记录抽卡结果的同时，将抽卡结果呈现在用户界面
    function gacha(poolname, times) {
        $('#loading').css('display', 'block');
        i = 1;
        while (i <= times) {
            rs = modi_action(poolname);
            if (poolname == 'A') {
                AtbMain = "#CAtbMain";
                id = 1;
                gachalog['A']['c'] = gachalog['A']['c'] + 1;
                num = gachalog['A']['c'];
            }else if (poolname == 'B') {
                AtbMain = "#CBtbMain";
                id = 2;
                gachalog['B']['c'] = gachalog['B']['c'] + 1;
                num = gachalog['B']['c'];
            }
            else if (poolname == 'C') {
                AtbMain = "#CCtbMain";
                id = 3;
                gachalog['C']['c'] = gachalog['C']['c'] + 1;
                num = gachalog['C']['c'];
            } 
            else if (poolname == 'D') {
                AtbMain = "#CDtbMain";
                id = 4;
                gachalog['D']['c'] = gachalog['D']['c'] + 1;
                num = gachalog['D']['c'];
            } 
            else if (poolname == 'E') {
                AtbMain = "#CEtbMain";
                id = 5;
                gachalog['E']['c'] = gachalog['E']['c'] + 1;
                num = gachalog['E']['c'];
            } 
            else if (poolname == 'F') {
                AtbMain = "#CFtbMain";
                id = 6;
                gachalog['F']['c'] = gachalog['F']['c'] + 1;
                num = gachalog['F']['c'];
            } 
            else if (poolname == 'G') {
                AtbMain = "#CGtbMain";
                id = 7;
                gachalog['G']['c'] = gachalog['G']['c'] + 1;
                num = gachalog['G']['c'];
            } 

            $(AtbMain).after("<tr><td>" + num + "</td><td>" + rs.rank + "</td><td style='text-align:left'>" + rs.img + " " + rs.name + "</td></tr>");
            $.fn.setValue(id, "without");
            i++;
        }
        $('#loading').css('display', 'none');
    }
    //更新抽卡数据（通过$().setValue提供原生JS调用）
    $.fn.setValue = function(id, option) {
        if (id == 1) {
            poolname = 'A';
        } else if (id == 2) {
            poolname = 'B';
        } else if (id == 3) {
            poolname = 'C';
        }
        else if (id == 4) {
            poolname = 'D';
        }
        else if (id == 5) {
            poolname = 'E';
        }
        else if (id == 6) {
            poolname = 'F';
        }
        else if (id == 7) {
            poolname = 'G';
        }
        
        $("[name='times']").html(gachalog[poolname]['c']);
        $("[name='up']").css('display', 'block');
        //可选，是否刷新UP物品数据
        /*
        if (option != "without") {
            rs = askup(poolname);
            var upr5text = "";
            var upr4text = "";
            for (var r5id in rs.upr5) {
                if (rs.upr5.length > 1) {
                    upr5tag = "<input type='radio' id='" + rs.upr5[r5id] + "radio' name='choice' onclick=\"setpool('" + rs.upr5[r5id] + "');\"> ";
                } else {
                    upr5tag = "";
                }
                upr5text = upr5text + upr5tag + rs.upr5[r5id] + " ";
                gachalog[poolname]['upr5'] = rs.upr5;
            }
            for (var r4id in rs.upr4) {
                upr4text = upr4text + rs.upr4[r4id] + " ";
                gachalog[poolname]['upr4'] = rs.upr4;
            }
            if (rs.upr5.length > 1) {
                if (poolname == 'chr') {
                    upr5text = "(点击单选框选择角色)<br>" + upr5text + "<button id='undo' onclick='' style='display:none'>撤销</button>";
                } else if (poolname == 'arm') {
                    upr5text = "(点击单选框设置定轨)<br>" + upr5text + "<button id='undo' onclick='' style='display:none'>撤销</button><span id='upr5note' style='display:none;color:#FF0000'><br>警告：撤销或修改定轨后会重置记录!</span>";
                }
            }
            $("[name='upr5']").html(upr5text);
            $("[name='upr4']").html(upr4text);
            if (rs.upr5.length > 1 && gachalog[poolname]['choice'] != "") {
                if (poolname == 'arm') {
                    $('#upr5note').css('display', 'inline');
                }
                $('#' + gachalog[poolname]['choice'] + 'radio').attr('checked', true);
                $('#undo').css('display', 'inline');
            }
            if (rs.upr5.length == 0) {
                $("[name='upr5']").html("无UP");
            }
            if (rs.upr4.length == 0) {
                $("[name='upr4']").html("无UP");
            }
            if (rs.upr5.length == 1) {
                $.fn.choice(rs.upr5[0], poolname);
            }
        }*/
    }
    
    //存储设置的UP角色或武器定轨到全局变量（通过$().choice供原生JS调用）
    $.fn.choice = function(name, poolname) {
        if (poolname == 'arm' && gachalog['arm']['choice'] != "") {
            gachalog['arm']['c'] = 0;
            gachalog['arm']['r5c'] = 0;
            gachalog['arm']['r5times'] = 0;
            AR5num = 0;
            AR4num = 0;
            $("#AAtbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $("#AR5tbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $("#AR4tbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $.fn.setValue(2, "without");
        }
        gachalog[poolname]['choice'] = name;
    }
    //单抽
    $("button[name=only]").on('click', function() {
        if ($('#loading').css("display") == "block") {
            return;
        } else if ($('#pool1').css("color") == "#FFFFFF") {
            poolname = 'A';
        }
        else if ($('#pool2').css("color") == "#FFFFFF") {
            poolname = 'B';
        } 
        else if ($('#pool3').css("color") == "#FFFFFF") {
            poolname = 'C';
        } 
        else if ($('#pool4').css("color") == "#FFFFFF") {
            poolname = 'D';
        } 
        else if ($('#pool5').css("color") == "#FFFFFF") {
            poolname = 'E';
        } 
        else if ($('#pool6').css("color") == "#FFFFFF") {
            poolname = 'F';
        } 
        else if ($('#pool7').css("color") == "#FFFFFF") {
            poolname = 'G';
        } 

        gacha(poolname, 1);
    });
    //三连
    $("button[name=three]").on('click', function() {
        if ($('#loading').css("display") == "block") {
            return;
        } else if ($('#pool1').css("color") == "#FFFFFF") {
            poolname = 'A';
        }
        else if ($('#pool2').css("color") == "#FFFFFF") {
            poolname = 'B';
        } 
        else if ($('#pool3').css("color") == "#FFFFFF") {
            poolname = 'C';
        } 
        else if ($('#pool4').css("color") == "#FFFFFF") {
            poolname = 'D';
        } 
        else if ($('#pool5').css("color") == "#FFFFFF") {
            poolname = 'E';
        } 
        else if ($('#pool6').css("color") == "#FFFFFF") {
            poolname = 'F';
        } 
        else if ($('#pool7').css("color") == "#FFFFFF") {
            poolname = 'G';
        } 
        gacha(poolname, 3);
    });
});
