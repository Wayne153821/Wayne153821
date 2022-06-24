Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    imgUrl:null
  },

  login(){
      wx.getUserProfile({
        desc: '用于完善用户资料',
        success:(res)=>{
            let user=res.userInfo
            console.log(user)
            let ifm=wx.getStorageSync('information')
            if(ifm.image!=null){
                user.avatarUrl=ifm.image
            }
            this.setData({
                userInfo:user
            })
            wx.setStorageSync('user', user)           
                }
            })
  },

  loginOut(){
      this.setData({
          userInfo:''
      })
      wx.setStorageSync('user', null)
      this.setData({
          imgUrl:null
      })
  },

  clearAll(){
    wx.showLoading({
        title: '正在清理缓存中...',
    })
    wx.setStorageSync('information', null)
    wx.setStorageSync('shoucang', null)
    setTimeout(function () {
        wx.hideLoading()
      }, 800)
  },

  setPhotoInfo(){
      var that=this;
      wx.chooseImage({
        count: 1,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success:res=>{
            let user= wx.getStorageSync('user')
            var tempFilePaths=res.tempFilePaths
            user.avatarUrl=tempFilePaths
            console.log(user)
            wx.setStorageSync('user', user)
            let ifm=wx.getStorageSync('information')
            ifm.image=tempFilePaths
            wx.setStorageSync('information', ifm)
            this.setData({
                imgUrl:tempFilePaths
            })
        }
      })
  },
  information(){
      wx.navigateTo({
        url: '../me/me',
      })
  },

  shoucang(){
    wx.navigateTo({
      url: '../shouchang/shoucang',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user=wx.getStorageSync('user')
    this.setData({
        imgUrl:user.imgUrl
    })
    this.setData({
        userInfo:user
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let user=wx.getStorageSync('user')
    this.setData({
        imgUrl:user.imgUrl
    })
    this.setData({
        userInfo:user
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let user=wx.getStorageSync('user')
    this.setData({
        imgUrl:user.imgUrl
    })
    let ifm=wx.getStorageSync('information')
    if(ifm==null){
        this.setData({
            ifm:{
                phone:null,
                selector:'',
                nickName:null,
                date:null,
                image:null
            }
        })
        ifm=this.data.ifm
        wx.setStorageSync('information', ifm)
    }
    if(ifm.image!=null){
        user.avatarUrl=ifm.image
    }
    this.setData({
        userInfo:user
    })
  },

  toLogin(){
      wx.navigateTo({
        url: '../login/login'
      })
  },

  toRegister(){
    wx.navigateTo({
      url: '../register/register'
    })
  },

  toManage(){
      wx.navigateTo({
        url: '../manage/manage',
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})