<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Posts</h1>
    <vs-row>
      <vs-col vs-w="12">
        <vs-table :data="posts" style="margin-top:10px;" id="div-with-loading"
                  class="vs-con-loading__container">
          <template slot="header">
            <h3 style="padding: 10px 10px; font-size:24px;">
              게시글 목록
            </h3>
          </template>
          <template slot="thead">
            <vs-th sort-key="id">
              번호.
            </vs-th>
            <vs-th sort-key="title">
              제목
            </vs-th>
            <vs-th sort-key="author">
              작성자
            </vs-th>
            <vs-th sort-key="created_at">
              작성일
            </vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].id">
                <a @click="selectPost(data[indextr].id)">
                  {{ data[indextr].id }}
                </a>
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
              <vs-td>
                <a @click="deletePost(data[indextr].id)">
                  삭제
                </a>
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
    <vs-row style="margin-top:20px;">
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="selectedPost.title" placeholder="제목"></vs-input>
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="selectedPost.author"
                placeholder="작성자"></vs-input>
      <vs-input class="icon-inputx" style="margin-left:10px;" v-model="selectedPost.created_at" type="date"></vs-input>
      <vs-button @click="updatePost()">업데이트</vs-button>
    </vs-row>
    <vs-button @click="setUpdatePost(1)">test</vs-button>
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
      selectedPost: {
        id: 0,
        title: '',
        author: '',
        create_at: '',
      }
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
    },
    selectPost(id) {
      this.selectedPost = this.$store.state.posts.posts[id]
    },
    updatePost() {
      let vm = this;
      vm.$store.commit('SHOW_GLOBAL_SPINNER');
      vm.$store.dispatch('posts/updatePost', vm.selectedPost)
        .then(function (response) {
          vm.$store.commit('HIDE_GLOBAL_SPINNER');
        })
    },
    deletePost(id) {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        let vm = this;
        vm.$store.commit("SHOW_GLOBAL_SPINNER");
        vm.$store.dispatch('posts/deletePost', id)
          .then(function (response) {
            window.alert("정상적으로 삭제되었습니다.")
            vm.$store.commit('HIDE_GLOBAL_SPINNER');
          })
      }

    }
  }
}
</script>

<style scoped>

</style>
