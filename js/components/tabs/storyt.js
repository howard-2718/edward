Vue.component('tab-story', {
  data: function() {
    return {
      // scope of 'story' moved to just this file
      loge: loge,
      cur_indice: cur_indice,
      story: story_text,
      show_advance: story_show_advance
    }
  },
  template:
    `
    <div>
      <p><strong>Story</strong></p>
      <div class="story-display">
        <p v-for="text in loge" :key="text">{{ text }}</p>
      </div>
      <p v-if="show_advance" v-on:click="next_story" id="advance-text">></p>
    </div>
    `
  ,
  methods: {
    next_story() {
      // Add the next story_text to loge
      loge.push(story_text[cur_indice]);
      if(story_text[cur_indice].substr(-3) === "@@@"){
        story_show_advance = false;
      }
      console.log(loge);
      cur_indice++;

      // Update the scroll wheels
      var elements = document.getElementsByClassName("story-display");
      for(i = 0; i < elements.length; i++){
        elements[i].scrollTop = elements[i].scrollHeight;
      }

    }
  }
});
