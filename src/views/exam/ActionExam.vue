<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Action 실습 페이지</h1>
    <div>
      <vs-button ref="loadableButton" color="dark" type="border" class="vs-con-loading__container" @click="fetchVueMovies">
        데이터 가져오기
      </vs-button>
    </div>
    <vs-table :data="movies" style="margin-top:10px;" id="div-with-loading" class="vs-con-loading__container">
      <template slot="header">
        <h3 style="padding: 10px 10px; font-size:24px;">
          영화 목록
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          번호.
        </vs-th>
        <vs-th>
          영화제목
        </vs-th>
        <vs-th>
          감독
        </vs-th>
        <vs-th>
          개봉일
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
            {{ data[indextr].director }}
          </vs-td>
          <vs-td>
            {{ data[indextr].release_date }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import {UPDATE_MESSAGE} from '@/store/mutation-types'

export default {
  name: "ActionExam",
  data() {
    return {
      newMessage: '',
      activeLoading: false,
    }
  },
  computed: mapState(['movies']),
  methods: {
    fetchVueMovies() {
      let vm = this;
      vm.$mkdSpinner.show()
      this.$store.dispatch('fetchMovies').then(function(){
        vm.$mkdSpinner.hide();
      });
    },
    ...mapActions({
      fetchVuexMovies: 'fetchMovies'
    }),
    ...mapActions(['fetchMovies'])
  }
}
</script>

<style scoped>

</style>
