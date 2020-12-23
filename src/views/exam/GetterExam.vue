<template>
  <div class="container content-wrap">
    <h1 style="margin-bottom:10px;">Getter 실습 페이지</h1>
    <dl>
      <dt>저장소 Getter 사용</dt>
      <dd>vue computed : {{ doubleVueMessage }}</dd>
      <dd>vuex mapGetters 헬퍼 방식(1) : {{ mapDoubleMessage }}</dd>
      <dd>vuex mapGetters 헬퍼 방식(2) : {{ doubleMessage }}</dd>
    </dl>
    <p style="margin-top:10px;">
      mapGetter 헬퍼 함수는 저장소에 등록된 Getter 이름을 기반으로 getter 등록 할 수 있도록 도와줍니다.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "GetterExam",
  computed:{
    doubleVueMessage(){
      return this.$store.state.message + " " + this.$store.state.message;
    },
    doubleVuexMessage(){
      return this.$store.getters.doubleMessage
    },
    ...mapGetters({
      mapDoubleMessage : 'doubleMessage'
    }),
    ...mapGetters([
      'doubleMessage',
    ])
  }
}
</script>

<style scoped>

</style>
