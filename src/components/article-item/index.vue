<template>
  <van-cell
    class="article-item"
  >
    <div slot="title" class="title">{{ article.title }}</div>
    <div slot="label">
        <div>
            <span>{{ article.aut_name }}</span>
            <span>{{ article.comm_count }}评论</span>
            <span>{{ article.pubdate }}</span>
        </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">

</style>
