// components/my-prop/my-prop.js
Component({
  properties: {
    // 这样写不可以设置默认值
    // title: String
    title: {
      type: String,
      value: "我是默认的标题",
      // 观察者
      observer: function(newVals, oldVals) {
        console.log(newVals, oldVals)
      }
    }
  },
  // 组件样式传递
  externalClasses: ["titleclass"]
})
