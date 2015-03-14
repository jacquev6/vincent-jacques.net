---
github_name: MiniParse
---

MiniParse
=========

<form id="form">
<label for="grammar">EBNF Grammar:</label><br>
<textarea name="grammar" id="grammar" style="width:50em;height:15em">
expr = term, { ( '+' | '-' ) , term };

term = { factor, ( '*' | '/' ) }, factor;

factor = integer | '(', expr, ')';

integer = [ '-' ], digit, { digit };

digit = '0' | '1' | '...' | '9' | 'A' | '...' | 'F';
</textarea><br>
<input id="update" type="button" value="Update"/></form>

<img id="draw" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="A grammar"/><span id="error">No error</span>

<script type="text/javascript" >
    $("#draw").error(
        function(eventObject) {
            // @todo Retrieve the data returned with the 400 error and use it to tell where the syntax error is.
            $("#draw").hide();
            $("#error").html('There is a syntax error somewhere but I\'m not yet able to tell you where... You may want to see <a href="' + $("#draw").attr("src") + '">the raw error</a>.');
            $("#error").show();
        }
    );

    $("#draw").load(
        function(eventObject) {
            $("#draw").show();
            $("#error").hide();
        }
    );

    function updateImage() {
        $("#draw").hide();
        $("#error").hide();
        $("#draw").attr("src", "http://dyn.vincent-jacques.net/miniparse/draw?" + $("#form").serialize());
        return true;
    }
    $("#update").click(updateImage);

    updateImage();
</script>
