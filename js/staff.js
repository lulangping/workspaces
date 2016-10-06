var $$  = jQuery;

$(function(){    
       
///初始化表单
 $('form').first().reset();
 //姓名验证
    var formId = document.getElementById('insertStaff') ? document.getElementById('insertStaff'):document.getElementById('staffUpdate');
    $(formId).form('name').bind('focus', function () {
    $('#index .info_use').show();
    $('#index .error_use').hide();
    $('#index .succ_use').hide();
  }).bind('blur', function () { 
   if (trim($(this).value()) == '') {
      $('#index .info_use').hide();
      $('#index .error_use').show();
      $('#index .succ_use').hide();
    } 
    else if (!check_name()) { 
      $('#index .error_use').show();
      $('#index .info_use').hide();
      $('#index .succ_use').hide();
    } else {
       
      $('#index .succ_use').show();
      $('#index .error_use').hide();
      $('#index .info_use').hide();
    }
  });
  function check_name() {
     if (/.{2,20}/.test(trim(   $(formId).form('name').value()))) 
      return true;
  }

 //验证身份证号
    $(formId).form('idNumber').bind('focus', function () {
       
    $('#index .info_idCard').show();
    $('#index .error_idCard').hide();
    $('#index .succ_idCard').hide();
  }).bind('blur', function () {     
    if (trim($(this).value()) == '') {
      $('#index .info_idCard').hide();
      $('#index .error_idCard').show();
      $('#index .succ_idCard').hide();
    } else if (!check_idNumber()) {
     
      $('#index .error_idCard').show();
      $('#index .info_idCard').hide();
      $('#index .succ_idCard').hide();
    } else {
       
      $('#index .succ_idCard').show();
      $('#index .error_idCard').hide();
      $('#index .info_idCard').hide();
    }
  });
 function check_idNumber() {
     if  (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(trim(   $(formId).form('idNumber').value())))
      return true;
  }


//验证电话
    $(formId).form('phone').bind('focus', function () {
     
    $('#index .info_phone').show();
    $('#index .error_phone').hide();
    $('#index .succ_phone').hide();
  }).bind('blur', function () {    
    if (trim($(this).value()) == '') {    
      $('#index .info_phone').hide();
      $('#index .error_phone').show();
      $('#index .succ_phone').hide();
    } else if (!check_phone()) {
     
      $('#index .error_phone').show();
      $('#index .info_phone').hide();
      $('#index .succ_phone').hide();
    } else {
       
      $('#index .succ_phone').show();
      $('#index .error_phone').hide();
      $('#index .info_phone').hide();
    }
  });
 function check_phone() {
    if (/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/.test(trim(   $(formId).form('phone').value())))
       return true;
  }

//验证身高
   $(formId).form('height').bind('focus', function () {
    
    $('#index .info_height').show();
    $('#index .error_height').hide();
    $('#index .succ_height').hide();
  }).bind('blur', function () {
     
    if (trim($(this).value()) == '') {
      
      $('#index .info_height').hide();
      $('#index .error_height').show();
      $('#index .succ_height').hide();
    } else if (!check_height()) {
     
      $('#index .error_height').show();
      $('#index .info_height').hide();
      $('#index .succ_height').hide();
    } else { 
      $('#index .succ_height').show();
      $('#index .error_height').hide();
      $('#index .info_height').hide();
    }
  });
 function check_height() {
    if  (!/^[1-9]\d{0,1}$/.test(trim($(formId).form('height').value())))
    return true;
  }

//电子邮件
     $(formId).form('email').bind('focus', function () {
  
    //补全界面
    if ($(this).value().indexOf('@') == -1) $('#index .all_email').show();
  
    $('#index .info_email').show();
    $('#index .error_email').hide();
    $('#index .succ_email').hide();
  }).bind('blur', function () {
  
    //补全界面
    $('#index .all_email').hide();
  
    if (trim($(this).value()) == '') {
      $('#index .info_email').hide();
    } else if (check_email()) {
      $('#index .info_email').hide();
      $('#index .error_email').hide();
      $('#index .succ_email').show();
    } else {
      $('#index .info_email').hide();
      $('#index .error_email').show();
      $('#index .succ_email').hide();
    }
  });
  
  function check_email() {
    if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim(   $(formId).form('email').value()))) return true;
  }

  
  //电子邮件补全系统键入
     $(formId).form('email').bind('keyup', function (event) {
    if ($(this).value().indexOf('@') == -1) {
      $('#index .all_email').show();
      $('#index .all_email li span').html($(this).value());
    } else {
      $('#index .all_email').hide();
    }
    
    $('#index .all_email li').css('background', 'none');
    $('#index .all_email li').css('color', '#666');
    
      
      
    if (event.keyCode == 40) {
      
      if (this.index == undefined || this.index >= $('#index .all_email li').length() - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      $('#index .all_email li').eq(this.index).css('background', '#e5edf2');
      $('#index .all_email li').eq(this.index).css('color', '#369');
    }
    
    if (event.keyCode == 38) {
      if (this.index == undefined || this.index <= 0) {
        this.index = $('#index .all_email li').length() - 1;
      } else {
        this.index--;
      }
      $('#index .all_email li').eq(this.index).css('background', '#e5edf2');
      $('#index .all_email li').eq(this.index).css('color', '#369');
    }   
   
    if (event.keyCode == 13) {
     // alert($(this).value($('#index .all_email li')));
      $(this).value($('#index .all_email li').eq(this.index).text());
      $('#index .all_email').hide();
      this.index = undefined;
    }
    
  });
  
  //电子邮件补全系统点击获取
  $('#index .all_email li').bind('mousedown', function () {
       $(formId).form('email').value($(this).text());
  });
  
  //电子邮件补全系统鼠标移入移出效果
  $('#index .all_email li').hover(function () {
    $(this).css('background', '#e5edf2');
    $(this).css('color', '#369');
  }, function () {
    $(this).css('background', 'none');
    $(this).css('color', '#666');
  });



//验证毕业院校
   $(formId).form('gradutedUniversity').bind('focus', function () {
   
     $('#index .error_school').hide();
  }).bind('blur', function () {
     
    if (trim($(this).value()) == '') {  
      $('#index .error_school').show();  
    } 
    else { 
      $('#index .error_school').hide();
      
    }
  });
  
  //验证专业
   $(formId).form('majorInScience').bind('focus', function () {
   
     $('#index .error_major').hide();
  }).bind('blur', function () {
     
    if (trim($(this).value()) == '') { 
      $('#index .error_major').show();  
    } 
    else { 
      $('#index .error_major').hide();
      
    }
  });

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

      var year = $(formId).form('bir_year');
      var month = $(formId).form('bir_month');
      var day = $(formId).form('bir_day');
      Time(year,month,day);

      var year = $(formId).form('en_year');
      var month = $(formId).form('en_month');
      var day = $(formId).form('en_day');
      Time(year,month,day);

      var year =  $(formId).form('gra_year');
      var month =  $(formId).form('gra_month');
      var day = $(formId).form('gra_day');
      Time(year,month,day);

    
//提交验证
       $(formId).form('sub').click(function () {   
    var flag = true;
    
    if (!check_name()||trim($(formId).form('name').value()) == '') {
      $('#index .error_use').show();
      flag = false;
    }
     if (trim($(formId).form('sex').value()) == '0') {
      $('#index .error_sex').show();
      flag = false;
    }
    if (trim($(formId).form('bir_year').value()) == '0'||trim(   $(formId).form('bir_month').value()) == '0'||trim(   $(formId).form('bir_day').value()) == '0') {
      $('#index .error_birthDat').show();
      flag = false;
    }

   if (!check_idNumber()||trim($(formId).form('idNumber').value()) == '') {
      $('#index .error_idCard').show();
      flag = false;
    }
     if (trim($(formId).form('en_year').value()) == '0'||trim($(formId).form('en_month').value()) == '0'||trim(   $(formId).form('en_day').value()) == '0') {
      $('#index .error_entryDate').show();
      flag = false;
    }
      if (trim($(formId).form('employmentForm').value()) == '0') {
      $('#index .error_employmentForm').show();
      flag = false;
    }
    if (trim($(formId).form('comFrom').value()) == '0') {
      $('#index .error_comFrom').show();
      flag = false;
    }
    if (trim(   $(formId).form('politicalLandscape').value()) == '0') {
      $('#index .politicalLandscape').show();
      flag = false;
    }
    if (trim($(formId).form('nation').value()) == '0') {
      $('#index .error_nation').show();
      flag = false;
    }
    if (trim($(formId).form('pro').value()) == '0'||trim($(formId).form('city').value()) == '0') {
      $('#index .error_placeOfOrigin').show();
      flag = false;
    }

    if (!check_phone()||trim($(formId).form('phone').value()) == '') {
      $('#index .error_phone').show();
      flag = false;
    }
    
    if (!check_email()||trim($(formId).form('email').value()) == '') {
      $('#index .error_email').show();
      flag = false;
    }
    
    if (!check_height()||trim($(formId).form('height').value()) == '') {
      $('#index .error_height').show();
      flag = false;
    }
     if (trim($(formId).form('bloodType').value()) == '0') {
      $('#index .error_bloodType').show();
      flag = false;
    }
     if (trim($(formId).form('maritalStatus').value()) == '0') {
      $('#index .error_maritalStatus').show();
      flag = false;
    } 
          
     if (trim($(formId).form('name_department').value()) == '0') {
      $('#index .error_entryUnit').show();
      flag = false;
    }
     if (trim($(formId).form('name_post').value()) == '0') {
      $('#index .error_entryPost').show();
      flag = false;
    }    
    if (trim($(formId).form('gradutedUniversity').value()) == '') {
      $('#index .error_school').show();
      flag = false;
    }
     if (trim($(formId).form('highestMaster').value()) == '0') {
      $('#index .error_highestMaster').show();
      flag = false;
    }
    if (trim($(formId).form('majorInScience').value()) == '') {
       $('#index .error_major').show();
      flag = false;
    } 
     if (trim($(formId).form('gra_year').value()) == '0'||trim($(formId).form('gra_month').value()) == '0'||trim($(formId).form('gra_day').value()) == '0') {
      $('#index .error_graduationDate').show();
      flag = false;
    }

    if (flag) {
    	alert('正在提交数据.......(模拟，请退出)');
      /*var _this = this;
      $('#loading').show().center(200, 40);
      $('#loading p').html('正在提交注册中...');
      
      _this.disabled = true;
      $(_this).css('backgroundPosition', 'right');
      ajax({
        method : 'post',
        url : 'add.php',
        data :    $(formId).serialize(),
        success : function (text) {
          if (text == 1) {
            $('#loading').hide();
            $('#success').show().center(200, 40);
            $('#success p').html('注册成功，请登录...');
            setTimeout(function () {
              $('#success').hide();
              reg.hide();
              $('#reg .succ').hide();
                 $(formId).first().reset();
              _this.disabled = false;
              $(_this).css('backgroundPosition', 'left');
              screen.animate({
                attr : 'o',
                target : 0,
                t : 30,
                step : 10,
                fn : function () {
                  screen.unlock();
                }
              });
            }, 1500);
          }
        },
        async : true
      });
*/
    }
    
  });

    
 });       


 
