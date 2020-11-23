Page({
  data: {
    name: 'Coderzry',
    age: 18,
    students: [
      {id:1, name: 'a', age: 18},
      {id:2, name: 'b', age: 19},
      {id:3, name: 'c', age: 20},
      {id:4, name: 'd', age: 21}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法，界面是不会刷新的
    // this.data.counter+= 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1 
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})