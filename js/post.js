$(function() {

  //post表单验证
  $('form').first().reset();

  $('form').form('name_post').bind('focus', function () {
    $('#index .info_edit_pName').show();
    $('#index .error_edit_pName').hide();
    $('#index .succ_edit_pName').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_edit_pName').hide();
      $('#index .error_edit_pName').show();
      $('#index .succ_edit_pName').hide();
    } else if (!check_edit_pName()) {
      $('#index .error_edit_pName').show();
      $('#index .info_edit_pName').hide();
      $('#index .succ_edit_pName').hide();
    } else {
      $('#index .succ_edit_pName').show();
      $('#index .error_edit_pName').hide();
      $('#index .info_edit_pName').hide();
    }
  });
  
function check_edit_pName() {  
    if (/^[\u4e00-\u9fa5]{0,10}$/.test(trim($('form').form('name_post').value())))return true;
  }


$('form').form('num_post').bind('focus', function () {
    $('#index .info_edit_pNum').show();
    $('#index .error_edit_pNum').hide();
    $('#index .succ_edit_pNum').hide();
  }).bind('blur', function () {
    if (trim($(this).value()) == '') {
      $('#index .info_edit_pNum').hide();
      $('#index .error_edit_pNum').show();
      $('#index .succ_edit_pNum').hide();
    } else if (!check_edit_pNum()) {
      $('#index .error_edit_pNum').show();
      $('#index .info_edit_pNum').hide();
      $('#index .succ_edit_pNum').hide();
    } else {
      $('#index .succ_edit_pNum').show();
      $('#index .error_edit_pNum').hide();
      $('#index .info_edit_pNum').hide();
    }
  });
  

  function check_edit_pNum() {  
    if (/^[0-9]{0,5}$/.test(trim($('form').form('num_post').value())))return true;
}

  
 
  //提交岗位表单
  $('form').form('sub').click(function () {
    var flag = true;
    
    if (!check_edit_pName()||trim($('form').form('name_post').value())=='') {
      $('#index .error_edit_pName').show();
      flag = false;
    }
    
    if (!check_edit_pNum()||trim($('form').form('num_post').value())=='') {
      $('#index .error_edit_pNum').show();
      flag = false;
    }
  
    if (flag) {
      alert("正在提交数据.....");
    }
  });

});