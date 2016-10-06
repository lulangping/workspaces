$(function(){
    
    //注入日期
	var year =  $('form').eq(0).form('year');
    var month = $('form').eq(0).form('month');
    var day = $('form').eq(0).form('day');
    Time(year,month,day);

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
        });
      
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
    
	//离职姓名验证
	$('#depart').form('lizhi_name').bind('focus', function () {
		$('#index .info_leave_name').show();
		$('#index .error_leave_name').hide();
		$('#index .succ_leave_name').hide();	
	}).bind('blur', function () {
		if (trim($(this).value()) == '') {
			$('#index .info_leave_name').hide();
			$('#index .error_leave_name').show();
			$('#index .succ_leave_name').hide();
		} else if (!check_leave_name()) {
			$('#index .error_leave_name').show();
			$('#index .info_leave_name').hide();
			$('#index .succ_leave_name').hide();
		} else {
			$('#index .succ_leave_name').show();
			$('#index .error_leave_name').hide();
			$('#index .info_leave_name').hide();
		}
	});
	
	function check_leave_name() {
		if (/^[\u4e00-\u9fa5]{0,5}$/.test(trim($('#depart').form('lizhi_name').value()))) 
			return true;
	}
	//离职去向验证
		$('#depart').form('lizhiFateOfLeaving').bind('focus', function () {
		//alert($('#index .info_leave_id').html());
		$('#index .info_leave_rediction').show();
		$('#index .error_leave_rediction').hide();
		$('#index .succ_leave_rediction').hide();
	}).bind('blur', function () {
		if (trim($(this).value()) == '') {
			$('#index .info_leave_rediction').hide();
			$('#index .error_leave_rediction').show();
			$('#index .succ_leave_rediction').hide();
		} else if (!check_leave_rediction()) {
			$('#index .error_leave_rediction').show();
			$('#index .info_leave_rediction').hide();
			$('#index .succ_leave_rediction').hide();
		} else {
			$('#index .succ_leave_rediction').show();
			$('#index .error_leave_rediction').hide();
			$('#index .info_leave_rediction').hide();
		}
	});
	
	function check_leave_rediction() {
		if (/^[\u4e00-\u9fa5]{0,10}$/.test(trim($('#depart').form('lizhiFateOfLeaving').value())))	
			return true;
	}
    

//离职提交验证：
   $('#depart').form('sub').click(function () {             
    var flag = true;  
    if (!check_leave_name()||trim($('#depart').form('lizhi_name').value()) == '') {
        $('#index .error_leave_name').show();
        flag = false;
    }    
    if (!check_leave_rediction()||trim($('#depart').form('lizhiFateOfLeaving').value()) == '') {
       $('#index .error_leave_rediction').show();
       flag = false;
    }
    if (trim($('#depart').form('year').value()) == '0'||trim($('#depart').form('month').value()) == '0'||trim($('#depart').form('day').value()) == '0') {
      $('#index .error_leave_time').show();
      flag = false;
    }
        if (flag) {
        /*
    	var name = $('#depart').form("lizhi_name").value();
    	var Type = $('#depart').form("lizhiType").value();
    	var Fate = $('#depart').form("lizhiFateOfLeaving").value();
        var radio = $('#depart').form("radiobutton").value();
        var radio = $('#depart').form("radiobutton").value();            
    	var createdDate = year + "-" + month + "-" + day;
    	var param = {name:name,type:type,phoneNumber:phoneNumber,fax:fax,descripe:descripe,highterDepartment:highterDepartment};
    	$$.ajax({
			type:"post",
			url:"http://localhost:8080/DLNUHrSystem/department/createDepartment.do",
			data:param,
			success:function(data){
			},
			error:function(){
				liMessage.tip("出现异常,请重试!");
			}

		});
		*/
    }
 });
    
    
});




