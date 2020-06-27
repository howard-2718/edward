Vue.component('tab-story', {
  data: function() {
    return {
      // scope of 'story' moved to just this file
      loge: loge,
      cur_indice: cur_indice,
      story: story_text,
      show_advance: true
    }
  },
  template:
    `
    <div>
      <p><strong>Story</strong></p>
      <div id="story-display">
        <p v-for="text in loge" :key="text">{{ text }}</p>
      </div>
      <p v-show="show_advance" v-on:click="next_story" id="advance-text">></p>
    </div>
    `
  ,
  methods: {
    next_story() {
      // Add the next story_text to loge
      if(story_text[cur_indice].substr(-3) === "@@@"){
        loge.push(story_text[cur_indice].slice(0, -3));
        this.show_advance = false;
      }
      else {
        loge.push(story_text[cur_indice]);
      }
      //console.log(loge);
      //console.log(this);
      cur_indice++;

      // Update the scroll wheels
      var element = document.getElementById("story-display");
      element.scrollTop = element.scrollHeight - 30;
    }
  }
});
