Vue.component('main-component', {
  props: ['parentdata'],
  template: '<button>You clicked me {{ parentdata.wisdom }} times.</button>'
})
