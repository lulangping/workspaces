//var $$ = jQuery;

$(function(){

    //unit表单验证
    //alert('scxs');
    $('form').first().reset();
    var formId = document.getElementById('unitAdd') ? document.getElementById('unitAdd'):document.getElementById('unitUpdate');
    //$(formId).form('unit_name').value('bbb');
    //部门名称验证
    $(formId).form('unit_name').bind('focus', function () {
    $('#index .info_unitname').show();
    $('#index .error_unitname').hide();
    $('#index .succ_unitname').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_unitname').hide();
      $('#index .error_unitname').show();
      $('#index .succ_unitname').hide();
    } else if (!check_unit_name()) {
      $('#index .error_unitname').show();
      $('#index .info_unitname').hide();
      $('#index .succ_unitname').hide();
    } else {
      $('#index .succ_unitname').show();
      $('#index .error_unitname').hide();
      $('#index .info_unitname').hide();
    }
  });
  
  function check_unit_name() {
    if (/.{2,20}/.test(trim($(formId).form('unit_name').value()))) return true;
  }

  //电话号码验证
  // $(formId).form('unit_telenum').value('111');
    $(formId).form('unit_telenum').bind('focus', function () {
    $('#index .info_unitTelnum').show();
    $('#index .error_unitTelnum').hide();
    $('#index .succ_unitTelnum').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_unitTelnum').hide();
      $('#index .error_unitTelnum').show();
      $('#index .succ_unitTelnum').hide();
    } else if (!check_unit_telenum()) {
      $('#index .error_unitTelnum').show();
      $('#index .info_unitTelnum').hide();
      $('#index .succ_unitTelnum').hide();
    } else {
      $('#index .succ_unitTelnum').show();
      $('#index .error_unitTelnum').hide();
      $('#index .info_unitTelnum').hide();
    }
  });
  function check_unit_telenum(){
     //国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)"
   // return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
    if (/^([0\+]\d{2}\d{8})$|^([0\+]\d{3}\d{7})$/.test(trim($(formId).form('unit_telenum').value()))) return true;
  }

   //部门传真验证
  // $(formId).form('unit_fax').value('111');
    $(formId).form('unit_fax').bind('focus', function () {
    $('#index .info_unitfax').show();
    $('#index .error_unitfax').hide();
    $('#index .succ_unitfax').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_unitfax').hide();
      $('#index .error_unitfax').show();
      $('#index .succ_unitfax').hide();
    } else if (!check_unit_fax()) {
      $('#index .error_unitfax').show();
      $('#index .info_unitfax').hide();
      $('#index .succ_unitfax').hide();
    } else {
      $('#index .succ_unitfax').show();
      $('#index .error_unitfax').hide();
      $('#index .info_unitfax').hide();
    }
  });
      function check_unit_fax(){
    //国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)"
   // return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
    if (/^([0\+]\d{2}\d{8})$|^([0\+]\d{3}\d{7})$/.test(trim($(formId).form('unit_fax').value()))) return true;
  }

  //验证上级部门
   $(formId).form('unit_super').bind('focus', function () {
    $('#index .info_unitsuper').show();
    $('#index .error_unitsuper').hide();
    $('#index .succ_unitsuper').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_unitsuper').hide();
      $('#index .error_unitsuper').show();
      $('#index .succ_unitsuper').hide();
    } else if (!check_unit_super()) {
      $('#index .error_unitsuper').show();
      $('#index .info_unitsuper').hide();
      $('#index .succ_unitsuper').hide();
    } else {
      $('#index .succ_unitsuper').show();
      $('#index .error_unitsuper').hide();
      $('#index .info_unitsuper').hide();
    }
  });
   function check_unit_super() {
    if (/[\d]{3,6}/.test(trim($(formId).form('unit_super').value()))) return true;
  }

  //注入年、月、日函数
      function Time(year,month,day){
        var day30 = [4, 6, 9, 11];
        var day31 = [1, 3, 5, 7, 8, 10, 12];
        //注入年
        for (var i = 1980; i <= 2016; i ++) {
          year.first().add(new Option(i, i), undefined);
        }
        
        //注入月
        for (var i = 1; i <= 12; i ++) {
          month.first().add(new Option(i, i), undefined);
        }
      
        year.bind('change', select_day);
        month.bind('change', select_day);
        day.bind('change', function () {
            if (check_birthday())
              $('#reg .error_birthday').hide();
        });
      
        function check_birthday() {
        if (year.value() != 0 && month.value() != 0 && day.value() != 0) return true;
        }
      
        function select_day() {
        if (year.value() != 0 && month.value() != 0) {
          
          //清理之前的注入
          day.first().options.length = 1;
          
          //不确定的日
          var cur_day = 0;
          
          //注入日
          if (inArray(day31, parseInt(month.value()))) {
            cur_day = 31;
          } else if (inArray(day30, parseInt(month.value()))) {
            cur_day = 30;
          } else {
            if ((parseInt(year.value()) % 4 == 0 && parseInt(year.value()) % 100 != 0) || parseInt(year.value()) % 400 == 0) {
              cur_day = 29;
            } else {
              cur_day = 28;
            }
          }
          
          for (var i = 1; i <= cur_day; i ++) {
            day.first().add(new Option(i, i), undefined);
          }
          
        } else {
          //清理之前的注入
          day.first().options.length = 1;
        }
      }
  }

    var year = $(formId).form('year');
    var month = $(formId).form('month');
    var day = $(formId).form('day');
    Time(year,month,day);


  //验证日期
  function check_datetime() {
    if (year.value() != 0 && month.value() != 0 && day.value() != 0) return true;
  }

  function check_datetime() {
    if (year.value() != 0 && month.value() != 0 && day.value() != 0) return true;
  }
    
    
    
    
  //提交部门表单
  $(formId).form('sub').click(function () {
    var flag = true;
     if (!check_unit_name()) {
      $('#index .error_unitname').show();
      flag = false;
    }
    
    if (!check_unit_telenum()) {
      $('#index .error_unitTelnum').show();
      flag = false;
    }
    
    if (!check_unit_fax()) {
      $('#index .error_unitfax').show();
      flag = false;
    }
    
    if (!check_unit_super()) {
      $('#index .error_unitsuper').show();
      flag = false;
    }
    if (!check_datetime()) {
      $('#index .error_datetime').show();
      flag = false;
    }
  
    if (flag) {
     // $(formId).first().submit();
      alert("正在提交数据.....");
    }
  });



    
    
    
 /*8//点击表格出现函数
        function fenye(){
        //分页
        var $$table = $$('table');
        var currentPage = 0;
        var pageSize = 16;
           $$table.bind('paging',function(){
           $$table.find('tbody tr').hide().slice(currentPage*pageSize,(currentPage+1)*pageSize).show();

           });
        var sumRows = $$table.find('tbody tr').length;
        var sumPages = Math.ceil(sumRows/pageSize);
        var $$pager = $$('<div class="page"></div>');
        for(var pageIndex=0;pageIndex<sumPages;pageIndex++){
            $$('<a href="#"><span>第'+(pageIndex+1)+'页</span></a>').bind('click',{'newPage':pageIndex},function(event){
              currentPage = event.data['newPage'];
              $$table.trigger('paging');
            }).appendTo($$pager);
            $$pager.append(' ');
          }
        $$pager.insertAfter($$table);
        $$table.trigger('paging');
         /*   $('#table1').css('display','none');
             $$pager.css('display','none');
          $(formId).form('submit').click(function(){
             $('#table1').css('display','block');
             $$pager.css('display','block');
        }); 
        }  

     if($('#1').html() == 32 ||$('#1').html() == 33||$('#1').html() == 34 ||$('#1').html() == 333){
        fenye();    
     }*/

});