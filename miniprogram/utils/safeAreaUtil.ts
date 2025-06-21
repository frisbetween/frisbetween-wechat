import { SafeArea } from "../service/type/SafeArea";

import SafeArea from 

// 获取系统信息
const systemInfo = wx.getSystemInfoSync();
const capsuleMenuInfo = wx.getMenuButtonBoundingClientRect()

// 获取底部状态栏高度
const statusBarHeight = systemInfo.statusBarHeight;

// 获取顶部导航栏高度
const navigationBarHeight = (capsuleMenuInfo.top - statusBarHeight) * 2 + capsuleMenuInfo.height
const capsuleHeight = capsuleMenuInfo.height

// 计算底部安全区
let safeArea = systemInfo.screenHeight - systemInfo.safeArea.bottom
if (safeArea < 16) {
  safeArea = 16
}

export function getSafeArea(): SafeArea {

}