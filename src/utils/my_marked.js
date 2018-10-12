import marked, { Renderer } from 'marked';
import highlightjs from 'highlight.js';

// Create your custom renderer.
const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

// 解决marked id属性不能包含中文的问题
renderer.heading = (text, level, raw) => {
  const id = raw.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-');
  return `<h${level} id=${id}>${text}</h${level}>\n`;
};

// Set the renderer to marked.
marked.setOptions({
  renderer
});

export default marked;