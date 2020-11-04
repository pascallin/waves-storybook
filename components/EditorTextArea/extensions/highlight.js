import MediumEditor from "medium-editor";
import rangy from "rangy";
import "rangy/lib/rangy-classapplier"; // https://github.com/timdown/rangy/issues/450

rangy.init();

const Highlighter = MediumEditor.extensions.button.extend({
  name: "highlighter",
  tagNames: ["mark"], // nodeName which indicates the button should be 'active' when isAlreadyApplied() is called
  contentDefault: "<b>H</b>", // default innerHTML of the button
  contentFA: '<i class="fa fa-paint-brush"></i>', // innerHTML of button when 'fontawesome' is being used
  aria: "Highlight", // used as both aria-label and title attributes
  action: "highlight", // used as the data-action attribute of the button

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
    this.classApplier = rangy.createClassApplier("highlight", {
      elementTagName: "mark",
      normalize: true,
    });
  },

  getButton: function () {
    return this.button;
  },

  handleClick: function (event) {
    this.classApplier.toggleSelection();
    this.base.checkContentChanged();
  },
});

export default Highlighter;
