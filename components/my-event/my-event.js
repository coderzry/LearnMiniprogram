// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
                        // 1.事件名称 2.要传递的数据      3.options其他选项
      this.triggerEvent('increment', {name: "why", age: 18}, {})
    }
  }
})
