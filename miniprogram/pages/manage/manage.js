// pages/manage/manage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addTitle:'',
        addAuthor:'',
        addContent:'',
        addHits:'',
        addImage:'',
        addVideo:'',
        updateTitle:'',
        updateAuthor:'',
        updateContent:'',
        updateHits:'',
        updateImage:'',
        updateVideo:'',
        deleteTitle:''
    },

    getAddTitle(e){
        console.log(e.detail.value)
        this.setData({
            addTitle:e.detail.value
        })
    },
    
    getAddAuthor(e){
        console.log(e.detail.value)
        this.setData({
            addAuthor:e.detail.value
        })
    },
    
    getAddContent(e){
        console.log(e.detail.value)
        this.setData({
            addContent:e.detail.value
        })
    },

    getAddHits(e){
        console.log(e.detail.value)
        this.setData({
            addHits:e.detail.value
        })
    },

    getAddImage(e){
        console.log(e.detail.value)
        this.setData({
            addImage:e.detail.value
        })
    },

    getAddVideo(e){
        console.log(e.detail.value)
        this.setData({
            addVideo:e.detail.value
        })
    },

    getUpdateTitle(e){
        console.log(e.detail.value)
        this.setData({
            updateTitle:e.detail.value
        })
    },

    getUpdateAuthor(e){
        console.log(e.detail.value)
        this.setData({
            updateAuthor:e.detail.value
        })
    },
    
    getUpdateContent(e){
        console.log(e.detail.value)
        this.setData({
            updateContent:e.detail.value
        })
    },

    getUpdateHits(e){
        console.log(e.detail.value)
        this.setData({
            updateHits:e.detail.value
        })
    },

    getUpdateImage(e){
        console.log(e.detail.value)
        this.setData({
            updateImage:e.detail.value
        })
    },

    getUpdateVideo(e){
        console.log(e.detail.value)
        this.setData({
            updateVideo:e.detail.value
        })
    },

    getDeleteTitle(e){
        console.log(e.detail.value)
        this.setData({
            deleteTitle:e.detail.value
        })
    },

    add(){
        let title=this.data.addTitle
        let author=this.data.addAuthor
        let content=this.data.addContent
        let hits=this.data.addHits
        hits=Number(hits)
        let image=this.data.addImage
        let video=this.data.addVideo
        wx.cloud.database().collection("demolist").add({
            data:{
                title:title,
                author:author,
                content:content,
                hits:hits,
                image:image,
                video:video
            }
        }).then(res=>{
            wx.showToast({
              title: '添加成功',
            })
        })
    },

    update(){
        let title=this.data.updateTitle
        let author=this.data.updateAuthor
        let content=this.data.updateContent
        let hits=this.data.updateHits
        let image=this.data.updateImage
        let video=this.data.updateVideo
        wx.cloud.database().collection("demolist").where({title:title}).update({
            data:{
                title:title,
                author:author,
                content:content,
                hits:hits,
                image:image,
                video:video
            }
        }).then(res=>{
            wx.showToast({
              title: '修改成功',
            })
        })
    },

    delete(){
        let title=this.data.deleteTitle
        wx.cloud.database().collection("demolist").where({title:title})
        .remove().then(res=>{
            wx.showToast({
              title: '删除成功',
            })
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