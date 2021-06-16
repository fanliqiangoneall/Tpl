<?php if (!defined('THINK_PATH')) exit();?><script type="text/javascript" src="__TMPL__demo2/js/jquery.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/jquery.autocomplete.min.js"></script>
<link rel="Stylesheet" href="__TMPL__demo2/js/jquery.autocomplete.css" />

<script>
        $(function() {
            //var data = "Core Selectors Attributes Traversing Manipulation CSS Events Effects Ajax Utilities".split(" ");

            $('#autocomp').autocomplete(<?php echo U('/','','').'autocomplete';?>).result(function(event, data, formatted) {
                alert(data);
            });
        });
</script>
<input type="text" id="autocomp" />