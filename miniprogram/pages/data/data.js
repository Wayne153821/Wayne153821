Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:'',
        shoucang:[]
    },

    getData(id){
        wx.cloud.callFunction({
            name:'getData',
            data:{
                id:id
            }
        }).then(res=>{
            let content=res.result.data[0].content
            console.log(res.result.data[0])
            content=content.replace(/\\n/g,"\n")
            res.result.data[0].content=content
            this.setData({
                dataList:res.result.data
            })
        })
        
    },

    shoucang(){
        
        let shoucang=this.data.shoucang
        let index=this.data.index
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
        let id = JSON.parse(options.id)
        let index = JSON.parse(options.index)
        this.setData({
            id:id ,
            index:index
        })
        this.getData(id)

        let shoucang=wx.getStorageSync('dataList')
        if(wx.getStorageSync('shoucang'))
        shoucang=wx.getStorageSync('shoucang')
        this.setData({
            shoucang:shoucang
        })
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