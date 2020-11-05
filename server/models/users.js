var con = global.con

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await con.query(`SELECT * FROM users`);
}
module.exports = { getAll }