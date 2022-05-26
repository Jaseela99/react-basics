const array =[{
    id:1,
    name:'React',
},{
    id:2,
    name:'Angular',
}]

const Iindes = (arr) => {
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i].id;
    }
    return sum;

}
console.log(Iindes(array));


console.log(false == '0')
console.log(false === '0')


const sumofId = (arr) => {
    return arr.reduce((acc,curr) => {
        return acc += curr.id;
    },0)
}

console.log(sumofId(array));