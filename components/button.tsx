import { Component } from "@stencil/core";

@Component({
  tag: "button",
  styleUrl: "button.css"
})
export class Button {
  render() {
    return (
      <button onCLick={alert("You are awesome.")}>
        <slot />
      </button>
    );
  }
}
