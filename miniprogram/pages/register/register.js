// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'',
        id:'',
        password:''
    },

    getUserName(e){
        // console.log(e.detail.value)
        this.setData({
            name:e.detail.value
        })
    },
    getUserId(e){
        // console.log(e.detail.value)
        this.setData({
            id:e.detail.value
        })
    },
    getUserPassword(e){
        // console.log(e.detail.value)
        this.setData({
            password:e.detail.value
        })
    },
    register(e){
        let name=this.data.name
        let id=this.data.id
        let password=this.data.password
        console.log(name,id,password)
        if(name.length<2){
            wx.showToast({
              icon:'none',  
              title: '用户名至少2位',
            })
            return
        }
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

        // wx.cloud.callFunction({
        //     name:'register',
        //     data:{
        //         name:name,
        //         id:id,
        //         password:password
        //     }
        // }).then(res=>{
        //     console.log('注册成功',res)
        //     wx.showToast({
        //       title: '注册成功',
        //     })
        //     wx.navigateTo({
        //       url: '../login/login',
        //     })
        // })

        wx.cloud.database().collection('user').add({
            data:{
                name:name,
                id:id,
                password:password
            },
            success:res=>{
                console.log('注册成功',res)
                wx.showToast({
                  title: '注册成功',
                })
                wx.navigateTo({
                  url: '../login/login',
                })
            },
            fail:res=>{
                console.log('注册失败',res)
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