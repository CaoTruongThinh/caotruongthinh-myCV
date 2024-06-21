"use strict";

// CSS cho các level trong phần Kỹ năng và Ngôn ngữ
var lv1 = document.querySelectorAll(".lv1");

for (var i = 0; i < lv1.length; i++) {
  var level = lv1[i].querySelectorAll(".level-lv");
  level[0].classList.add("level-lv-active");
}

var lv2 = document.querySelectorAll(".lv2");

for (var _i = 0; _i < lv2.length; _i++) {
  var _level = lv2[_i].querySelectorAll(".level-lv");

  _level[0].classList.add("level-lv-active");

  _level[1].classList.add("level-lv-active");
}

var lv3 = document.querySelectorAll(".lv3");

for (var _i2 = 0; _i2 < lv3.length; _i2++) {
  var _level2 = lv3[_i2].querySelectorAll(".level-lv");

  _level2[0].classList.add("level-lv-active");

  _level2[1].classList.add("level-lv-active");

  _level2[2].classList.add("level-lv-active");
} //Chức năng ẩn thông tin cá nhân


var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var form1 = document.querySelector(".infor-personal-form1");
var form2 = document.querySelector(".infor-personal-form2");
var emailText = document.querySelector("#email");
var submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", function () {
  var test = regex.test(emailText.value);
  console.log(test);
  console.log(emailText.value);

  if (test === true) {
    form1.classList.toggle("hidden");
    form2.classList.toggle("hidden");
  } else {
    alert("Email không hợp lệ");
  }
}); //Chức năng ẩn thông tin nghề nghiệp

var tabEl = document.querySelectorAll(".infor-job-tab");
var tabBodyEl = document.querySelectorAll(".tab-body-bd");
var tabViewMoreEl = document.querySelectorAll(".tab-viewmore");
var tabViewLessEl = document.querySelectorAll(".tab-viewless");

var _loop = function _loop(_i3) {
  tabEl[_i3].addEventListener("click", function () {
    if (tabBodyEl[_i3].classList.contains("hidden") == true) {
      tabBodyEl[_i3].classList.toggle("hidden");

      tabViewMoreEl[_i3].classList.toggle("hidden");

      tabViewLessEl[_i3].classList.toggle("hidden");

      tabEl[_i3].setAttribute("style", "height: 100%");
    } else {
      tabBodyEl[_i3].classList.toggle("hidden");

      tabViewLessEl[_i3].classList.toggle("hidden");

      tabViewMoreEl[_i3].classList.toggle("hidden");

      tabEl[_i3].setAttribute("style", "height: fit-content");
    }
  });

  tabEl[_i3].addEventListener("mouseenter", function () {
    if (tabBodyEl[_i3].classList.contains("hidden") == true) {
      tabViewMoreEl[_i3].classList.toggle("hidden");
    } else {
      tabViewLessEl[_i3].classList.toggle("hidden");
    }
  });

  tabEl[_i3].addEventListener("mouseleave", function () {
    if (tabViewMoreEl[_i3].classList.contains("hidden") == false) tabViewMoreEl[_i3].classList.toggle("hidden");
    if (tabViewLessEl[_i3].classList.toggle("hidden") == false) tabViewLessEl[_i3].classList.toggle("hidden");
  });
};

for (var _i3 = 0; _i3 < tabEl.length; _i3++) {
  _loop(_i3);
} //chuyển hướng trang project-charter khi click vào dự án


var projectTabEl = document.querySelectorAll(".project-tab");
console.log(projectTabEl);

for (var _i4 = 0; _i4 < projectTabEl.length; _i4++) {
  projectTabEl[_i4].addEventListener("click", function () {
    window.location.href = "./project-charter.html";
  });
}