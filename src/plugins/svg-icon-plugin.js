import SvgIcon from '@/components/SvgIcon.vue'

export default {
  install(app) {
    // 动态带入 SVG 文件
    // eager false 动态按需加载，true立即全部加载
    const svgModules = import.meta.glob('@/assets/svg/*.svg', {
      eager: true
      // as: 'component'
    })
    // 将 SVG 注册到一个全局对象中
    const svgIcons = {}
    for (const path in svgModules) {
      const name = path.split('/').pop().split('.')[0]
      svgIcons[name] = svgModules[path].default
    }

    // 全局注册 SvgIcon 组件
    app.component('SvgIcon', SvgIcon)
    // 将图标对象提供给所有组件
    app.provide('svgIcons', svgIcons)
  }
}
