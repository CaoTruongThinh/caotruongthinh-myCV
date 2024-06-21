// CSS cho các level trong phần Kỹ năng và Ngôn ngữ
let lv1 = document.querySelectorAll(".lv1");
for (let i = 0; i < lv1.length; i++) {
  let level = lv1[i].querySelectorAll(".level-lv");
  level[0].classList.add("level-lv-active");
}
let lv2 = document.querySelectorAll(".lv2");
for (let i = 0; i < lv2.length; i++) {
  let level = lv2[i].querySelectorAll(".level-lv");
  level[0].classList.add("level-lv-active");
  level[1].classList.add("level-lv-active");
}
let lv3 = document.querySelectorAll(".lv3");
for (let i = 0; i < lv3.length; i++) {
  let level = lv3[i].querySelectorAll(".level-lv");
  level[0].classList.add("level-lv-active");
  level[1].classList.add("level-lv-active");
  level[2].classList.add("level-lv-active");
}
//Chức năng ẩn thông tin cá nhân
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let form1 = document.querySelector(".infor-personal-form1");
let form2 = document.querySelector(".infor-personal-form2");
let emailText = document.querySelector("#email");
let submitButton = document.querySelector(".btn");

submitButton.addEventListener("click", function () {
  let test = regex.test(emailText.value);
  console.log(test);
  console.log(emailText.value);
  if (test === true) {
    form1.classList.toggle("hidden");
    form2.classList.toggle("hidden");
  } else {
    alert("Email không hợp lệ");
  }
});

//Chức năng ẩn thông tin nghề nghiệp
let tabEl = document.querySelectorAll(".infor-job-tab");
let tabBodyEl = document.querySelectorAll(".tab-body-bd");
let tabViewMoreEl = document.querySelectorAll(".tab-viewmore");
let tabViewLessEl = document.querySelectorAll(".tab-viewless");

for (let i = 0; i < tabEl.length; i++) {
  tabEl[i].addEventListener("click", function () {
    if (tabBodyEl[i].classList.contains("hidden") == true) {
      tabBodyEl[i].classList.toggle("hidden");
      tabViewMoreEl[i].classList.toggle("hidden");
      tabViewLessEl[i].classList.toggle("hidden");
      tabEl[i].setAttribute("style", "height: 100%");
    } else {
      tabBodyEl[i].classList.toggle("hidden");
      tabViewLessEl[i].classList.toggle("hidden");
      tabViewMoreEl[i].classList.toggle("hidden");
      tabEl[i].setAttribute("style", "height: fit-content");
    }
  });
  tabEl[i].addEventListener("mouseenter", function () {
    if (tabBodyEl[i].classList.contains("hidden") == true) {
      tabViewMoreEl[i].classList.toggle("hidden");
    } else {
      tabViewLessEl[i].classList.toggle("hidden");
    }
  });
  tabEl[i].addEventListener("mouseleave", function () {
    if (tabViewMoreEl[i].classList.contains("hidden") == false)
      tabViewMoreEl[i].classList.toggle("hidden");
    if (tabViewLessEl[i].classList.toggle("hidden") == false)
      tabViewLessEl[i].classList.toggle("hidden");
  });
}
//chuyển hướng trang project-charter khi click vào dự án

let projectTabEl = document.querySelectorAll(".project-tab");
console.log(projectTabEl);

for (let i = 0; i < projectTabEl.length; i++) {
  projectTabEl[i].addEventListener("click", function () {
    window.location.href = "./project-charter.html";
  });
}
