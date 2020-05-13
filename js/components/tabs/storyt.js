Vue.component('tab-story', {
  data: function() {
    return {
      // scope of 'story' moved to just this file
      loge: loge,
      cur_indice: cur_indice,
      story: story_text
    }
  },
  template:
    `
    <div>
      <p><strong>Story</strong></p>
      <p v-for="text in loge" :key="text">{{ text }}</p>
      <p v-on:click="next_story" id="advance-text">></p>
    </div>
    `
  ,
  methods: {
    next_story() {
      loge.push(story_text[cur_indice])
      cur_indice++;
      console.log(loge);
    }
  }
});
