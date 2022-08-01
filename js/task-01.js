const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);

const itemArr = [...item];

itemArr.map((item) => {
  console.log(`Category:${item.firstElementChild.textContent}`),
    console.log(`Elements:${item.lastElementChild.children.length}`);
});

// const item = document.querySelector("#categories");
// console.dir(item.childNodes);
// const childs = [...item.children];
// console.log(childs);
// child.forEach((item) => console.dir(item.textContent));
// const copy = childs.map((item) => item);
// console.log(copy);
// ************************************************************
// const ul = document.querySelectorAll("#categories");
// console.log(ul);

// const ulLength = Array.from(ul);
// console.log(ulLength);

// ulLength.map((item) => item);
// console.log(ulLength);
// ******************************************************************

// const ul = document.querySelector("#categories");
// console.dir(ul.childNodes);

// const ulArr = [...ul.childNodes];
// console.log(ulArr);
// // ulArr.forEach((item) => console.log(item));
// ulArr.filter((item, index, array) => array.indexOf(item) === item);
// console.log(ulArr);
