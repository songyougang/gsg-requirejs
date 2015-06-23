define([
        'jquery',
        'underscore',
        'bootstrap',
        'bootstrap-table'
    ],
    function($, _) {
        "use strict";

        var hostTable = $('#hostTable').bootstrapTable({
            method : 'get',
            //url : ctx + "flow/mng/table/bootstrap/data",
            cache : false,
            height : $(window).height() - 280,
            striped : true,
            pagination : true,
            sidePagination : "server",
            pageSize : 10,
            pageList : [ 10, 20, 30, 50, 100 ],
            columns : [
                {field : 'state',checkbox:true},
                {field:'flowId',title:'主机名',align:'left',width:300},
                {field:'appName',title:'IP',align:'left',width:300},
                {field:'flowName',title:'机架名',align:'left',width:300},
                {field:'appId',title:'状态',align:'left',width:300}
                //{field:'isSave',title:'是否保存',align:'center',formatter:function(value, row, index){
                //    return row.isSave == "1" ? "是" : "否";
                //}}
            ]
        });

        $(function(){
            $('#search').click(function(){
               alert('搜索');
            });

            $('#next').click(function(){
               alert("下一步");
            });

            $('#back').click(function(){
               alert('上一步');
            });

        });

    });