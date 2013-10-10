<h1>BlindJS</h1>
<h2>Don't look at what you're typing, BlindJS will display your pre-defined code.</h2>
BlindJS is a Javascript library that replaces textarea content with pre-defined code in your web pages.

<h3>Quick install</h3>

Include the Javascript code before <pre>&lt;/body&gt;</pre>:

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

<h3>About</h3>

BlindJS is created by <a href="http://www.mcterano.com/blog" title="Shai Mesisterano">Shai Mesisterano</a> and is licensed under <a href="https://raw.github.com/ShaiMesisterano/BlindJS/master/LICENSE" title="MIT LICENSE">MIT</a>.