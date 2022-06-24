// pages/first/first.js
let key = '32KBZ-L6HK3-ZZR3J-3KZEN-2D7PF-KMB3O'
let referer = '时山'
let endPoint = JSON.stringify({
    'name':'岳麓山',
    'latitude': 28.18393,
    'longitude': 112.935489
})
const location = JSON.stringify({
    'latitude': 28.18393,
    'longitude': 112.935489
  });
const category = '生活服务,娱乐休闲';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[],
        title:''
    },

    getData(num=0,page=0){
        wx.cloud.callFunction({
            name:"demoGetList",
            data:{
                num:num,
                page:page
            }
        }).then(res=>{
            this.setData({
                dataList:this.data.dataList.concat(res.result.data)
            })
        })
    },

    onChange(e){
        this.setData({
            title:e.detail
        })
    },

    onClick(){
        let title=this.data.title       
        let dataList=this.data.dataList
        for(let i=0;i<=dataList.length;i++){
            if(title==dataList[i].title){
                let id = dataList[i]._id
                let index = i
                wx.cloud.callFunction({
                    name:"incHits",
                    data:{
                        id:id
                    }
                }).then(res=>{
                    var newData=this.data.dataList;
                    newData[index].hits+=1;
                    this.setData({
                        dataList:newData
                    })
                })
                id = JSON.stringify(id)
                index =JSON.stringify(index)
                wx.navigateTo({
                url: '../data/data?id='+id+'&index='+index,
                })
                wx.setStorageSync('dataList', this.data.dataList)
            }
        }
    },

    route(){
        wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        })
    },

    point(){
        wx.navigateTo({
            url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
          })
    },

    subway(){
        wx.navigateTo({
            url: 'plugin://subway/index?key=' + key + '&referer=' + referer
          })
    },

    clickRow(e){
        let idx=e.currentTarget.dataset.idx;
        console.log(e.currentTarget.dataset)
        wx.cloud.callFunction({
            name:"incHits",
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
        let index =JSON.stringify(idx)
        wx.navigateTo({
          url: '../data/data?id='+id+'&index='+index,
        })
        wx.setStorageSync('dataList', this.data.dataList)
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getData();
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
        var page=this.data.dataList.length
        this.getData(5,page)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})