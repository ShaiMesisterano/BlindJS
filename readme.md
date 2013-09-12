<h1>BlindJS - TYPE in gibberish, DISPLAY pre-defined code</h1>
BlindJS is a Javascritp library that replaces textbox content with pre-defined in your webpages.

<h2>Quick install</h2>

Include the javascript before <pre>&lt;/body&gt;</pre>:

Create a wrapper and insert your code:

<pre>
&lt;div id="myDiv"&gt;
    function func(){
        alert("Super Awesome!");
    }
&lt;/div&gt;
</pre>

Add textarea placeholder:

<pre>
&lt;textarea id="myTextarea"&gt;
&lt;/textarea&gt;
</pre>

Start BlindJS:

<pre>
BlindJS.start("myDiv", "myTextarea");
</pre>

<h2>About</h2>

BlindJS is created by <a href="http://www.mcterano.com/blog" title="Shai Mesisterano">Shai Mesisterano</a> and is licensed under <a href="https://raw.github.com/ShaiMesisterano/BlindJS/master/LICENSE" title="MIT LICENSE">MIT</a>.