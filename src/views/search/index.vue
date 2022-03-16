<template>
  <div class="search-container">
      <!-- 搜索栏 -->
      <!--
          在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。
       -->
      <form action="/">
        <van-search
            v-model="searchText"
            show-action
            placeholder="输入搜索关键词 fix channel"
            background="#3296fa"
            @search="onSearch"
            @cancel="onCancel"
            @focus="isResultShow = false"
        />
      </form>
      <!-- /搜索栏 -->

      <!-- 搜索结果 -->
      <search-result v-if="isResultShow" />
      <!-- /搜索结果 -->

      <!-- 联想建议 -->
      <search-suggestion
        v-else-if="searchText"
        :search-text="searchText"
      />
      <!-- /联想建议 -->

      <!-- 搜索历史记录 -->
      <search-history v-else />
      <!-- /搜索历史记录 -->
  </div>
</template>

<script>
import SearchHistory from './conponents/search-history'
import SearchSuggestion from './conponents/search-suggestion'
import SearchResult from './conponents/search-result'

export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false // 控制搜索结果的展示
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      console.log(val)
      this.isResultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.search-container {
    .van-search__action {
        color: yellow;
    }
}
</style>
