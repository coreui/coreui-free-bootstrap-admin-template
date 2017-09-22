<template>
  <li class="nav-title" v-bind:class="classes">
    <template v-if="wrapper && wrapper.element">
      <component v-bind:is="wrapper.element" v-bind="wrapper.attributes">
        {{name}}
      </component>
    </template>
    <template v-else>
      {{name}}
    </template>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    wrapper: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
