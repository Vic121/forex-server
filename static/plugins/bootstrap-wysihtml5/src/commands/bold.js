wysihtml5.commands.bold = {
    exec: function (composer, command) {
        return wysihtml5.commands.formatInline.exec(composer, command, "b");
    },

    state: function (composer, command) {
        // element.ownerDocument.queryCommandState("bold") results:
        // firefox: only <b>
        // chrome:  <b>, <strong>, <h1>, <h2>, ...
        // ie:      <b>, <strong>
        // opera:   <b>, <strong>
        return wysihtml5.commands.formatInline.state(composer, command, "b");
    }
};

