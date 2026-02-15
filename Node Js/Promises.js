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
const wipeIt = (hasWater) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hasWater = 1;
            if (hasWater) {
                console.log("Wiped ASS !!")
                resolve();
            }
            else {
                console.log("No h20 !!")
                reject()
            }
        }, 4000);
    })
}
cleanAss()
wipeIt()


