import MediumEditor from "medium-editor";
import rangy from "rangy";
import "rangy/lib/rangy-classapplier"; // https://github.com/timdown/rangy/issues/450

export default MediumEditor.extensions.button.extend({
  name: "code",
  tagNames: ["code"], // nodeName which indicates the button should be 'active' when isAlreadyApplied() is called
  contentDefault: "<b>C</b>", // default innerHTML of the button
  aria: "Code", // used as both aria-label and title attributes
  action: "code", // used as the data-action attribute of the button

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
    this.classApplier = rangy.createClassApplier("code", {
      elementTagName: "code",
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
