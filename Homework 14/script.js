arr = ["fish", "dog", "cat", "monkey", "spider"]

function removeElement(arr, item) {
    indexElement = arr.indexOf(item);
    arr = arr.splice(indexElement, 1)
}

removeElement(arr, "cat");
console.log(arr);