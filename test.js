const products = [{ name: 'Pisang' }, { name: 'Pepaya' }, { name: 'Pisang' }, { name: 'Pepaya' }, { name: 'Pisang' }, { name: 'Pepaya' }];

products[0]; // O(1)

// O(n) Liniar: Waktu pemrosesannya dipengaruhi oleh banyaknya data
for(let item of products){
    console.log(item);
}




const arrNumbers = [100, 3, 5, 200, 500, 1];

let max = arrNumbers[0]; // 500

for(let item of arrNumbers){
    if(item > max){
        max = item
    }
}