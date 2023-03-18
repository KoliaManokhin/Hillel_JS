function generateList(array) {
    const ul = document.createElement("ul");

    array.forEach((item) => {
        if (Array.isArray(item)) {
            const liSecond = document.createElement("li");
            const ulSecond = document.createElement("ul");

            item.forEach(itemSecond => {
                const liThird = document.createElement("li");
                liThird.innerText = itemSecond;

                ulSecond.append(liThird);
                liSecond.append(ulSecond);
                ul.append(liSecond);
            });

        } else {
            const li = document.createElement("li");
            li.innerText = item;
            ul.append(li);
        };
    });
    document.body.append(ul);
};
const arrayUser = [1, 2, [3], 4, [5, 6], 7];
generateList(arrayUser);
