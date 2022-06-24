// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:'',
        password:'',
        imgUrl:null
    },

    getUserId(e){
        this.setData({
            id:e.detail.value
        })
    },

    getUserPassword(e){
        this.setData({
            password:e.detail.value
        })
    },

    login(){
        let id=this.data.id
        let password=this.data.password
        if(id.length<6){
            wx.showToast({
              icon:'none',  
              title: '账号至少6位',
            })
            return
        }
        if(password.length<6){
            wx.showToast({
              icon:'none',  
              title: '密码至少6位',
            })
            return
        }
        wx.cloud.callFunction({
            name:'login',
            data:{
                id:id
            }
        }).then(res=>{
                let user=res.result.data[0]
                user.imgUrl='../images/touxiang.png'
                console.log(res.result.data[0]);
                if(user==null){
                    wx.showToast({
                        icon:'error',
                        title: '登录失败',
                    })
                    return
                }
                if(password==user.password){
                    wx.redirectTo({
                        url: '../manage/manage',
                      })
                    wx.setStorageSync('user', user)
                } else{
                    wx.showToast({
                      icon:'error',
                      title: '登录失败',
                    })
                }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})