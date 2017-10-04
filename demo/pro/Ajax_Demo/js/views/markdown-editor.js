var editor = CodeMirror.fromTextArea(codemirror, {
  mode: 'markdown',
  lineNumbers: true,
  theme: "default",
  extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
}).setSize("100%",700);    
