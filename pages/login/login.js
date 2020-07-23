//获取应用实例
const app = getApp()

Page({
  data: {
    isDisadled: false,
    codeText: '获取验证码',
  },
  onLoad: function () {

  },
  // 获取验证码
  getCode() {
    let i = 60;
    console.log('获取验证码');
    this.setData({ isDisadled: true });

    // 添加定时器
    let timing = setInterval(() => {
      if(i <= 0) {
        i = 60;
        this.setData({ codeText: '重新获取' });
        timing = clearInterval(timing);
        this.setData({ isDisadled: false });
      } else {
        i --;
        this.setData({ codeText: i + '秒后重发' });
      }
    }, 1000)
  },
  // 提交表单
  formSubmit(ev) {
    console.log(ev.detail.value)
    if(ev.detail.value.account == '') {
      return wx.showToast({
        title: '账号不能为空!',
        icon: 'none'
      })
    }
    if(ev.detail.value.password == '') {
      return wx.showToast({
        title: '密码不能为空!',
        icon: 'none'
      })
    }
    if(ev.detail.value.code == '') {
      return wx.showToast({
        title: '验证码不能为空!',
        icon: 'none'
      })
    }
    console.log('success')

    wx.redirectTo({
      url: '../index/index',
    })
  },
  
})