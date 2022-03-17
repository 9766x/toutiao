<template>
  <div class="search-container">
      <!-- 搜索栏 -->
      <!--
          在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。
       -->
      <form class="search-form" action="/">
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
      <search-result
        v-if="isResultShow"
        :search-text="searchText"
      />
      <!-- /搜索结果 -->

      <!-- 联想建议 -->
      <search-suggestion
        v-else-if="searchText"
        :search-text="searchText"
        @search="onSearch"
      />
      <!-- /联想建议 -->

      <!-- 搜索历史记录 -->
      <search-history
        v-else
        :search-histories="searchHistories"
        @clear-search-histories="searchHistories = []"
        @search="onSearch"
      />
      <!-- /搜索历史记录 -->
  </div>
</template>

<script>
import SearchHistory from './conponents/search-history'
import SearchSuggestion from './conponents/search-suggestion'
import SearchResult from './conponents/search-result'
import { setItem, getItem } from '@/utils/storage'

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
      isResultShow: false, // 控制搜索结果的展示
      searchHistories: getItem('TOUTIAO_SEARCH_HISTORIES') || []
    }
  },
  computed: {},
  watch: {
    searchHistories (value) {
      setItem('TOUTIAO_SEARCH_HISTORIES', value)
    }
  },
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      // 更新文本框内容
      this.searchText = val

      // 存储搜索历史记录
      this.searchHistories.push(val)

      // 渲染搜索结果
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
  padding-top: 108px;
    .van-search__action {
        color: yellow;
    }
    .search-form {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
}
</style>
