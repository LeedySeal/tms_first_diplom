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
// ];
export function getPins() {
  fetch("https://62027eb74d21c200170b9753.mockapi.io/pin")
    .then((response) => response.json())
    .then(
      (data) => {
        data.forEach((item) => {
          createPin(item);
          // console.log(item);
        });
      }
      // arr.forEach((item) => {
      //   createPin(item);
      // });
      // }
    );
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
  openModal(imgButtonComplain);
  closeModal();
}

function hideElement(hideButton, pinId) {
  hideButton.addEventListener("click", () => {
    document.getElementById(`pin-${pinId}`).classList.add("hideElement");
  });
}

function openModal(imgButtonComplain) {
  const modal = document.querySelector(".modal");
  imgButtonComplain.addEventListener("click", () => {
    modal.classList.remove("modal-disable");
    modal.classList.add("modal-active");
  });
}

function closeModal() {
  const closeButton = document.querySelector(".modal__delay");
  const modal = document.querySelector(".modal");
  closeButton.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal-disable");
  });
}
