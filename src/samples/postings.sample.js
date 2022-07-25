var animation = false;
var countPlaces = 0;
var placesLoad = 'no';
var pRegion = 0;
var pType = '';
var pMore = '';
var tempL1 = '';
var tempL2 = '';
var l1 = 0;
var l2 = 0;
var load = 'no';
var online = false;
var pSelected = '';
var mTypeID = [];
var mPosition = [];
var mSelected = [];
var postsImg = [];
var vGlobal = 1;

function goBack() {
  if (load == 'no') {
    animate = false;
    document.getElementById('load').style.display = 'none';
    var pOn = document.getElementById('page').innerHTML;
    if (pOn != 1) {
      load = 'yes';
      document.getElementById('fillPlace').style.display = 'block';
      document.getElementById('filtr').style.display = 'none';
      document.getElementById('fillPlace').innerHTML = '<br>';
      animate = true;
      o.c = 1;
      pOn--;
      document.getElementById('page').innerHTML = pOn;
      document.getElementById('page2').innerHTML = pOn;
      document.getElementById('page3').innerHTML = pOn;

      loadPlace();
    }
  }
}

function goForward() {
  if (load == 'no' && countPlaces == 18) {
    load = 'yes';
    document.getElementById('fillPlace').style.display = 'none';
    document.getElementById('filtr').style.display = 'none';
    var pOn = document.getElementById('page').innerHTML;
    pOn++;
    document.getElementById('page').innerHTML = pOn;
    document.getElementById('page2').innerHTML = pOn;
    document.getElementById('page3').innerHTML = pOn;
    loadPlace();
  }
}

var delete_cookie = function (name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function postPlace(
  name,
  phone,
  lat,
  lng,
  postName,
  postDesc,
  more,
  type,
  id,
  operation,
  pic,
  counter,
  f1,
  f2,
  f3,
  f4,
  rating,
) {
  operation = operation * -1;
  operation -= 10;
  var ttpost = 4 * (operation - 1);
  console.log(name);
  console.log(phone);
  console.log(postName);
  console.log(postDesc);
  console.log(id);
  console.log(operation);
  console.log(pic);
  console.log(counter);
  try {
    var addMore = '';
    var addType = '';
    var addTime = '';
    if (type != '') {
      var tempCounter = 0;
      if (type.includes('x1x')) {
        addType += 'АВТО';
        tempCounter++;
      }
      if (type.includes('x2x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'НЕДВИЖИМОСТЬ';
        tempCounter++;
      }
      if (type.includes('x3x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ОДЕЖДА';
        tempCounter++;
      }
      if (type.includes('x4x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'МЕБЕЛЬ';
        tempCounter++;
      }
      if (type.includes('x5x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ЭЛЕКТРОНИКА';
        tempCounter++;
      }
      if (type.includes('x6x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ТЕХНИКА';
        tempCounter++;
      }
      if (type.includes('x7x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ДОМ/ДАЧА';
        tempCounter++;
      }
      if (type.includes('x8x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'СТРОИТЕЛЬСТВО';
        tempCounter++;
      }
      if (type.includes('x9x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'РАБОТА/ОФИС';
        tempCounter++;
      }
      if (type.includes('x10x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'СПОРТ/ТУРИЗМ';
        tempCounter++;
      }
      if (type.includes('x11x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ЗДОРОВЬЕ/УХОД';
        tempCounter++;
      }
      if (type.includes('x12x')) {
        if (tempCounter > 0) {
          addType += ', ';
        }
        addType += 'ПРОЧЕЕ';
        tempCounter++;
      }
    }
    addMore += '<div class="moreContainer">';
    if (more.includes('x1x')) {
      addMore += '<div class="tag">Даром</div>';
    } //else{addMore+='<div class="tag">Даром</div>';}
    if (more.includes('x2x')) {
      addMore += '<div class="tag">Обмен</div>';
    } //else{addMore+='<div class="tag">Обмен</div>';}
    if (more.includes('x3x')) {
      addMore += '<div class="tag">Аренда</div>';
    } //else{addMore+='<div class="tag">Аренда</div>';}
    if (more.includes('x4x')) {
      addMore += '<div class="tag">Продажа</div>';
    } //else{addMore+='<div class="tag">Продажа</div>';}
    if (more.includes('x5x')) {
      addMore += '<div class="tag">Запчасти</div>';
    } //else{addMore+='<div class="tag">Запчасти</div>';}
    if (more.includes('x6x')) {
      addMore += '<div class="tag">Инструмент</div>';
    } //else{addMore+='<div class="tag">Инструмент</div>';}
    if (more.includes('x7x')) {
      addMore += '<div class="tag">Мужское</div>';
    } //else{addMore+='<div class="tag">Мужское</div>';}
    if (more.includes('x8x')) {
      addMore += '<div class="tag">Женское</div>';
    } //else{addMore+='<div class="tag">Женское</div>';}
    if (more.includes('x9x')) {
      addMore += '<div class="tag">Детское</div>';
    } //else{addMore+='<div class="tag">Детское</div>';}
    if (more.includes('x10x')) {
      addMore += '<div class="tag">Бизнес</div>';
    } //else{addMore+='<div class="tag">Бизнес</div>';}
    if (more.includes('x11x')) {
      addMore += '<div class="tag">Б/у</div>';
    } //else{addMore+='<div class="tag">Б/у</div>';}
    if (more.includes('x12x')) {
      addMore += '<div class="tag">Новое</div>';
    } //else{addMore+='<div class="tag">Новое</div>';}
    if (more.includes('x13x')) {
      addMore += '<div class="tag">Долгосрочно</div>';
    } //else{addMore+='<div class="tag">Долгосрочно</div>';}
    if (more.includes('x14x')) {
      addMore += '<div class="tag">Временно</div>';
    } //else{addMore+='<div class="tag">Временно</div>';}
    if (more.includes('x15x')) {
      addMore += '<div class="tag">Ретро</div>';
    } //else{addMore+='<div class="tag">Ретро</div>';}
    if (more.includes('x16x')) {
      addMore += '<div class="tag">Люкс</div>';
    } //else{addMore+='<div class="tag">Люкс</div>';}
    if (more.includes('x17x')) {
      addMore += '<div class="tag">Находки</div>';
    } //else{addMore+='<div class="tag">Находки</div>';}
    if (more.includes('x18x')) {
      addMore += '<div class="tag">Животные</div>';
    } //else{addMore+='<div class="tag">Животные</div>';}
    addMore += '</div>';

    var tempPlace =
      '<input hidden value="' +
      lat +
      '" id="' +
      counter +
      'lat"><input hidden value="' +
      lng +
      '" id="' +
      counter +
      'lon"><input hidden id="pID' +
      counter +
      '" value="' +
      id +
      '"><input hidden id="ppID' +
      counter +
      '" value="' +
      ttpost +
      '"><input hidden id="ff1' +
      counter +
      '" value="' +
      f1 +
      '"><input hidden id="ff2' +
      counter +
      '" value="' +
      f2 +
      '"><input hidden id="ff3' +
      counter +
      '" value="' +
      f3 +
      '"><input hidden id="ff4' +
      counter +
      '" value="' +
      f4 +
      '">';
    tempPlace += '<div id="pWrap' + counter + '" class="placeWrap">';
    tempPlace +=
      '<div class="placeInfo"><div class="placeType"><a>' +
      addType +
      '</a></div><div class="placeDistance"><img src="images/walking.png"><a href="" id="' +
      counter +
      'coords">??m</a></div></div>';
    tempPlace +=
      '<div onclick="openText(this)" id="nameID' +
      counter +
      '" class="nameWrap"><div class="placeName">' +
      postName +
      '</div></div><br>';
    //tempPlace+='<div class="placeLocation">'+location+'</div>';
    tempPlace +=
      '<div class="description" onclick="openText(this)">' +
      postDesc +
      '</div>';
    tempPlace +=
      '<div class="postImages3"><img onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ',' +
      f1 +
      ',' +
      f2 +
      ',' +
      f3 +
      ',' +
      f4 +
      ')" style="display:none;" id="' +
      counter +
      'lilppic1" src="images/pic.png"><img onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ',' +
      f1 +
      ',' +
      f2 +
      ',' +
      f3 +
      ',' +
      f4 +
      ')" style="display:none;" id="' +
      counter +
      'lilppic2" src="images/pic.png" ><img onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ',' +
      f1 +
      ',' +
      f2 +
      ',' +
      f3 +
      ',' +
      f4 +
      ')" style="display:none;" id="' +
      counter +
      'lilppic3" src="images/pic.png"><img style="display:none;" onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ',' +
      f1 +
      ',' +
      f2 +
      ',' +
      f3 +
      ',' +
      f4 +
      ')" id="' +
      counter +
      'lilppic4" src="images/pic.png"></div>';
    tempPlace +=
      '<a class="btnMenu"  href="https://www.google.com/maps/dir/?api=1&origin=' +
      l1 +
      ',' +
      l2 +
      '&destination=' +
      lat +
      ',' +
      lng +
      '&travelmode=driving" target="_blank"><div class="menuImageWrap"><img src="images/map.png"></div><div class="menuName">Карта</div></a>';
    tempPlace +=
      '<a class="btnMenu" onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ',' +
      f1 +
      ',' +
      f2 +
      ',' +
      f3 +
      ',' +
      f4 +
      ')" href="#photo"><div class="menuImageWrap"><img src="images/pic.png"></div><div class="menuName">Фото</div></a>';
    tempPlace +=
      '<a class="btnMenu" onclick="sendOpen(' +
      id +
      ',' +
      operation +
      ',' +
      "'" +
      postName +
      "'" +
      ')" href="#chat"><div class="menuImageWrap"><img src="images/mail.png"></div><div class="menuName">Чат</div></a>';
    tempPlace +=
      '<a class="btnMenu" onclick="openContX(' +
      "'" +
      'rate' +
      "'," +
      counter +
      ',' +
      id +
      ',' +
      operation +
      ')" href="#rate"><div class="menuImageWrap"><img src="images/star.png"></div><div class="menuName">Отзыв</div></a><br><br>';
    tempPlace +=
      '<a onclick="addPost(' +
      id +
      ',' +
      operation +
      ',' +
      "'" +
      postName +
      "'" +
      ')" class="addmore">Сохранить</a>';
    tempPlace +=
      '<a onclick="sharePost(' +
      id +
      ',' +
      operation +
      ',' +
      "'" +
      postName +
      "'" +
      ')" class="addmore">Поделится</a>';
    var link = "'tel:+" + phone + "'";
    addTime =
      '<a href="#open" class="openTime" onclick="this.innerHTML=' +
      "'+" +
      phone +
      "'" +
      ';if(this.href!=' +
      link +
      '){this.href=' +
      link +
      ';return false;}"><img src="images/phone.png">' +
      name +
      '</a>';

    if (rating >= 20) {
      tempPlace += '<img class="stars" src="images/star.png"/>';
    } else if (rating >= 16) {
      tempPlace += '<img class="stars" src="images/star-halfm2.png"/>';
    } else if (rating >= 13) {
      tempPlace += '<img class="stars" src="images/star-halfm.png"/>';
    } else if (rating >= 10) {
      tempPlace += '<img class="stars" src="images/star-half.png"/>';
    } else if (rating >= 7) {
      tempPlace += '<img class="stars" src="images/star-halfl.png"/>';
    } else if (rating >= 2) {
      tempPlace += '<img class="stars" src="images/star-halfl2.png"/>';
    } else {
      tempPlace += '<img class="stars" src="images/star-empty.png"/>';
    }
    if (rating >= 40) {
      tempPlace += '<img class="stars" src="images/star.png"/>';
    } else if (rating >= 36) {
      tempPlace += '<img class="stars" src="images/star-halfm2.png"/>';
    } else if (rating >= 33) {
      tempPlace += '<img class="stars" src="images/star-halfm.png"/>';
    } else if (rating >= 30) {
      tempPlace += '<img class="stars" src="images/star-half.png"/>';
    } else if (rating >= 27) {
      tempPlace += '<img class="stars" src="images/star-halfl.png"/>';
    } else if (rating >= 22) {
      tempPlace += '<img class="stars" src="images/star-halfl2.png"/>';
    } else {
      tempPlace += '<img class="stars" src="images/star-empty.png"/>';
    }
    if (rating >= 60) {
      tempPlace += '<img class="stars" src="images/star.png"/>';
    } else if (rating >= 56) {
      tempPlace += '<img class="stars" src="images/star-halfm2.png"/>';
    } else if (rating >= 53) {
      tempPlace += '<img class="stars" src="images/star-halfm.png"/>';
    } else if (rating >= 50) {
      tempPlace += '<img class="stars" src="images/star-half.png"/>';
    } else if (rating >= 47) {
      tempPlace += '<img class="stars" src="images/star-halfl.png"/>';
    } else if (rating >= 42) {
      tempPlace += '<img class="stars" src="images/star-halfl2.png"/>';
    } else {
      tempPlace += '<img class="stars" src="images/star-empty.png"/>';
    }
    if (rating >= 80) {
      tempPlace += '<img class="stars" src="images/star.png"/>';
    } else if (rating >= 76) {
      tempPlace += '<img class="stars" src="images/star-halfm2.png"/>';
    } else if (rating >= 73) {
      tempPlace += '<img class="stars" src="images/star-halfm.png"/>';
    } else if (rating >= 70) {
      tempPlace += '<img class="stars" src="images/star-half.png"/>';
    } else if (rating >= 67) {
      tempPlace += '<img class="stars" src="images/star-halfl.png"/>';
    } else if (rating >= 62) {
      tempPlace += '<img class="stars" src="images/star-halfl2.png"/>';
    } else {
      tempPlace += '<img class="stars" src="images/star-empty.png"/>';
    }
    if (rating >= 98) {
      tempPlace += '<img class="stars" src="images/star.png"/>';
    } else if (rating >= 96) {
      tempPlace += '<img class="stars" src="images/star-halfm2.png"/>';
    } else if (rating >= 93) {
      tempPlace += '<img class="stars" src="images/star-halfm.png"/>';
    } else if (rating >= 90) {
      tempPlace += '<img class="stars" src="images/star-half.png"/>';
    } else if (rating >= 87) {
      tempPlace += '<img class="stars" src="images/star-halfl.png"/>';
    } else if (rating >= 82) {
      tempPlace += '<img class="stars" src="images/star-halfl2.png"/>';
    } else {
      tempPlace += '<img class="stars" src="images/star-empty.png"/>';
    }
    tempPlace += '<br><br>';
    tempPlace += addTime;
    tempPlace += addMore;
    tempPlace += '<br><br></div>';

    return tempPlace;
  } catch (err) {
    console.log(err);
    return ['', counter, id];
  }
}

function addPost(ownerID, postID, postName) {
  alert('временно недоступно');
}
function sharePost(ownerID, postID, postName) {
  alert('временно недоступно');
}
function sendOpen(friendID, postID, postName) {
  console.log(friendID);
  console.log(postID);
  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $('body').css('overflow', 'hidden');
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      '<div class="chatX">Короткое сообщение<textarea id="msgID" maxlength="200" style="width:80%"></textarea></div>';
    document.getElementById('multiple').innerHTML =
      '<a onclick="closeContX();" class="closeOk" href="#closeOk">Отмена</a><a onclick="sendSM(' +
      friendID +
      ',' +
      postID +
      ');" class="closeOk" href="#closeOk">Отправить</a>';
  } else {
    $('body').css('overflow', 'hidden');
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'Вы не вошли';
  }
}

function sendSM(friendID, postID) {
  var msgSend = document.getElementById('msgID').value;
  closeContX();

  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $.ajax({
      type: 'post',
      url: 'sendMessageP.php',
      data: {
        checkL: unID,
        sendM: msgSend,
        friendID: friendID,
        postID: postID,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('havsuccesshav') >= 0) {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'сообщение отправлено';
        } else if (data.indexOf('haverrloginhav') >= 0) {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'вы не вошли';
        } else if (data.indexOf('haverrfriendshiphav') >= 0) {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML =
            'контакта не подтвержден';
        } else if (data.indexOf('haverrnotfoundhav') >= 0) {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'контакта не найден';
        } else if (data.indexOf('haverrnopost') >= 0) {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML =
            'ошибка отправки, скорее всего это ваше объявление или объявление больше недоступно';
        } else {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'неизвестная ошибка';
        }
      },
    });
  } else {
    $('body').css('overflow', 'hidden');
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'Вы не вошли';
  }
}

function locatePlace(lat1, lon1, counter) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  if (l1 == '' || l2 == '' || l1 == 0 || l2 == 0) {
    document.getElementById(counter + 'coords').innerHTML = '??km';
  } else {
    var a = parseFloat(
      0.5 -
        c((l1 - lat1) * p) / 2 +
        (c(lat1 * p) * c(l1 * p) * (1 - c((l2 - lon1) * p))) / 2,
    );
    var d = 12742 * Math.asin(Math.sqrt(a));
    d = d.toFixed(2);
    document.getElementById(counter + 'coords').innerHTML = d + ' km';
  }
}

var typewait = 'no';
function refreshOn(id) {
  document.getElementById('pFind2').value = id.value;
  document.getElementById('pFind').value = id.value;
  if (animate == false && typewait == 'no') {
    typewait = 'yes';
    setTimeout(function () {
      document.getElementById('page').innerHTML = '1';
      document.getElementById('page2').innerHTML = '1';
      document.getElementById('page3').innerHTML = '1';
      loadPlace();
      typewait = 'no';
    }, 3000);
  }
}

function openText(theText) {
  if (theText.style.maxHeight == '150vw') {
    theText.style.transition = '0.3s';
    theText.style.maxHeight = '';
  } else {
    theText.style.transition = '1s';
    theText.style.maxHeight = '150vw';
  }

  //$('body').css('overflow', 'hidden');
  //document.getElementById("contxg").style.display="block";
  //document.getElementById("errReg").innerHTML=theText.innerHTML;
}

function loadPlace() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        l1 = parseFloat(position.coords.latitude);
        l2 = parseFloat(position.coords.longitude);
        continueLoad();
      },
      function (error) {
        alert('доступ к вашей локации отклонен');
        continueLoad();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      },
    );
  } else {
    alert('ваше устройство не поддерживает определение локации');
    continueLoad();
  }
}

function continueLoad() {
  var placeID = window.location.href;
  placeID = placeID.match(new RegExp('#' + '(.*)' + 'xpost'));
  if (placeID == null) {
    placeID = 'not';
  } else {
    placeID = placeID[1];
  }
  var postID = window.location.href;
  postID = postID.match(new RegExp('xpost' + '(.*)'));
  if (postID == null || placeID == 'not') {
    postID = 'not';
  } else {
    postID = postID[1];
  }

  document.getElementById('filtr').style.display = 'none';

  var placeFind = document.getElementById('pFind').value;
  var placeType = pType;
  var placeMore = pMore;
  if (placeType == '') {
    placeType = 'all';
  }
  if (placeMore == '') {
    placeMore = 'all';
  }
  if (!isNaN(placeID)) {
    if (Math.floor(placeID) != placeID) {
      placeID = 'not';
    }
  } else {
    placeID = 'not';
  }
  $.ajax({
    type: 'post',
    url: 'lPosts.php',
    data: {
      dpPage: document.getElementById('page').innerHTML,
      dpType: placeType,
      dpFind: placeFind,
      dpMore: placeMore,
      dpID: placeID,
      pID: postID,
      fLat: l1,
      fLon: l2,
    },
    success: function (data) {
      var version = data.match(new RegExp('havv:' + '(.*)' + 'havvend:'));
      version = version[1];
      vGlobal = version;
      document
        .getElementById('viewhtml')
        .setAttribute('href', 'view.html?v=' + version);
      document
        .getElementById('promohtml')
        .setAttribute('href', 'promo.html?v=' + version);
      document
        .getElementById('profilehtml')
        .setAttribute('href', 'profile.html?v=' + version);
      console.log(data);
      document.getElementById('fillPlace').innerHTML = '';
      var dd = 'a';
      var loader = '';
      var logoLoader = [];
      var tempPlacePost = [];
      var locationLoader = [];
      var jumpCount = 0;
      for (var counter = 1; counter < 19; counter++) {
        if (counter == 10) {
          dd = 'b';
        }
        if (counter == 20) {
          dd = 'c';
        }
        if (counter == 30) {
          dd = 'd';
        }

        var d = dd + counter;

        if (
          data.indexOf(d + 'havname:') >= 0 &&
          data.indexOf(d + 'havlat:') >= 0
        ) {
          var lName = data.match(
            new RegExp(d + 'havname:' + '(.*)' + d + 'havlat:'),
          );
          lName = lName[1];
          var lPhone = data.match(
            new RegExp(d + 'havphone:' + '(.*)' + d + 'havname:'),
          );
          lPhone = lPhone[1];
          var lLat = data.match(
            new RegExp(d + 'havlat:' + '(.*)' + d + 'havlon:'),
          );
          lLat = lLat[1];
          var lLon = data.match(
            new RegExp(d + 'havlon:' + '(.*)' + d + 'havcontent:'),
          );
          lLon = lLon[1];
          var lContent = data.match(
            new RegExp(d + 'havcontent:' + '(.*)' + d + 'havid:'),
          );
          lContent = lContent[1];
          var postName = lContent.match(
            new RegExp('havconname:' + '(.*)' + 'havcondesc:'),
          );
          postName = postName[1];
          var postDesc = lContent.match(
            new RegExp('havcondesc:' + '(.*)' + 'havconfinito:'),
          );
          postDesc = postDesc[1];
          var lPic = data.match(
            new RegExp(d + 'havpic:' + '(.*)' + d + 'havmore:'),
          );
          lPic = lPic[1];
          var postMore = data.match(
            new RegExp(d + 'havmore:' + '(.*)' + d + 'havtype:'),
          );
          postMore = postMore[1];
          var postType = data.match(
            new RegExp(d + 'havtype:' + '(.*)' + d + 'havphone:'),
          );
          postType = postType[1];
          var lID = data.match(
            new RegExp(d + 'havid:' + '(.*)' + d + 'havoperation:'),
          );
          lID = lID[1];
          var lOperation = data.match(
            new RegExp(d + 'havoperation:' + '(.*)' + d + 'havfinito:'),
          );
          lOperation = lOperation[1];
          var rating = data.match(
            new RegExp(d + 'havrating:' + '(.*)' + d + 'havfiles:'),
          );
          rating = rating[1];
          var files = data.match(
            new RegExp(d + 'havfiles:' + '(.*)' + d + 'havpic:'),
          );
          files = files[1];
          var lFile1 = files.match(new RegExp('file1:' + '(.*)' + 'file2:'));
          lFile1 = lFile1[1];
          var lFile2 = files.match(new RegExp('file2:' + '(.*)' + 'file3:'));
          lFile2 = lFile2[1];
          var lFile3 = files.match(new RegExp('file3:' + '(.*)' + 'file4:'));
          lFile3 = lFile3[1];
          var lFile4 = files.match(new RegExp('file4:' + '(.*)'));
          lFile4 = lFile4[1];
          var listPlaces = document.getElementById('page').innerHTML - 1;
          listPlaces = listPlaces * 18;
          listPlaces += counter;
          countPlaces = counter;
          loader += postPlace(
            lName,
            lPhone,
            lLat,
            lLon,
            postName,
            postDesc,
            postMore,
            postType,
            lID,
            lOperation,
            lPic,
            counter,
            lFile1,
            lFile2,
            lFile3,
            lFile4,
            rating,
          );

          if (l1 != 0 && l2 != 0) {
            locationLoader.push([lLat, lLon, counter]);
          }
        } else if (counter == 1) {
          counter = 30;
          document.getElementById('fillPlace').style.width = '100%';
          document.getElementById('fillPlace').style.textAlign = 'center';
          document.getElementById('fillPlace').innerHTML =
            "<span class='emptyMsg' style='color:rgb(75,75,75)'>пусто</span>";
        } else {
          jumpCount = counter - 1;
          counter = 30;
        }
      }
      document.getElementById('fillPlace').innerHTML = loader;
      loadLilImg(jumpCount);
      var tempHolder = [];
      if (l1 != 0 && l2 != 0) {
        for (indexS = 0; indexS < locationLoader.length; indexS++) {
          tempHolder = locationLoader[indexS];
          locatePlace(tempHolder[0], tempHolder[1], tempHolder[2]);
        }
      }
    },
  });
  load = 'no';
  animate = false;
  document.getElementById('load').style.display = 'none';
  yieldAbit();
}
function loadLilImg(total) {
  var tempID = 0;
  var tempPID = 0;
  var f1 = 0;
  var f2 = 0;
  var f3 = 0;
  var f4 = 0;
  if (total != 30) {
    var counter = 0;
    while (counter < total) {
      counter++;
      console.log(counter);
      tempID = document.getElementById('pID' + counter).value;
      tempPID = document.getElementById('ppID' + counter).value;
      f1 = document.getElementById('ff1' + counter).value;
      f2 = document.getElementById('ff2' + counter).value;
      f3 = document.getElementById('ff3' + counter).value;
      f4 = document.getElementById('ff4' + counter).value;
      tempPID++;
      imageExists(
        'upload/user/' + tempID + '/lilpost' + tempPID + '.jpeg?' + f1,
        counter + 'lilppic1',
      );
      tempPID++;
      imageExists(
        'upload/user/' + tempID + '/lilpost' + tempPID + '.jpeg?' + f2,
        counter + 'lilppic2',
      );
      tempPID++;
      imageExists(
        'upload/user/' + tempID + '/lilpost' + tempPID + '.jpeg?' + f3,
        counter + 'lilppic3',
      );
      tempPID++;
      imageExists(
        'upload/user/' + tempID + '/lilpost' + tempPID + '.jpeg?' + f4,
        counter + 'lilppic4',
      );
    }
  }
}
function imageExists(image_url, tID) {
  console.log(image_url);
  console.log(tID);
  var image = new Image();

  image.onload = function () {
    document.getElementById(tID).setAttribute('src', image_url);
    document.getElementById(tID).style.display = '';
  };
  image.onerror = function () {
    return false;
  };
  image.src = image_url;
}
function yieldAbit() {
  setTimeout(function () {
    document.getElementById('fillPlace').style.display = 'block';
  }, 500);
}

function removePlace(id) {
  if (document.getElementById(id).innerHTML == 'Добавить') {
    addPlace(id);
  } else {
    var id2 = id.replace('pAdd', '');
    id2 = 'x' + id2 + 'x';
    var unID = getCookie('c');
    if (unID == null) {
    } else {
      $.ajax({
        type: 'post',
        url: 'removePlace.php',
        data: {
          pAdd: id2,
          checkL: unID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            document.getElementById(id).innerHTML = 'Добавить';
          } else if (data.indexOf('errlog') >= 0) {
            loadPlace();
          } else {
            loadPlace();
          }
        },
      });
    }
  }
}

function addPlace(id) {
  if (document.getElementById(id).innerHTML == 'Удалить') {
    removePlace(id);
  } else {
    var id2 = id.replace('pAdd', '');
    id2 = 'x' + id2 + 'x';
    var unID = getCookie('c');
    if (unID == null) {
    } else {
      $.ajax({
        type: 'post',
        url: 'addPlace.php',
        data: {
          pAdd: id2,
          checkL: unID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            document.getElementById(id).innerHTML = 'Удалить';
          } else if (data.indexOf('errlog') >= 0) {
            loadPlace();
          } else {
            loadPlace();
          }
        },
      });
    }
  }
}
var scrolling = true;
window.onscroll = changePos;

function changePos() {
  if (scrolling == true) {
    var placeHolder = document.getElementById('placeHolder1');
    var header = document.getElementById('placebarX');
    var header2 = document.getElementById('placebarX2');
    var header3 = document.getElementById('placebarX3');
    if (window.pageYOffset > 100) {
      placeHolder.style.display = '';
      header.style.position = 'fixed';
      header.style.top = '0';
      header2.style.position = 'fixed';
      header2.style.top = '0';
      header2.style.left = '0';
      header3.style.position = 'fixed';
      header3.style.top = '';
      header3.style.bottom = '0';
    } else {
      placeHolder.style.display = 'none';
      header.style.position = '';
      header.style.top = '';
      header2.style.position = '';
      header2.style.top = '';
      header2.style.left = '';
      header3.style.position = '';
      header3.style.top = '';
    }
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
var o = {
  get b() {},
  set c(x) {
    if (x > 0 && animate == true) {
      if (x == 1) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '';
          o.c = 2;
        }, 100);
      } else if (x == 2) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '.';
          o.c = 3;
        }, 100);
      } else if (x == 3) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '..';
          o.c = 4;
        }, 100);
      } else if (x == 4) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '...';
          o.c = 5;
        }, 100);
      } else if (x == 5) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '....';
          o.c = 6;
        }, 100);
      } else if (x == 6) {
        setTimeout(function () {
          document.getElementById('load').innerHTML = '.....';
          o.c = 1;
        }, 100);
      }
    }
  },
};
// ========================================================
function closeContX() {
  scrolling = true;
  document.getElementById('placebarX').style.display = '';
  document.getElementById('placebarX2').style.display = '';
  document.getElementById('placebarX2X').style.display = '';
  document.getElementById('placebarX3').style.display = '';
  document.getElementById('contxg').style.display = 'none';
  $('body').css('overflow', '');
  document.getElementById('errReg').innerHTML = '';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX()" class="closeOk">ok</a>';
}

function openContX(openIt, counter, id, operation, f1, f2, f3, f4) {
  document.getElementById('contxg').style.display = 'block';
  $('body').css('overflow', 'hidden');
  document.getElementById('placebarX').style = 'display:none;';
  document.getElementById('placebarX2').style = 'display:none;';
  document.getElementById('placebarX2X').style = 'display:none;';
  document.getElementById('placebarX3').style = 'display:none';
  if (openIt == 'photo') {
    var galery = '<br>';

    galery +=
      '<div class="gallContainer"><img id="pgal" src="images/pic1.png"></div><br>';
    galery +=
      '<div style="width:100%;height:auto;display:flex;justify-content:center;"><img id="icon1" onclick="changeImage(this)"  style="display:none;" class="pgals" src="images/pic1.png">';
    galery +=
      '<img id="icon2" onclick="changeImage(this)" style="display:none;" class="pgals" src="images/pic1.png">';
    galery +=
      '<img id="icon3" onclick="changeImage(this)" style="display:none;" class="pgals" src="images/pic1.png">';
    galery +=
      '<img id="icon4" onclick="changeImage(this)" style="display:none;" class="pgals" src="images/pic1.png"></div>';
    document.getElementById('errReg').innerHTML = galery;
    var postID = 4 * (operation - 1) + 1;
    var tempPath = 'upload/user/' + id + '/post' + postID + '.jpeg?' + f1;
    var mainPic = false;

    if (f1 != 1) {
      var image1 = new Image();
      image1.onload = function () {
        document.getElementById('icon1').setAttribute('src', image1.src);
        document.getElementById('icon1').style.display = '';
        if (mainPic == false) {
          mainPic = true;
          document.getElementById('pgal').setAttribute('src', image1.src);
          document.getElementById('icon1').style.borderColor = 'yellow';
        }
      };
      image1.src = tempPath;
    }

    if (f2 != 1) {
      var image2 = new Image();
      image2.onload = function () {
        document.getElementById('icon2').setAttribute('src', image2.src);
        document.getElementById('icon2').style.display = '';
        if (mainPic == false) {
          mainPic = true;
          document.getElementById('pgal').setAttribute('src', image2.src);
          document.getElementById('icon2').style.borderColor = 'yellow';
        }
      };
      postID = 4 * (operation - 1) + 2;
      tempPath = 'upload/user/' + id + '/post' + postID + '.jpeg?' + f2;
      image2.src = tempPath;
    }

    if (f3 != 1) {
      var image3 = new Image();
      image3.onload = function () {
        document.getElementById('icon3').setAttribute('src', image3.src);
        document.getElementById('icon3').style.display = '';
        if (mainPic == false) {
          mainPic = true;
          document.getElementById('pgal').setAttribute('src', image3.src);
          document.getElementById('icon3').style.borderColor = 'yellow';
        }
      };
      postID = 4 * (operation - 1) + 3;
      tempPath = 'upload/user/' + id + '/post' + postID + '.jpeg?' + f3;
      image3.src = tempPath;
    }

    if (f4 != 1) {
      var image4 = new Image();
      image4.onload = function () {
        document.getElementById('icon4').setAttribute('src', image4.src);
        document.getElementById('icon4').style.display = '';
        if (mainPic == false) {
          mainPic = true;
          document.getElementById('pgal').setAttribute('src', image4.src);
          document.getElementById('icon4').style.borderColor = 'yellow';
        }
      };
      postID = 4 * (operation - 1) + 4;
      tempPath = 'upload/user/' + id + '/post' + postID + '.jpeg?' + f4;
      image4.src = tempPath;
    }

    //checkImage(false,1,galery,id,operation);
  }
}
function checkImage(checkMain, id, tempGal, tempID2, op) {
  var tempPath = '';
  var image = new Image();
  var postID = 4 * (op - 1) + id;
  image.onload = function () {
    console.log('testing');
    if (checkMain == false) {
      checkMain = true;
      tempGal +=
        '<div class="gallContainer"><img id="pgal" src="' +
        tempPath +
        '"></div><br>';
      tempGal +=
        '<div style="width:100%;height:auto;display:flex;justify-content:center;"><img id="icon' +
        id +
        '" onclick="changeImage(this)" style="border-color:yellow;" class="pgals" src="' +
        tempPath +
        '">';
    } else {
      tempGal +=
        '<img id="icon' +
        id +
        '" class="pgals" onclick="changeImage(this)" src="' +
        tempPath +
        '">';
    }
    id++;
    checkImage(checkMain, id, tempGal, tempID2, op);
  };
  image.onerror = function () {
    id++;
    checkImage(checkMain, id, tempGal, tempID2, op);
  };
  if (id == 5) {
    if (checkMain == false) {
      tempGal +=
        '<div class="gallContainer"><img id="pgal" src="images/pic1.png"></div><br>';
    } else {
      tempGal += '</div><br>';
    }
    document.getElementById('errReg').innerHTML = tempGal;
  } else {
    tempPath = 'upload/user/' + tempID2 + '/post' + postID + '.jpeg';
    console.log(tempPath);
    image.src = tempPath;
  }
}

function changeImage(imagePass) {
  document.getElementById('pgal').src = imagePass.src.replace('_t', '_b');
  var myFile = document.getElementById('icon1');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  myFile = document.getElementById('icon2');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  myFile = document.getElementById('icon3');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  myFile = document.getElementById('icon4');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  myFile = document.getElementById('icon5');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  myFile = document.getElementById('icon6');
  if (myFile) {
    myFile.style.borderColor = 'white';
  }
  imagePass.style.borderColor = 'yellow';
}

function showNav() {
  document.getElementById('placebarX3').style.top = '-100vw';
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    '<div class="rateplace" id="rateplaceID"><span>Разделы</span><br><br><a href="view.html?v=' +
    vGlobal +
    '">Обзор</a><a href="promo.html?v=' +
    vGlobal +
    '">Акции</a><a href="profile.html?v=' +
    vGlobal +
    '">Профиль</a><a onclick="openSlider();" href="#filtr">Фильтр</a></div>';
}

function changeType(sType) {
  if (document.getElementById(sType).style.backgroundColor == '') {
    document.getElementById(sType).style.backgroundColor = 'rgb(125,200,125)';
    pType += sType;
  } else {
    document.getElementById(sType).style.backgroundColor = '';
    pType = pType.replace(sType, '');
  }
}

function changeMore(sType) {
  if (document.getElementById(sType).style.backgroundColor == '') {
    document.getElementById(sType).style.backgroundColor = 'rgb(125,200,125)';
    pMore += sType;
  } else {
    document.getElementById(sType).style.backgroundColor = '';
    pMore = pMore.replace(sType, '');
  }
}

function openSlider() {
  scrolling = false;
  document.getElementById('contxg').style.display = 'none';
  document.getElementById('placebarX').style.position = '';
  document.getElementById('placebarX2').style.position = '';
  document.getElementById('placebarX2X').style.position = '';
  document.getElementById('placebarX3').style.position = '';
  var x = document.getElementById('filtr');
  var y = document.getElementById('fillPlace');
  if (x.style.display == 'block') {
    x.style.display = 'none';
    y.style.display = 'block';
    window.scrollTo(0, 0);
    loadPlace();
  } else {
    window.scrollTo(0, 0);
    x.style.display = 'block';
    y.style.display = 'none';
  }
}
