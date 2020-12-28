<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Posts</h1>
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
  </div>
</template>

<script>
export default {
  name: "PostHome"
}
</script>

<style scoped>

</style>
