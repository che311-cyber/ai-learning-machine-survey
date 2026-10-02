// 问卷收集配置
// 1) endpoint：如需把答卷集中汇总到服务器，把下面改成收集接口地址（接收 POST JSON 即可）。
//    留空 "" 时，答卷只保存在填写者本机浏览器中；
//    管理员可在问卷网址后加 #admin 进入本机答卷管理与导出页（导出 CSV/JSON）。
// 2) 本文件与 index.html 一起部署，改完无需改动问卷页面本身。
window.SURVEY_CONFIG = {
  endpoint: ""
};
