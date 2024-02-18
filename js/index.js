import { getData } from "./fetch.js";

const body = document.querySelector("body");

const data = await getData();

const sortData = data.sort((a, b) => a.sorthead - b.sorthead);

function start(params) {
  const directory = {};
  const root = document.createElement("div");
  body.append(root);
  // Создал объект директория, всеми элементами и создал копию массива.
  const newData = params.reduce((acc, element) => {
    const div = element.head === null ? `null${element.id}` : element.id;
    directory[div] = document.createElement("div");
    directory[div].classList.add("defolt");
    directory[div].innerHTML = `${element.name} ${element.price}`;
    acc?.push(element);
    return acc;
  }, []);

  // Рекурсивная функция, строить дерево из элементов
  function recursion(par) {
    if (par.length <= 0) {
      return;
    }
    const dir = par[0].head === null ? `null${par[0].id}` : par[0].head;
    const div = `null${par[0].head}`
    const id = par[0].id


    if (par[0].head === null) {
      root.append(directory[dir]);
      directory[dir].classList.add("right");
      par.shift();
      return recursion(par);
    }

    if (directory[div]) {
      directory[div].append(directory[id]);
      directory[id].classList.add("right");
    }

    directory[dir]?.append(directory[id]);
    directory[id]?.classList.add("right");
    par.shift();
    return recursion(par);
  }
  recursion(newData);
}

start(sortData);
