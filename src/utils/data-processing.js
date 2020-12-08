/*
 * 数据处理
 *
*/
// 数据导出 导出条件拼接展示
export function getConditionText(v) {
  let text = ''
  // 这里只能用英文名 因为此时没有input_type
  if (['pat_outdate', 'pat_indate', 'statistical_age'].includes(v.search_name)) { // 日期控件
    if (v.start_range && v.end_range) {
      text = v.search_cn_name + '：' + v.start_range + ' ~ ' + v.end_range
    } else if (v.start_range && !v.end_range) {
      text = v.search_cn_name + '：' + '≥' + v.start_range
    } else if (!v.start_range && !v.end_range) {
      text = v.search_cn_name + '：' + '≤' + v.end_range
    }
  } else {
    text = v.search_cn_name + '：' + v.search_content
  }
  return text
}
