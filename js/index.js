// player can be accessed from anywhere
// since resources is now being watched all the time,
// only modify resources
Vue.mixin({
  data: function() {
    return {
      player: resources
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    message: "No one knows a meteor story..."
  }
})
