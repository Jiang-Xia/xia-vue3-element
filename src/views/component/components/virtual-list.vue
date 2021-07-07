<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-07 17:20:29
 * @LastEditTime: 2021-07-07 17:59:42
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\components\virtual-list.vue
-->
<template>
  <el-table
    :data="tabledata"
    class="virtual-table"
    height="300px"
  >
    <el-table-column prop="china_name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="date" label="出生日期" />

  </el-table>
</template>
<script>
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
    image: Random.image('200x100', '#ffcc33', '#FFF', 'png', '文字'),
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
    id1: Random.increment(),
    id2: Random.increment(),
    id3: Random.increment()
  }
}
const raddomData = []
for (let i = 0; i < 40; i++) {
  raddomData.push(mockData())
}
console.log(raddomData)

export default {
  name: 'VirtualList',
  data() {
    return {
      tabledataCopy: [],
      tabledata: [...raddomData]
    }
  }
}
</script>
<style lang="scss" scoped>
.virtual-table{
  ::v-deep.el-table th {
    background: #f4f4f4 !important;
    height: 40px !important;
    padding: 0 0 !important;
  }
  ::v-deep.el-table td {
    height: 40px !important;
    padding: 0 0 !important;
  }
}
</style>
