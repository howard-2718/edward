Vue.component('base-component', {
  template:
    `
    <div class="base-component">
      <button v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component>
      {{player.wisdom}}
    </div>
    `
  ,
  data: function() {
    return {
      currentTab: "Story",
      tabs: ["Story", "Resources"]
    }
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
});
