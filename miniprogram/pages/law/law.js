// pages/law/law.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:''
    },

    clickRow(e){
        let idx=e.currentTarget.dataset.idx;
        wx.cloud.callFunction({
            name:"incLawHits",
            data:{
                id:e.currentTarget.dataset.id
            }
        }).then(res=>{
            var newData=this.data.dataList;
            newData[idx].hits+=1;
            this.setData({
                dataList:newData
            })
        })
        let id = JSON.stringify(e.currentTarget.dataset.id)
        wx.navigateTo({
          url: '../lawData/lawData?id='+id,
        })
    },

    getLaw(){
        wx.cloud.callFunction({
            name:'getLaw'
        }).then(res=>{
            let law=res.result.data
            wx.setStorageSync('law', law)
            this.setData({
                dataList:law
            })
        })
    },

    getXianfa(){
        var type='宪法'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    getMin(){
        var type='民法典'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    getGong(){
        var type='公共文化服务保障法'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    getLvyou(){
        var type='旅游法'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    getFeiwu(){
        var type='非物质文化遗产法'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    getWenwu(){
        var type='文物保护法'
        wx.cloud.callFunction({
            name:'getXianfa',
            data:{
                type:type
            }
        }).then(res=>{
            console.log(res.result.data)
            this.setData({
                dataList:res.result.data
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getLaw()
        let law=wx.getStorageSync('law')
        this.setData({
            dataList:law
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let law=wx.getStorageSync('law')
        this.setData({
            dataList:law
        })
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