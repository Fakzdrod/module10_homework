let get = prompt("напиши число");
console.log(get);

if ((typeof(+get) == 'number') && (!isNaN(+get))){
    if (get % 2 === 0) {
        console.log("четное");
    } else {
        console.log("нечетное");
    }
} else {
    console.log("Упс, кажется вы ошиблись");
}
