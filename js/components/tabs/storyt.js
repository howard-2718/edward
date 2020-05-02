Vue.component('tab-story', {
  template:
    `
    <div>
      <p v-for="index in player.indices_unlocked" :key="index">{{ story[index] }}</p>
      <p v-on:click="next_story" id="advance-text">></p>
    </div>
    `
  ,
  methods: {
    next_story() {
      resources.indices_unlocked.push(resources.indices_unlocked[resources.indices_unlocked.length - 1] + 1);
      //console.log(resources.indices_unlocked);
    }
  }
});
