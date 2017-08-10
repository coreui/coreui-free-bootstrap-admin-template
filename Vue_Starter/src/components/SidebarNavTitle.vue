<template>
  <li class="nav-title">
    {{name}}
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
