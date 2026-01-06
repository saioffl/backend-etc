// Clean ur Ass
// Wipe it 
// Flush it 
// Use Promise !


const cleanAss = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cleaned ASS !!")
            resolve();
        }, 3000)
        

    })
}

cleanAss()


const wipeIt = (hasWater) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(hasWater)
                resolve("Wiped ASS !!");
            elif(!hasWater) 
                reject("No h20 !")
        }, 2000);
    })
}
