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
  openModalSave(imgButtonSave);
  closeModalSave();
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

function openModalSave(imgButtonSave) {
  const saveModal = document.querySelector(".saveModal");
  imgButtonSave.addEventListener("click", () => {
    saveModal.classList.remove("modal-disable");
    saveModal.classList.add("modal-active");
    document.body.classList.add("body__notScroll");
  });
}

function closeModalSave() {
  const saveModalButton = document.querySelector(".saveModal__button");
  const saveModal = document.querySelector(".saveModal");
  saveModalButton.addEventListener("click", () => {
    saveModal.classList.remove("modal-active");
    saveModal.classList.add("modal-disable");
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
