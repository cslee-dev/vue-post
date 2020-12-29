<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Posts</h1>
    <vs-row>
      <vs-col vs-w="12">
        <vs-table :data="posts" style="margin-top:10px;" id="div-with-loading" class="vs-con-loading__container">
          <template slot="header">
            <h3 style="padding: 10px 10px; font-size:24px;">
              게시글 목록
            </h3>
          </template>
          <template slot="thead">
            <vs-th>
              번호.
            </vs-th>
            <vs-th>
              제목
            </vs-th>
            <vs-th>
              작성자
            </vs-th>
            <vs-th>
              작성일
            </vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].id">
                {{ data[indextr].id }}
              </vs-td>
              <vs-td>
                {{ data[indextr].title }}
              </vs-td>
              <vs-td>
                {{ data[indextr].author }}
              </vs-td>
              <vs-td>
                {{ data[indextr].created_at }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
    <vs-row style="margin-top:20px;">
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="title" placeholder="제목"></vs-input>
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="author" placeholder="작성자"></vs-input>
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="created_at" type="date"></vs-input>
      <vs-button @click="createPost({title,author,created_at})">글쓰기</vs-button>
    </vs-row>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {createNamespacedHelpers} from 'vuex'

export default {
  name: "PostHome",
  data() {
    return {
      title: '',
      author: '',
      created_at: (new Date().toISOString().split("T"))[0],
    }
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  methods: {
    createPost(payload) {
      let vm = this;
      vm.$store.commit('SHOW_GLOBAL_SPINNER');
      vm.$store.dispatch('posts/createPost', payload)
        .then(function (response) {
          vm.$store.commit('HIDE_GLOBAL_SPINNER');
        })
    }
  }
}
</script>

<style scoped>

</style>
