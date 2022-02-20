export let pins = [];

// let arr = [
//   {
//     image:
//       "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//     avatar:
//       "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",

//     description: "lotre jndni d",
//     id: 1,
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//     avatar:
//       "https://media.istockphoto.com/photos/this-vacation-is-just-what-we-needed-picture-id639579050?b=1&k=20&m=639579050&s=170667a&w=0&h=eXDg8mhdvjn5jBxd5g3c1tt6D_ts9sVjtpF-FUBTq34=",
//     description: "fhjsij djoijojon",
//     id: 2,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 3,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 4,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 5,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 6,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 7,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 8,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 9,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 10,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 11,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 12,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 13,
//   },
// ];
export function getPins() {
  fetch("https://62027eb74d21c200170b9753.mockapi.io/pin")
    .then((response) => response.json())
    .then(
      (data) => {
        findPins(data);
        pins = data;
        data.forEach((item) => {
          createPin(item);

          // console.log(item);
        });
      }
      // arr.forEach((item) => {
      //   createPin(item);
    ); // });
}

export function createPin(pin) {
  const wrapper = document.querySelector(".pinsWrapper");
  const pinContainer = document.createElement("div");
  pinContainer.classList.add("pinContainer");
  pinContainer.setAttribute("id", `pin-${pin.id}`);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  const pinImg = new Image();
  pinImg.classList.add("pinImg");
  const desWraper = document.createElement("div");
  desWraper.classList.add("description__wraper");
  const avatar = new Image();
  avatar.classList.add("avatar");
  const description = document.createElement("p");
  description.classList.add("description");
  const imgButtonSave = document.createElement("button");
  imgButtonSave.classList.add("img__button", "img__save");
  const imgButtonHide = document.createElement("button");
  imgButtonHide.classList.add("img__button", "img__hide");
  const imgButtonComplain = document.createElement("button");
  imgButtonComplain.classList.add("img__button", "img__complain");
  const pinShadow = document.createElement("div");
  pinShadow.classList.add("img__shadow");

  wrapper.append(pinContainer);
  pinContainer.append(imgContainer);
  imgContainer.append(pinImg);
  imgContainer.append(pinShadow);
  pinShadow.append(imgButtonSave);
  pinShadow.append(imgButtonHide);
  pinShadow.append(imgButtonComplain);
  pinContainer.append(desWraper);
  desWraper.append(avatar);
  desWraper.append(description);

  pinImg.src = pin.image;
  avatar.src = pin.avatar;
  description.innerText = pin.description;
  imgButtonSave.innerText = "Сохранить";
  imgButtonHide.innerText = "Скрыть пин со страницы";
  imgButtonComplain.innerText = "Пожаловаться";

  const size = ["small", "medium", "large"];

  switch (size[Math.round(Math.random() * 2)]) {
    case "small":
      imgContainer.classList.add("imgContainer__small");
      pinShadow.classList.add("img__shadow-small");
      pinContainer.classList.add("pinContainer-small");
      break;
    case "medium":
      imgContainer.classList.add("imgContainer__medium");
      pinShadow.classList.add("imgContainer__medium");
      pinContainer.classList.add("pinContainer-medium");
      break;
    case "large":
      imgContainer.classList.add("imgContainer__large");
      pinShadow.classList.add("img__shadow-large");
      pinContainer.classList.add("pinContainer-large");
      break;
  }
  hideElement(imgButtonHide, pin.id);
  openModalComplain(imgButtonComplain);
  closeModalComplain();
  sendModalComplain();
  openModalSave(imgButtonSave, pin.id);
}

function hideElement(hideButton, pinId) {
  hideButton.addEventListener("click", () => {
    document.getElementById(`pin-${pinId}`).classList.add("hideElement");
  });
}

function openModalComplain(imgButtonComplain) {
  const modal = document.querySelector(".modal");
  imgButtonComplain.addEventListener("click", () => {
    modal.classList.remove("modal-disable");
    modal.classList.add("modal-active");
    document.body.classList.add("body__notScroll");
  });
}

function closeModalComplain() {
  const closeComplainButton = document.querySelector(".modal__delay");
  const modal = document.querySelector(".modal");
  closeComplainButton.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal-disable");
    document.body.classList.remove("body__notScroll");
  });
}

function sendModalComplain() {
  const sendComplainButton = document.querySelector(".modal__send");
  const modal = document.querySelector(".modal");
  sendComplainButton.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal-disable");
    document.body.classList.remove("body__notScroll");
  });
}

function findPins(pin) {
  const input = document.querySelector(".header__find");
  const pinsWrapper = document.querySelector(".pinsWrapper");
  input.addEventListener("input", (event) => {
    let newData = [];
    let value = event.target.value;
    newData = pin.filter((el) => el.description.includes(value));
    console.log(newData);
    pinsWrapper.innerHTML = "";
    newData.forEach((el) => {
      createPin(el);
    });
  });
}

function openModalSave(imgButtonSave, pinId) {
  const saveModal = document.querySelector(".saveModal");
  const saveModalWindow = document.querySelector(".saveModal__window");
  imgButtonSave.addEventListener("click", () => {
    saveModalWindow.innerHTML = "";
    saveModal.classList.remove("modal-disable");
    saveModal.classList.add("modal-active");
    document.body.classList.add("body__notScroll");

    addContentToModalSave(pinId);
  });
}

function addContentToModalSave(pinId) {
  const saveModalWindow = document.querySelector(".saveModal__window");
  saveModalWindow.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("title__container");

  const saveModalTitle = document.createElement("h3");
  saveModalTitle.classList.add("saveModal__title");
  saveModalTitle.innerText = "Сохранить пин";

  // стрелочка выхода

  const lineBox = document.createElement("div");
  lineBox.classList.add("saveModal__lineBox");

  const upLine = document.createElement("div");
  upLine.classList.add("saveModal__upLine");

  const downLine = document.createElement("div");
  downLine.classList.add("saveModal__downLine");

  const createDeskButton = document.createElement("button");
  createDeskButton.classList.add("saveModal__createButton");
  createDeskButton.innerText = "Создать доску";

  const saveModalBoards = document.createElement("div");
  saveModalBoards.classList.add("saveModal__boards");

  if (localStorage.getItem("boards")) {
    let boardsArr = JSON.parse(localStorage.getItem("boards"));

    boardsArr.forEach((obj, index) => {
      const deskContainer = document.createElement("div");
      deskContainer.classList.add("saveModal__boardsContainer");
      const deskName = document.createElement("p");
      deskName.classList.add("saveModal__boardsTitle");
      deskName.innerText = obj.name;

      deskContainer.addEventListener("click", () => {
        const modalSave = document.querySelector(".saveModal");

        if (boardsArr[index].pins.find((item) => item == pinId)) {
          modalSave.classList.remove("modal-active");
          modalSave.classList.add("modal-disable");
          document.body.classList.remove("body__notScroll");
        } else {
          boardsArr[index].pins.push(pinId);
          localStorage.setItem("boards", JSON.stringify(boardsArr));

          modalSave.classList.remove("modal-active");
          modalSave.classList.add("modal-disable");
          document.body.classList.remove("body__notScroll");
        }
      });

      saveModalBoards.append(deskContainer);
      deskContainer.append(deskName);
    });
  }

  saveModalWindow.append(container);
  container.append(saveModalTitle);
  container.prepend(lineBox);
  lineBox.append(upLine);
  lineBox.append(downLine);

  saveModalWindow.append(saveModalBoards);
  saveModalWindow.append(createDeskButton);

  addContentToModalCreateDesk(pinId);
  closeModalSave();
}

function closeModalSave() {
  const lineBox = document.querySelector(".saveModal__lineBox");
  const modalSave = document.querySelector(".saveModal");

  lineBox.addEventListener("click", () => {
    modalSave.classList.remove("modal-active");
    modalSave.classList.add("modal-disable");
    document.body.classList.remove("body__notScroll");
  });
}

function addContentToModalCreateDesk(pinId) {
  const saveModalWindow = document.querySelector(".saveModal__window");
  const createDeskButton = document.querySelector(".saveModal__createButton");

  createDeskButton.addEventListener("click", () => {
    saveModalWindow.innerHTML = "";

    const createDeskTitle = document.createElement("h3");
    createDeskTitle.classList.add("saveModal__title", "saveModal__CreateTitle");
    createDeskTitle.innerText = "Создать доску";
    saveModalWindow.append(createDeskTitle);

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("saveModal__inputContainer");
    saveModalWindow.append(inputContainer);

    const label = document.createElement("label");
    label.innerText = "Название";
    label.classList.add("saveModal__label");
    inputContainer.append(label);

    const input = document.createElement("input");
    input.classList.add("saveModal__input");
    input.setAttribute("placeholder", "Например, «Рецепты» или «Причёски»");
    label.append(input);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("saveModal__buttonContainer");
    saveModalWindow.append(buttonContainer);

    const delayButton = document.createElement("button");
    delayButton.classList.add("saveModal__delayButton", "saveModal__buttons");
    delayButton.innerText = "Отмена";
    buttonContainer.append(delayButton);

    const readyButton = document.createElement("button");
    readyButton.classList.add("saveModal__readyButton", "saveModal__buttons");
    readyButton.innerText = "Готово";
    buttonContainer.append(readyButton);

    closeModalCreateDesk();
    createNewDesk(pinId);
  });
}

function closeModalCreateDesk() {
  const delayButton = document.querySelector(".saveModal__delayButton");
  const modalSave = document.querySelector(".saveModal");

  delayButton.addEventListener("click", () => {
    modalSave.classList.remove("modal-active");
    modalSave.classList.add("modal-disable");
    document.body.classList.remove("body__notScroll");
  });
}

function createNewDesk(pinId) {
  const readyButton = document.querySelector(".saveModal__readyButton");
  const input = document.querySelector(".saveModal__input");

  readyButton.addEventListener("click", () => {
    if (localStorage.getItem("boards")) {
      let boards = JSON.parse(localStorage.getItem("boards"));
      boards.push({
        name: input.value,
        deskId: `${Math.random()}`,
        pins: [pinId],
      });
      localStorage.setItem("boards", JSON.stringify(boards));
    } else {
      localStorage.setItem(
        "boards",
        JSON.stringify([
          { name: input.value, deskId: `${Math.random()}`, pins: [pinId] },
        ])
      );
    }
    const modalSave = document.querySelector(".saveModal");
    modalSave.classList.remove("modal-active");
    modalSave.classList.add("modal-disable");
    document.body.classList.remove("body__notScroll");

    createDeskSelect();
  });
}

function createDeskSelect() {
  const select = document.querySelector(".header__select");
  select.innerHTML = "";

  const mainOption = document.createElement("option");
  select.prepend(mainOption);
  mainOption.innerText = "Доски";

  let boards = JSON.parse(localStorage.getItem("boards"));
  if (boards) {
    boards.forEach((obj) => {
      const option = document.createElement("option");
      option.classList.add("header__option");
      select.append(option);
      deskFilter(obj, option);

      option.innerText = obj.name;
    });
  }
}

createDeskSelect();

function deskFilter(obj, option) {
  option.addEventListener("selected", () => {
    let filteredArray = pins.filter((item) => obj.pins.includes(item.id));
    const pinsWrapper = document.querySelector(".pinsWrapper");
    pinsWrapper.innerHTML = "";

    console.log(filteredArray);

    createPin(filteredArray);
  });
}
