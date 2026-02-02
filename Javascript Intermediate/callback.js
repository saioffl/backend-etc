function hello(){
    console.log('hi')
}
function hi(callback){
    console.log('Hyy')
    callback()
}
hi(hello)