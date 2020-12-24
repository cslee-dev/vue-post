<template>
  <div class="con-vs-loading " id="spinner" v-show="globalSpinner">
    <h3 class="title-loading">로딩중</h3>
    <div class="vs-loading corners">
      <div class="effect-1 effect"></div>
      <div class="effect-2 effect"></div>
      <div class="effect-3 effect"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CornerSpinner",
  computed: mapState(['globalSpinner'])
}
</script>
