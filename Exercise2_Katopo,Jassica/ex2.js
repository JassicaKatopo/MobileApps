//1. Callback
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(function(){
        console.log("Sarapan");
        callback();
    },3000);
}
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);

//2. Promise
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

//3. Fetch
function ambilDataUSer(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((user) => console.log(user))
    
};

ambilDataUSer();