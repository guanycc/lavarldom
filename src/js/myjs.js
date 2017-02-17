var $MyJS = {
    Number: {
        intToStr: function(num, len) {
            //整形变量转换为指定位数的串，不足高位补0
            if (num > (len * 10)) {
                return num.toString();
            } else {
                var cx = 0;
                var temp = num;
                while (temp > 0) {
                    temp = parseInt(temp / 10);
                    cx++;
                }
                for (var i = 0; i < (len - cx); i++) {
                    num = '0' + num;
                }
                return num;
            }
        },
        floatToStr: function(num, floatlen) {
            //浮点变量转换为指定小数位的串
            var intNum = parseInt(num);
            var floatNum = parseInt(num * Math.pow(10, floatlen)) - (intNum * Math.pow(10, floatlen));
            return intNum + "." + floatNum;
        }
    },
    String: {
        base64: function(base64Str) {
            this.type = "jpg";
            this.date = "abcdefg";
            return this;
        }
    },
    Time: {
        phpToDate: function(stamp) {
            //时间戳装日期
            var newDate = new Date();
            newDate.setTime(stamp * 1000);
            return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
        },
        dateToPhp: function(str) {
            //日期转时间戳
            str = str.split('-');
            var newDate = new Date();
            newDate.setFullYear(parseInt(str[0]));
            newDate.setMonth(parseInt(str[1]));
            newDate.setDate(parseInt(str[2]));
            return Date.parse(newDate) / 1000;
        }
    },
    Array:{
        arrayToJson:function(array){
            var key;
            for(key in array){
                jsonstring+="\""+key+"\":"+"\""+array[key]+"\","
            }
            jsonstring=jsonstring.substring(0,jsonstring.length-1);
            jsonstring+="}";
            return JSON.parse(jsonstring);
        }
    },
    Post:{
        init:function(url,data){
            //创建用于发送POST请求的对象
            return new this.obj(url,data);
        },
        obj:function(url,postdata){
            //提供用于发送POST请求的对象
            var postflag=true;
            var s_evn=function(){}
            var f_evn=function(){}
            var _this=this;
            this.send=function(){
                postflag=false;
                $.ajax({url:url,type:"post",data:postdata,dataType:"json",success:function(data){postflag=true;s_evn(data);},error:function(){postflag=true;f_evn()}});
                return _this;    
            }
            this.success=function(func){s_evn=func;return _this;}
            this.error=function(func){f_evn=func;return _this;}
            return _this;
        }
    },
    Input:{
        get:function(domid){
            return document.getElementById(domid).value;
        },
        gets:function(domidlist){
            var values={};
            var valuelist=new Array();
            var key;
            for(key in domidlist){
                var domid=domidlist[key];
                valuelist[domid]=this.get(domid);
            }
            return valuelist;
        },
        fgets:function(domidlist,taglist){
            var values={};
            var valuelist=new Array();
            var key;
            for(key in domidlist){
                var domid=domidlist[key];
                var tagname=taglist[key];
                valuelist[tagname]=this.get(domid);
            }
            return valuelist;
        },
        clean:function(domid){
            document.getElementById(domid).value="";
        },
        cleans:function(domidlist){
            var key;
            for(key in domidlist){
                var domid=domidlist[key];
                this.clean(domid);
            }
        },
        set:function(domid,value){
            document.getElementById(domid).value=value;
        },
        sets:function(domidlist,valuelist){
            for(key in domidlist){
                var domid=domidlist[key];
                var value=valuelist[key];
                this.set(domid,value);
            }
        }
    },
    Dom:function(domid){
        var dom=document.getElementById(domid);
        this.sethtml=function(str){
            dom.innerHTML=str;
        }
        this.appendhtnl=function(str){
            dom.innerHTML+=str;
        }
        this.hide=function(){
            dom.style.display="none";
        }
        this.node=dom;
        return this;
    },
    File:{
        IMG:function(domid,tagid){
            var filedom=document.getElementById(domid);
            var imgdom=document.getElementById(tagid);
            var imgfunc=null;
            filedom.onchange=function(){
                var file=filedom.files[0];
                if(!/image\/\w+/.test(file.type)){ 
                    console.log("image file error");return;
                }
                var reader=new FileReader();
                reader.onload=function(){
                    imgdom.src=reader.result;
                }
                reader.readAsDataURL(file);
            }
        },
        UP:function(domid,url,success){
            var filedom=document.getElementById(domid);
            var formData=new FormData();
            var request = new XMLHttpRequest();
            formData.append('image',filedom.files[0]);
            request.open("post", url, true);
            request.onload = function(data) {
                if (request.readyState == 4 && request.status == 200) {
                    var response = JSON.parse(request.responseText);
                    success(response);
                } 
                else { alert("请求失败"); }
            }
            request.onerror = function() { alert("请求失败"); }
            request.send(formData);
        }
    },
    Evn:{
        ComClick:function(domid,tagid){
            var evndom=document.getElementById(domid);
            var tagdom=document.getElementById(tagid);
            evndom.onclick=function(){
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                tagdom.dispatchEvent(e);
            }
        },
        DoClick:function(domid){
            var evndom=document.getElementById(domid);
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            evndom.dispatchEvent(e);
        },
        Click:function(domid,func){
            var evndom=document.getElementById(domid);
            evndom.onclick=function(){
                func();
            }
        }
    }
}