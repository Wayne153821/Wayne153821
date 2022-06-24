// pages/shouchang/shoucang.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    clickRow(e){
        let idx=e.currentTarget.dataset.idx
        let id = JSON.stringify(e.currentTarget.dataset.id)
        let index =JSON.stringify(idx)
        wx.navigateTo({
          url: '../data/data?id='+id+'&index='+index,
        })
    },  

    shoucang(e){
        let shoucang=this.data.shoucang
        console.log(e.currentTarget.dataset.idx)
        let index=e.currentTarget.dataset.idx
        shoucang[index].select=!shoucang[index].select
        this.setData({
            shoucang:shoucang
        })
        console.log(this.data.shoucang)
        wx.setStorageSync('shoucang', shoucang)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if(wx.getStorageSync('shoucang')){
            let shoucang=wx.getStorageSync('shoucang')
            console.log(shoucang);
            this.setData({
                shoucang:shoucang
            })
            console.log(this.data.shoucang)
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