// player can be accessed from anywhere
// since resources is now being watched all the time,
// only modify resources
Vue.mixin({
  data: function() {
    return {
      resources_v: resources,
      time_v: time,
      //story: story_text,
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    message: "No one know a meteor story..."
  }
})

var lastUpdate = Date.now()

function updateGame(times){
  time.raw += times;
  time.minute = Math.floor(time.raw/10);
  time.hour = Math.floor(time.minute/60);
  time.day = Math.floor(time.hour/24);
}

function mainLoop(){
  var diff_time = (Date.now() - lastUpdate) / 100;
  updateGame(diff_time);

  lastUpdate = Date.now()
}

setInterval(mainLoop, 100);
