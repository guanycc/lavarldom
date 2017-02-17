<html>
<head>
    <meta charset="utf-8">
    <title>LaravelDom</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/flat-ui/css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="images/favicon.ico">
</head>
<body>
<div class="input-group">
    <span class="input-group-addon">图片</span>
    <input id="input-image" type="text" class="form-control" placeholder="点此选择图片" value="/images/article/snap.png" required data-toggle="modal" data-target="#test"/>
</div>
@include('blade/imagemodal',array('id'=>'input-image','modalname'=>'test','uploadurl'=>'http://127.0.0.1/test/post'))
</body>
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/myjs.js"></script>
</html>