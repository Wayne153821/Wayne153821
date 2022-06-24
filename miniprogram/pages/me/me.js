// pages/me/me.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectorItems:['男','女'],
        information:[],
    },

    getTouxiang(){
        var that=this;
        wx.chooseImage({
          count: 1,
          sizeType:['original','compressed'],
          sourceType:['album','camera'],
          success:res=>{              
              var image=res.tempFilePaths
              this.setData({
                  image:image
              })
          }
        })
    },

    getPhone(res){
        let value=res.detail.value
        console.log(res.detail.value)
        this.setData({
            phone:value
        })
    },

    selectorChange(e){
        let i=e.detail.value
        let value=this.data.selectorItems[i]
        this.setData({
            selector:value
        })
    },

    getNickName(e){
        let value=e.detail.value
        this.setData({
            nickName:value
        })
    },

    selectDate(e){
        let value=e.detail.value
        this.setData({
            date:value
        })
    },

    save(e){
        let ifm=wx.getStorageSync('information')
        let phone=this.data.phone
        let selector=this.data.selector
        let nickName=this.data.nickName
        let date=this.data.date  
        let image=this.data.image  
        if(phone==null&&selector==null&&nickName==null&&date==null&&image==null){
            this.setData({
                information:ifm
            })
        }
        if(phone!=null){
            ifm.phone=phone
            this.setData({
                information:ifm
            })
            var information=this.data.information
            console.log(information)
            wx.setStorageSync('information', information)
        }
        if(selector!=null){
            ifm.selector=selector
            this.setData({
                information:ifm
            })
            var information=this.data.information
            console.log(information)
            wx.setStorageSync('information', information)
        }
        if(nickName!=null){
            ifm.nickName=nickName
            let user=wx.getStorageSync('user')
            user.nickName=nickName
            wx.setStorageSync('user', user)
            this.setData({
                information:ifm
            })
            var information=this.data.information
            console.log(information)
            wx.setStorageSync('information', information)
        }
        if(date!=null){
            ifm.date=date
            this.setData({
                information:ifm
            })
            var information=this.data.information
            console.log(information)
            wx.setStorageSync('information', information)
        }
        if(image!=null){
            ifm.image=image
            let user= wx.getStorageSync('user')
            user.avatarUrl=image
            wx.setStorageSync('user', user)
            this.setData({
                information:ifm
            })
            var information=this.data.information
            console.log(information)
            wx.setStorageSync('information', information)
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let user=wx.getStorageSync("user")
        console.log(user.nickName)
        console.log(user.avatarUrl)
        this.setData({
            nickName:user.nickName,
            image:user.avatarUrl
        })
        if(wx.getStorageSync('information')){
            let information=wx.getStorageSync('information')
            this.setData({
                information:information
            })
        }else{
            this.setData({
                information:{
                    phone:'',
                    selector:'',
                    nickName:'',
                    date:'',
                    image:''
                }
            })
            wx.setStorageSync('information', this.data.information)
        }
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