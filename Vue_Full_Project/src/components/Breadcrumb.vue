<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in list"><span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
      <router-link :to="item.path" v-else>{{ showName(item) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
  methods: {
    isLast (index) {
      return index === this.list.length - 1
    },
    showName (item) {
      return item.meta && item.meta.label || item.name
    }
  }
}
</script>
