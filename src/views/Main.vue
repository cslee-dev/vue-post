<template>
  <div>
    <vs-navbar class="nabarx" color="dark" text-color="rgba(255,255,255,0.6)" active-text-color="rgba(255,255,255,1)"
               style="padding: 10px 10px;">
      <div slot="title">
        <vs-navbar-title style="color:rgba(255,255,255,0.6)">
          Vuex 실습
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <router-link :to="{name:'Home'}">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link :to="{name:'State'}">STATE EXAM</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link :to="{name:'Getter'}">GETTER EXAM</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link :to="{name:'Mutation'}">MUTATION EXAM</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link :to="{name:'Action'}">ACTION EXAM</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <router-link :to="{name:'PostHome'}">POST</router-link>
      </vs-navbar-item>
    </vs-navbar>
    <global-spinner></global-spinner>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import globalSpinner from '@/components/spinners/CornerSpinner.vue'

export default {
  name: "Main",
  computed: {
    ...mapState(['title'])
  },
  components: {globalSpinner}
}
</script>

<style scoped>
#postContent {
  padding: 100px 20px;
}
</style>
