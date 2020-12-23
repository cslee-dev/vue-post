<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Mutation 실습 페이지</h1>
    <p>current message : {{ message }}</p>
    <p style="margin-top:10px;">new message : {{ newMessage }}</p>
    <vs-input class="inputx" placeholder="New Message" v-model="newMessage"
              style="margin-top:10px; display:inline-block;"/>
    <vs-button color="dark" type="border" @click="UPDATE_MESSAGE">Update</vs-button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {UPDATE_MESSAGE} from '@/store/mutation-types'

export default {
  name: "MutationExam",
  data() {
    return {
      newMessage: ''
    }
  },
  computed: mapState(['message']),
  methods: {
    [UPDATE_MESSAGE]() {
      if (this.newMessage.length ===0){
        return window.alert("값이 없습니다.");
      }
      // this.$store.commit(UPDATE_MESSAGE, {message: this.newMessage.trim()})
      this.$store.commit({
        type: UPDATE_MESSAGE,
        message: this.newMessage.trim(),
      })

    },
  }
}
</script>

<style scoped>

</style>
