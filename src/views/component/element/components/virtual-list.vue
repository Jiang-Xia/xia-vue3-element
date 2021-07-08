<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-07 17:20:29
 * @LastEditTime: 2021-07-08 14:48:17
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\components\virtual-list.vue
-->
<template>
  <el-table
    ref="table"
    v-loading="listLoading"
    class="virtual-table"
    :data="virtualRows"
    :max-height="440"
    :row-key="getRowKeys"
    @select-all="handleSelectionAll"
  >
    <el-table-column type="selection" :reserve-selection="true" width="55" />
    <el-table-column prop="id1" label="ID" />
    <el-table-column prop="china_name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="date" label="出生日期" />
  </el-table>
</template>
<script>
import { debounce } from 'throttle-debounce'
import Mock from 'mockjs'
const Random = Mock.Random
// mock 基本数据类型
const mockData = () => {
  return {
  // 中文名字 | 姓 | 名
    china_name: Random.cname(),
    china_first: Random.cfirst(),
    china_last: Random.clast(),
    // 英文名 | firatname | lastname | 带中间字的
    eng_name: Random.name(),
    eng_first: Random.first(),
    eng_last: Random.last(),
    // 长度为4的字符串
    string: Random.string(4),
    // 数字 最小1 最大100
    age: Random.integer(1, 100),
    // 数字 浮点数
    num: Random.float(1, 10, 1, 4),
    // 数字 字符串
    numString: Random.character('number'),
    // 日期 YYYY-MM-DD
    date: Random.date(),
    // 时间 HH:mm:ss
    time: Random.time(),
    // 日期 时间 YYYY-MM-DD HH:mm:ss
    dateTime: Random.datetime(),
    // 当前日期
    now: Random.now(),

    // 图片
    // image: Random.image('200x100', '#ffcc33', '#FFF', 'png', '文字'),
    // 颜色 hex  rgb
    color: Random.color(),
    // 标题
    title: Random.ctitle(),
    cword: Random.cword(),
    // 一段文本 1段-100段
    cparagraph: Random.cparagraph(1, 2),
    // 英文 句子
    sentence: Random.sentence(),
    // 区域
    region: Random.region(),
    // 省 city zip couty 等
    province: Random.province(),

    // ip 域名 网址
    ip: Random.ip(),
    url: Random.url(),

    // 身份证
    identify: Random.id(),
    // 全局自增ID
    id1: Random.increment()
    // id2: Random.increment(),
    // id3: Random.increment()
  }
}
const raddomData = []
for (let i = 0; i < 200; i++) {
  raddomData.push(mockData())
}
// console.log(raddomData)

export default {
  name: 'VirtualList',
  props: {
    tableData: {
      default: () => [...raddomData],
      type: Array
    }
  },
  data() {
    return {
      allTableData: [],
      virtualRows: [],
      listLoading: false,
      selectedAllStatus: false,
      selectedRow: [],
      selectedRowIds: [],
      bodyWrapper: null,
      throttleResize: null
    }
  },
  watch: {
    tableData: {
      handler: function(n) {
        this.allTableData = JSON.parse(JSON.stringify(n))
      },
      immediate: true
    }
  },
  created() {
    this.throttleResize = debounce(100, () => {
      this.handleScroll()
    })
  },
  mounted() {
    // ref到原生元素为dom ref到组件为组件实例
    // https://vue3js.cn/docs/zh/api/special-attributes.html#key
    this.bodyWrapper = this.$refs.table.$refs.bodyWrapper
    this.addListeners()
    this.updateVisibleItems()
  },
  beforeUnmount() {
    this.removeListeners()
  },
  methods: {
    // 对table增加监听事件
    addListeners() {
      if (!this.bodyWrapper) {
        return
      }
      this.bodyWrapper.addEventListener('scroll', this.throttleResize)
    },
    removeListeners() {
      if (!this.bodyWrapper) {
        return
      }
      this.bodyWrapper.removeEventListener('scroll', this.throttleResize)
    },
    handleScroll() {
      console.count('处理滚动事件')
      this.updateVisibleItems()
    },
    updateVisibleItems() {
      const itemSize = 40 // td高度
      const count = this.allTableData.length // table总条数
      const bufferCount = 10 // table每次实际渲染条数
      const height = count * itemSize

      // 获取当前滚动条位置
      const scroll = this.getScroll()
      const scrollTop = scroll.start

      // Fixed size mode
      const startIndex = ~~(scrollTop / itemSize)
      // console.log(startIndex)

      // 分隔数组
      this.virtualRows = this.allTableData.slice(startIndex, startIndex + bufferCount)
      // console.log(this.virtualRows)
      // 设置el-table上的虚拟列表，采用了padding的方案，原因是transform 会使el-table的样式混乱
      const table = this.$el.querySelector('.el-table__body')
      table.style.height = height + 'px'
      // // 滚到底了
      if (startIndex + bufferCount >= count) {
        // 由于el-table 在滚动到最后时，会出现抖动，因此增加判断，单独设置属性
        table.style.paddingTop = scrollTop - itemSize + 'px'
        table.style.paddingBottom = 0
      } else {
        // 用paddingTop和paddingBottom撑开展示
        table.style.paddingTop = scrollTop + 'px'
        table.style.paddingBottom = height - scrollTop - bufferCount * itemSize + 'px'
      }
      // table.style.webkitTransform = `translate3d(0, ${scrollTop}px, 0)`
    },
    getScroll() {
      if (!this.bodyWrapper) {
        return {
          start: 0,
          end: 400
        }
      }
      const dom = this.bodyWrapper
      const scrollState = {
        start: dom.scrollTop,
        end: dom.scrollTop + dom.clientHeight
      }
      return scrollState
    },
    handleSelectionAll(selection) {
      this.selectedAllStatus = !this.selectedAllStatus
      const refsElTable = this.$refs.table // 获取表格对象
      const allTableDataLength = this.allTableData.length
      if (this.selectedAllStatus) {
        console.log('选中所有行')
        refsElTable.clearSelection() // 先清空
        for (let index = 0; index < allTableDataLength; index++) {
          // 选中所有行
          refsElTable.toggleRowSelection(this.allTableData[index], true)
        }
      } else {
        console.log('清空选中所有行')
        refsElTable.clearSelection()
      }
    },
    getRowKeys(row) {
      return row.id // 设定每一条对应一个key
    }
  }
}
</script>
<style lang="scss" scoped>
.virtual-table{
  ::v-deep.el-table th {
    background: rgba($color: $main-color, $alpha: .12) !important;
    height: 40px !important;
    padding: 0 0 !important;
  }
  ::v-deep.el-table tr,::v-deep.el-table td {
    height: 40px !important;
    padding: 0 0 !important;
  }
  .virtual-table{
    .el-table__body-wrapper{
    }
  }
}
</style>
