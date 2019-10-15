function search(arr){
    var hasil = 0, i;
    for (i = 0; arr.length > i; i += 1){
        hasil += arr[i];
    }
    return searchAkhir = Math.round(hasil / arr.length);
}
console.log(search([1, 2, 3, 4, 5])); 
console.log(search([3, 5, 7, 5, 3])); 
console.log(search([6, 5, 4, 7, 3])); 
console.log(search([1, 3, 3])); 
console.log(search([7, 7, 7, 7, 7]));
