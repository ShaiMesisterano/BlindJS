<img src="logo.png" alt="BlindJS Logo" />
<h2 style="text-transform: uppercase">The no code mistakes tool for presenters</h2>
<p>BlindJS is an extremely useful tool for <u>lectures, lessons and presentations</u>.<br/>
        It allows you to write code samples quickly and without any chance for mistakes.<br/>
        BlindJS is a Javascript library that replaces <u>content</u> with <u>pre-defined code</u> in your code
        editor or web page.</p>
        <h2>How To Use BlindJS In VSCode?</h2>
        Watch a 1:30 video: <a href="https://www.youtube.com/zoC78I4eF4o">https://www.youtube.com/zoC78I4eF4o</a>
<h2>How To Use BlindJS In The Browser?</h2>
            <ol>
                <li>Include <code>lib/blind.min.js</code> before <code>&lt;/body&gt;</code></li>
                <li>Create a wrapper and insert your code:
                    <pre>
    &lt;div id="divElement"&gt;
        function func(){
            alert("Super Awesome!");
        }
    &lt;/div&gt;
                    </pre>
                </li>
                <li>Add textarea placeholder:
                    <pre>
    &lt;textarea id="textareaElement"&gt;
    &lt;/textarea&gt;
                    </pre>
                </li>
                <li>Start BlindJS with reference to an input text &and; output element:
                    <pre>
    BlindJS.start({
    input: divElement.innerText,
    output: textareaElement
    });
                    </pre>
                </li>
            </ol>
            <h2>About</h2>
                <p class="lead">
                    BlindJS was created by <a href="http://www.mcterano.com/blog" title="Shai Mesisterano">Shai Mesisterano</a>
                    and is licensed under <a href="https://raw.github.com/ShaiMesisterano/BlindJS/master/LICENSE"
                                             title="MIT LICENSE">MIT</a>.
                </p>
