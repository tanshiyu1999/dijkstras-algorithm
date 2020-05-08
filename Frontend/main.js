new Vue ({
  el: "#app",
  data: {
    message: "Keep clicking me to change me!"
  },
  methods: {
    clickChange() {
      if (this.message == "Keep clicking me to change me!") {
        this.message = "Chocolate Pudding!";
      } else if (this.message == "Chocolate Pudding!") {
        this.message = "Vue is cool!";
      } else if (this.message == "Vue is cool!") {
        this.message = "I'm having a lot of fun!";
      } else {
        this.message = "Keep clicking me to change me!";
      }
    }
  }
})
