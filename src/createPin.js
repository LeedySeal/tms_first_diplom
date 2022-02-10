export let pins = [];

export function getPins() {
  fetch("https://62027eb74d21c200170b9753.mockapi.io/pin")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        createPin(item);
      });
    });
}

export function createPin(pin) {
  const wrapper = document.querySelector(".pinsWrapper");
  const pinContainer = document.createElement("div");
  pinContainer.classList.add("pinContainer");
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
}
