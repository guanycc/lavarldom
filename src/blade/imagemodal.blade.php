<!--START图片选择模态框START-->
<div class="modal fade" id="{{$modalname}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:600px;">
        <div class="modal-content">
            <div class="modal-header">
                <button id="close-{{$modalname}}" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <span class="modal-title" id="myModalLabel">选择图片</span>
            </div>
            <div class="modal-body">
                <div>
                    <center><img id="image-{{$modalname}}" src="/images/article/snap.png" style="height:320px;width:560px"/></center>
                    <script>
                        (function() {
                            function close(response){
                                if(response.result){
                                    $MyJS.Dom("{{$id}}").node.value=response.url;
                                }
                                else{
                                    alert(response.message);
                                }
                                $MyJS.Evn.DoClick("close-{{$modalname}}");
                            }
                            function upload(){
                                $MyJS.File.UP("file-{{$modalname}}","{{$uploadurl}}",close);
                            }
                            window.onload=function(){
                                $MyJS.Evn.ComClick("button-{{$modalname}}","file-{{$modalname}}");
                                $MyJS.File.IMG("file-{{$modalname}}","image-{{$modalname}}");
                                $MyJS.Evn.Click("button-success-{{$modalname}}",upload);
                            }
                        })();
                    </script>
                </div>
                <br>
                <div style="text-align:right;">
                    <input type="file" accept="image/*" id="file-{{$modalname}}" style="display:none"></input>
                    <button type="button" class="btn btn-info msr" id="button-{{$modalname}}"><span class="fui-folder"></span> 打开文件夹</button>
                    <button type="button" class="btn btn-primary msr" id="button-success-{{$modalname}}">确认上传</button>
                    <button type="button" class="btn btn-inverse msr" data-dismiss="modal">取消</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--END图片选择模态框END-->