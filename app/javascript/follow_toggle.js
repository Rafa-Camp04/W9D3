import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
    
  }

  async handleClick(event) {
    event.preventDefault();
    console.log(this.followState)
    if (this.followState === true){
      this.unfollow.bind(this);
    } else {
      this.follow.bind(this);
    }
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}