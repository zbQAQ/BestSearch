import request from "../utils/request"

export interface IProductTrend {
  // 名称
  name: string
  // 增长值
  growth: number
  // 图表数据
  search_msv: Array<{ date: string, sv: number }>
}

export function getProductList(keyword: string) {
  return request.post("/api/interview/keyword_search", { search_phrase: keyword })
}