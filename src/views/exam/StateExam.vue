<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">상태 실습 페이지</h1>
    <dl>
      <dt>저장소 상태에 직접 접근</dt>
      <dd>vue computed : {{ vueMessage }}</dd>
      <dd>vuex mapState 헬퍼 방식(1) : {{ vueMessage }}</dd>
      <dd>vuex mapState 헬퍼 방식(2) : {{ message }}</dd>
    </dl>
    <p style="margin-top:10px;">
      mapState 헬퍼 함수는 state 이름을 기반으로 getter 함수를 자동으로 생성해준다.
    </p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "StateExam",
  computed: {
    // Vue드럽게 접근방식
    vueMessage() {
      return this.$store.state.message;
    },
    // 편안한 접근방식
    ...mapState({
      mapMessage: 'message'
    }),
    // 좀더 편안한 접근방식
    ...mapState(['message'])
  }
}
</script>

<style scoped>

</style>
