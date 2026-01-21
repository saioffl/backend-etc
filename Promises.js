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

int numOne = 1 ;
float havaChut = 1.32 ;

String onlyInt = numOne + havaChut ;
System.out.println(onlyInt)


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


