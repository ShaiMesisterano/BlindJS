/*global define, $, brackets, window, BlindJS */
define(function (require, exports, module) {

    'use strict';

    var CommandManager =    brackets.getModule("command/CommandManager"),
        EditorManager =     brackets.getModule("editor/EditorManager"),
        DocumentManager =   brackets.getModule("document/DocumentManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        Menus =             brackets.getModule("command/Menus");
    var BlindJS = require("blind").BlindJS;
    var COMMAND_ID =    "blindjs.start",
        MENU_NAME =     "Enable BlindJS",
        isEnabled =     false;

    function blindjs_start() {
        var editor =        EditorManager.getCurrentFullEditor(),
        selection =         editor.getSelection(),
        cursor =            editor.getCursorPos(),
        scroll =            editor.getScrollPos(),
        doc =               DocumentManager.getCurrentDocument();
        var df =            new $.Deferred();
        this.setChecked(!this.getChecked());

        if (isEnabled) {
            var cfg = {
                input: editor.getSelectedText(),
                output: document
            };

            BlindJS.printText = function () {
                doc.batchOperation(function () {
                    doc.setText(BlindJS.typed);
                    editor.setCursorPos(cursor);
                    editor.setScrollPos(scroll.x, scroll.y);
                });
            };
            BlindJS.start(cfg);
        } else {
            BlindJS.$el.removeEventListener('keyup', BlindJS.type);
            return df.reject().promise();
        }
    }

    KeyBindingManager.addBinding(COMMAND_ID, "Ctrl-Alt-B");
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    var cmdEnable = CommandManager.register(MENU_NAME, COMMAND_ID, blindjs_start);
    $(cmdEnable).on('checkedStateChange', function () {
        isEnabled = cmdEnable.getChecked();
    });
    menu.addMenuItem(cmdEnable);
    cmdEnable.setChecked(isEnabled);
});
