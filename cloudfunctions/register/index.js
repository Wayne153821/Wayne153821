// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    var name=event.name;
    var id=event.id;
    var password=event.password;
    return await db.collection("user").add({
        data:{
            name:name,
            id:id,
            password:password
        }
    })
}