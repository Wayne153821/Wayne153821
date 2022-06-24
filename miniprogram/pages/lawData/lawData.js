// pages/lawData/lawData.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:''
    },

    getData(id){
        wx.cloud.callFunction({
            name:'getLawData',
            data:{
                id:id
            }
        }).then(res=>{
            let content=res.result.data.content
            content=content.replace(/\\n/g,"\n")
            res.result.data.content=content
            let time=res.result.data.time
            time=JSON.stringify(time)
            time=time.substring(1,11)
            res.result.data.time=time
            this.setData({
                dataList:res.result.data
            })
        })
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let id = JSON.parse(options.id)
        this.setData({
            id:id 
        })
        this.getData(id)
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