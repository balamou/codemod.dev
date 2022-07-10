var profPicX = '0';
var updatePX = '1';
var animate = false;
var placeData = [];
var kuponData = [];
var eventPlaceData = [];
var friendData = [];
var searchData = [];
var lentaData = [];
var operationData = [];
var modData = [];
var userData = '';
var bronDetails = '';
var tempSkills = 0;
var tempStatus = 0;
var tempSKillText = 'призвание';
var tempStatusText = 'фильтр';
var post1 = [];
var post2 = [];
var post3 = [];

var peopleM = [];
var selectedM = 0;
var selectedPost = 0;
var selectedLNav = 1;
var selectedPostOwner = 0;

var selectedPostMod = 0;
var filt1 = [];
var filt2 = [];
var filt3 = [];
var filtX = [];
var dop1 = [];
var dop2 = [];
var dop3 = [];
var dopX = [];
var ext1 = [1, 1, 1, 1];
var ext2 = [1, 1, 1, 1];
var ext3 = [1, 1, 1, 1];
var postS1 = 1;
var postS2 = 1;
var postS3 = 1;
var vGlobal = 1;

function showDate() {
  document.getElementById('load').style.display = 'block';
  animate = true;
  o.c = 1;
  document.getElementById('logBox').style.display = 'none';
  document.getElementById('regBox').style.display = 'none';
  document.getElementById('profBox').style.display = 'none';
  document.getElementById('reccBox').style.display = 'none';
  document.getElementById('recnBox').style.display = 'none';
  document.getElementById('recBox').style.display = 'none';
  document.getElementById('rcodeBox').style.display = 'none';
  document.getElementById('successBox').style.display = 'none';
  var dateIn = "<span>число </span><select id='day'>";
  for (var i = 1; i < 32; i++) {
    dateIn += '<option>' + i + '</option>';
  }
  dateIn +=
    "</select><span>месяц </span><select id='month'><option>январь</option><option>февраль</option><option>март</option><option>апрель</option><option>май</option><option>июнь</option><option>июль</option><option>август</option><option>сентябрь</option><option>октябрь</option><option>ноябрь</option><option>декабрь</option></select>";
  dateIn += "<span>год </span><select id='year'>";
  var theYear = new Date().getFullYear();
  for (var i = 100; i > 0; i--) {
    dateIn += '<option>' + theYear + '</option>';
    theYear--;
  }
  dateIn += '</select>';
  document.getElementById('date').innerHTML = dateIn;
  var checkLog = getCookie('c');

  if (checkLog != null) {
    if (checkLog.includes('x5qz')) {
      loadProfile(checkLog);
    } else {
      document.getElementById('load').style.display = 'none';
      animate = false;
      console.log('stop1');
      document.getElementById('logBox').style.display = 'block';
      alert('сбой входа');
    }
  } else {
    document.getElementById('load').style.display = 'none';
    animate = false;
    console.log('stop2');
    document.getElementById('logBox').style.display = 'block';
  }
}
function resetSkills() {
  tempSkills = 0;
  tempSKillText = 'призвание';
  document.getElementById('skillSearch').innerHTML = tempSKillText;
}
function resetStatus() {
  tempStatus = 0;
  tempStatusText = 'фильтр';
  document.getElementById('statusSearch').innerHTML = tempStatusText;
}
function nextSkill(skN) {}
function openSkills() {
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = getSkills();
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX();" class="closeOk" href="#closeOk">Отмена</a><a onclick="closeContX();resetSkills();" class="closeOk" href="#closeOk">Сбросить</a>';
}

function openStatus() {
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = getStatus();
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX();" class="closeOk" href="#closeOk">Отмена</a><a onclick="closeContX();resetStatus();" class="closeOk" href="#closeOk">Сбросить</a>';
}
function fillProf(data) {
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
    .getElementById('postshtml')
    .setAttribute('href', 'posts.html?v=' + version);
  var lPhone = data.match(new RegExp('havphone:' + '(.*)' + 'havname:'));
  lPhone = lPhone[1];
  document.getElementById('tChange').value = '+' + lPhone;
  var lID = data.match(new RegExp('havid:' + '(.*)' + 'havgender:'));
  lID = lID[1];
  var lName = data.match(new RegExp('havname:' + '(.*)' + 'havlastname:'));
  lName = lName[1];
  document.getElementById('nChange').value = lName;
  var lLast = data.match(new RegExp('havlastname:' + '(.*)' + 'havbday:'));
  lLast = lLast[1];
  document.getElementById('lChange').value = lLast;
  var lBirth = data.match(new RegExp('havbday:' + '(.*)' + 'havfriends:'));
  lBirth = lBirth[1];
  var lFriends = data.match(new RegExp('havfriends:' + '(.*)' + 'havpic:'));
  lFriends = lFriends[1];
  var lPic = data.match(new RegExp('havpic:' + '(.*)' + 'havpoints:'));
  lPic = lPic[1];
  var lPoints = data.match(new RegExp('havpoints:' + '(.*)' + 'havid:'));
  lPoints = lPoints[1];
  var lMod = data.match(new RegExp('havskill:' + '(.*)' + 'havmod:'));
  lMod = lMod[1];
  var result = data.match(
    new RegExp('havtotalhav' + '(.*)' + 'havfintotalhav'),
  );
  if (result[1]) {
    result = result[1];
  } else {
    result = 0;
  }
  if (result == 0) {
    document.getElementById('placeBox2').innerHTML =
      "<span style='color:rgb(75,75,75);display:block;width:100%;text-align:center;'>пусто</span>";
  } else {
    for (var counter = 1; counter <= result; counter++) {
      var d = 'x' + counter;

      if (data.indexOf(d + 'havpname:') >= 0) {
        var pLocation = data.match(
          new RegExp(d + 'havplocation:' + '(.*)' + d + 'havpname:'),
        );
        pLocation = pLocation[1];
        var pName = data.match(
          new RegExp(d + 'havpname:' + '(.*)' + d + 'havpid:'),
        );
        pName = pName[1];
        var pID = data.match(
          new RegExp(d + 'havpid:' + '(.*)' + d + 'havpevent:'),
        );
        pID = pID[1];
        var pEvent = data.match(
          new RegExp(d + 'havpevent:' + '(.*)' + d + 'havpkupon:'),
        );
        pEvent = pEvent[1];
        var event1 = pEvent.match(new RegExp('actzx1' + '(.*)' + 'actzxend1'));
        var event2 = pEvent.match(new RegExp('actzx2' + '(.*)' + 'actzxend2'));
        var event3 = pEvent.match(new RegExp('actzx3' + '(.*)' + 'actzxend3'));

        var pKupon = data.match(
          new RegExp(d + 'havpkupon:' + '(.*)' + d + 'havplat:'),
        );
        pKupon = pKupon[1];
        var pLat = data.match(
          new RegExp(d + 'havplat:' + '(.*)' + d + 'havplon:'),
        );
        pLat = pLat[1];
        var pLon = data.match(
          new RegExp(d + 'havplon:' + '(.*)' + d + 'havpbron:'),
        );
        pLon = pLon[1];
        var pBron = data.match(
          new RegExp(d + 'havpbron:' + '(.*)' + d + 'havpfinito:'),
        );
        pBron = pBron[1];
        var bronState = '';
        var k1 = pKupon.match(new RegExp('k1sx:' + '(.*)' + 'k2sx:'));
        k1 = k1[1];
        var k1C = k1.match(new RegExp('kstatx:' + '(.*)'));
        k1C = k1C[1];
        var k2 = pKupon.match(new RegExp('k2sx:' + '(.*)' + 'k3sx:'));
        k2 = k2[1];
        var k2C = k2.match(new RegExp('kstatx:' + '(.*)'));
        k2C = k2C[1];
        var k3 = pKupon.match(new RegExp('k3sx:' + '(.*)' + 'k4sx:'));
        k3 = k3[1];
        var k3C = k3.match(new RegExp('kstatx:' + '(.*)'));
        k3C = k3C[1];
        var k4 = pKupon.match(new RegExp('k4sx:' + '(.*)' + 'k5sx:'));
        k4 = k4[1];
        var k4C = k4.match(new RegExp('kstatx:' + '(.*)'));
        k4C = k4C[1];
        var k5 = pKupon.match(new RegExp('k5sx:' + '(.*)'));
        k5 = k5[1];
        var k5C = k5.match(new RegExp('kstatx:' + '(.*)'));
        k5C = k5C[1];
        k1 = k1.replace('kstatx:' + k1C, '');
        k2 = k2.replace('kstatx:' + k2C, '');
        k3 = k3.replace('kstatx:' + k3C, '');
        k4 = k4.replace('kstatx:' + k4C, '');
        k5 = k5.replace('kstatx:' + k5C, '');

        if (pBron.indexOf('wait') >= 0) {
          bronDetails = "'" + pBron + "'";
          bronState =
            'Бронь ждет подтверждения, ' +
            '<a onclick="showBron(' +
            bronDetails +
            ',' +
            pID +
            ')" href="#cancel">детали</a><a onclick="preCancelBron(' +
            pID +
            ');"href="#cancel">отменить</a>';
        } else if (pBron.indexOf('accepted') >= 0) {
          bronDetails = "'" + pBron + "'";
          bronState =
            'Бронь принята, ' +
            '<a onclick="showBron(' +
            bronDetails +
            ',' +
            pID +
            ')" href="#cancel">детали</a><a onclick="preCancelBron(' +
            pID +
            ');"href="#cancel">отменить</a>';
        }
        var links = 'upload/i' + pID + 'dxlx.';
        if (imageExists(links + 'png')) {
          pName = '<img alt="???" src="' + links + 'png">';
        } else if (imageExists(links + 'jpg')) {
          pName = '<img alt="???" src="' + links + 'jpg">';
        } else if (imageExists(links + 'jpeg')) {
          pName = '<img alt="???" src="' + links + 'jpeg">';
        }
        var tempHTML = '';
        var tempKHTML = '';
        tempHTML +=
          '<div class="cellNameWrap"><div class="placeLink"><a href="view.html#' +
          pID +
          '">' +
          pName +
          '</a></div></div>';
        tempKHTML +=
          tempHTML + '<div class="cellPlacesAddress">' + pLocation + '</div>';
        tempHTML +=
          '<div class="cellPlacesAddress">' +
          pLocation +
          '</div><div id="bronInfo' +
          pID +
          '" class="cellPlacesBron">' +
          bronState +
          '</div>';
        placeData.push(tempHTML);
        var kupCount = 0;
        tempKHTML += '<div class="cellPlacesBron">';
        if (k1C != 'off' && k1 != '') {
          kupCount++;
          tempKHTML +=
            '<a href="#k" onclick="openKupon(1,' +
            pID +
            ',' +
            "'" +
            k1 +
            "'" +
            ');">Купон #' +
            kupCount +
            '</a>';
        }
        if (k2C != 'off' && k2 != '') {
          kupCount++;
          tempKHTML +=
            '<a href="#k" onclick="openKupon(2,' +
            pID +
            ',' +
            "'" +
            k2 +
            "'" +
            ');">Купон #' +
            kupCount +
            '</a>';
        }
        if (k3C != 'off' && k3 != '') {
          kupCount++;
          tempKHTML +=
            '<a href="#k" onclick="openKupon(3,' +
            pID +
            ',' +
            "'" +
            k3 +
            "'" +
            ');">Купон #' +
            kupCount +
            '</a>';
        }
        if (k4C != 'off' && k4 != '') {
          kupCount++;
          tempKHTML +=
            '<a href="#k" onclick="openKupon(4,' +
            pID +
            ',' +
            "'" +
            k4 +
            "'" +
            ');">Купон #' +
            kupCount +
            '</a>';
        }
        if (k5C != 'off' && k5 != '') {
          kupCount++;
          tempKHTML +=
            '<a href="#k" onclick="openKupon(5,' +
            pID +
            ',' +
            "'" +
            k5 +
            "'" +
            ');">Купон #' +
            kupCount +
            '</a>';
        }
        tempKHTML += '</div>';
        if (kupCount > 0) {
          kuponData.push(tempKHTML);
        }
        var tempImg = '';
        links = 'upload/i' + pID + 'da1a.';
        if (event1[1].includes('xzworkingxz')) {
          event1 = event1[1].match(new RegExp('namezx:' + '(.*)' + 'statzx:'));
          if (imageExists(links + 'png')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "png'>";
          } else if (imageExists(links + 'jpg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpg'>";
          } else if (imageExists(links + 'jpeg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpeg'>";
          }
          eventPlaceData.push(
            '<div class="cellPlacesBron">' + event1[1] + '</div>' + tempImg,
          );
        }
        tempImg = '';
        links = 'upload/i' + pID + 'da2a.';
        if (event2[1].includes('xzworkingxz')) {
          event2 = event2[1].match(new RegExp('namezx:' + '(.*)' + 'statzx:'));
          if (imageExists(links + 'png')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "png'>";
          } else if (imageExists(links + 'jpg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpg'>";
          } else if (imageExists(links + 'jpeg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpeg'>";
          }
          eventPlaceData.push(
            '<div class="cellPlacesBron">' + event2[1] + '</div>' + tempImg,
          );
        }
        tempImg = '';
        links = 'upload/i' + pID + 'da3a.';
        if (event3[1].includes('xzworkingxz')) {
          event3 = event3[1].match(new RegExp('namezx:' + '(.*)' + 'statzx:'));
          if (imageExists(links + 'png')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "png'>";
          } else if (imageExists(links + 'jpg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpg'>";
          } else if (imageExists(links + 'jpeg')) {
            tempImg =
              "<img onclick='showImage(this)' class='eventK' src='" +
              links +
              "jpeg'>";
          }
          eventPlaceData.push(
            '<div class="cellPlacesBron">' + event3[1] + '</div>' + tempImg,
          );
        }
      }
    }
  }

  document.getElementById('placeGen').style.backgroundColor =
    'rgb(100,100,100)';
  updateMSG();

  var operations = '';
  var opCont = '';
  var opDate = '';
  result = data.match(new RegExp('havtotalohav' + '(.*)' + 'havfintotalohav'));
  result = result[1];
  for (var counter = 1; counter <= result; counter++) {
    var d = 'x' + counter;
    opDate = data.match(
      new RegExp(d + 'havodate:' + '(.*)' + d + 'havocontent:'),
    );
    opDate = opDate[1];
    opCont = data.match(
      new RegExp(d + 'havocontent:' + '(.*)' + d + 'havofinito:'),
    );
    opCont = opCont[1];
    operations +=
      '<div class="operation">' +
      opCont +
      '<br><div style="width:100%" class="personM">' +
      opDate +
      '</div>';
  }
  document.getElementById('contOP').innerHTML = operations;

  profPicX = lPic;
  var bDay = lBirth.substring(0, 2);
  var bMonth = lBirth.substring(3, 5);
  var bYear = lBirth.substring(6, 10);
  var a = new Date();
  var r = a.getFullYear();
  bYear = r - bYear;
  r = a.getMonth() + 1;
  if (r < bMonth) {
    bYear--;
  } else if (bMonth == r) {
    r = a.getDate();
    if (r < bDay) {
      bYear--;
    }
  }

  document.getElementById('userName').innerHTML = lName + ' ' + lLast;
  document
    .getElementById('profilePic')
    .setAttribute('src', 'images/' + profPicX + '.png');
  document
    .getElementById('profilePic3')
    .setAttribute('src', 'images/' + profPicX + '.png');
  document.getElementById('im' + profPicX).style.backgroundColor =
    'rgb(125,200,125)';
  document.getElementById('userPoints').innerHTML = 'Баллы: ' + lPoints;
  document.getElementById('load').style.display = 'none';

  if (data.indexOf('x1havptfinito:') >= 0) {
    var postContent = data.match(
      new RegExp('x1havptcontent:' + '(.*)' + 'x1havpttype:'),
    );
    postContent = postContent[1];
    var postName = postContent.match(
      new RegExp('havconname:' + '(.*)' + 'havcondesc:'),
    );
    postName = postName[1];
    var postDesc = postContent.match(
      new RegExp('havcondesc:' + '(.*)' + 'havconfinito:'),
    );
    postDesc = postDesc[1];
    var postType = data.match(
      new RegExp('x1havpttype:' + '(.*)' + 'x1havptmore:'),
    );
    postType = postType[1];
    postType = postType.slice(1, -1);
    var postMore = data.match(
      new RegExp('x1havptmore:' + '(.*)' + 'x1havptfinito:'),
    );
    postMore = postMore[1];
    postMore = postMore.slice(1, -1);
    var files = data.match(
      new RegExp('x1havptfiles:' + '(.*)' + 'x1havptcontent:'),
    );
    files = files[1];
    var tempExt = files.match(new RegExp('file1:' + '(.*)' + 'file2:'));
    tempExt = tempExt[1];
    ext1[0] = tempExt;
    tempExt = files.match(new RegExp('file2:' + '(.*)' + 'file3:'));
    tempExt = tempExt[1];
    ext1[1] = tempExt;
    tempExt = files.match(new RegExp('file3:' + '(.*)' + 'file4:'));
    tempExt = tempExt[1];
    ext1[2] = tempExt;
    tempExt = files.match(new RegExp('file4:' + '(.*)'));
    tempExt = tempExt[1];
    ext1[3] = tempExt;
    filt1 = postType.split('xx');
    dop1 = postMore.split('xx');
    post1 = [];
    post1.push(postName);
    post1.push(postDesc);
    if (data.indexOf('x1havtimeouthav') >= 0) {
      postS1 = 1;
    } else {
      postS1 = 2;
    }
    if (data.indexOf('x2havtimeouthav') >= 0) {
      postS2 = 1;
    } else {
      postS2 = 2;
    }
    if (data.indexOf('x3havtimeouthav') >= 0) {
      postS3 = 1;
    } else {
      postS3 = 2;
    }
  } else {
    postS1 = 3;
  }
  if (data.indexOf('x2havptfinito:') >= 0) {
    var postContent = data.match(
      new RegExp('x2havptcontent:' + '(.*)' + 'x2havpttype:'),
    );
    postContent = postContent[1];
    var postName = postContent.match(
      new RegExp('havconname:' + '(.*)' + 'havcondesc:'),
    );
    postName = postName[1];
    var postDesc = postContent.match(
      new RegExp('havcondesc:' + '(.*)' + 'havconfinito:'),
    );
    postDesc = postDesc[1];
    var postType = data.match(
      new RegExp('x2havpttype:' + '(.*)' + 'x2havptmore:'),
    );
    postType = postType[1];
    postType = postType.slice(1, -1);
    var postMore = data.match(
      new RegExp('x2havptmore:' + '(.*)' + 'x2havptfinito:'),
    );
    postMore = postMore[1];
    postMore = postMore.slice(1, -1);
    var files = data.match(
      new RegExp('x2havptfiles:' + '(.*)' + 'x2havptcontent:'),
    );
    files = files[1];
    var tempExt = files.match(new RegExp('file1:' + '(.*)' + 'file2:'));
    tempExt = tempExt[1];
    ext2[0] = tempExt;
    tempExt = files.match(new RegExp('file2:' + '(.*)' + 'file3:'));
    tempExt = tempExt[1];
    ext2[1] = tempExt;
    tempExt = files.match(new RegExp('file3:' + '(.*)' + 'file4:'));
    tempExt = tempExt[1];
    ext2[2] = tempExt;
    tempExt = files.match(new RegExp('file4:' + '(.*)'));
    tempExt = tempExt[1];
    ext2[3] = tempExt;
    filt2 = postType.split('xx');
    dop2 = postMore.split('xx');
    post2 = [];
    post2.push(postName);
    post2.push(postDesc);
    if (data.indexOf('x2havtimeouthav') >= 0) {
      postS2 = 1;
    } else {
      postS2 = 2;
    }
  } else {
    postS2 = 3;
  }
  if (data.indexOf('x3havptfinito:') >= 0) {
    var postContent = data.match(
      new RegExp('x3havptcontent:' + '(.*)' + 'x3havpttype:'),
    );
    postContent = postContent[1];
    var postName = postContent.match(
      new RegExp('havconname:' + '(.*)' + 'havcondesc:'),
    );
    postName = postName[1];
    var postDesc = postContent.match(
      new RegExp('havcondesc:' + '(.*)' + 'havconfinito:'),
    );
    postDesc = postDesc[1];
    var postType = data.match(
      new RegExp('x3havpttype:' + '(.*)' + 'x3havptmore:'),
    );
    postType = postType[1];
    postType = postType.slice(1, -1);
    var postMore = data.match(
      new RegExp('x3havptmore:' + '(.*)' + 'x3havptfinito:'),
    );
    postMore = postMore[1];
    postMore = postMore.slice(1, -1);
    var files = data.match(
      new RegExp('x3havptfiles:' + '(.*)' + 'x3havptcontent:'),
    );
    files = files[1];
    var tempExt = files.match(new RegExp('file1:' + '(.*)' + 'file2:'));
    tempExt = tempExt[1];
    ext3[0] = tempExt;
    tempExt = files.match(new RegExp('file2:' + '(.*)' + 'file3:'));
    tempExt = tempExt[1];
    ext3[1] = tempExt;
    tempExt = files.match(new RegExp('file3:' + '(.*)' + 'file4:'));
    tempExt = tempExt[1];
    ext3[2] = tempExt;
    tempExt = files.match(new RegExp('file4:' + '(.*)'));
    tempExt = tempExt[1];
    ext3[3] = tempExt;
    filt3 = postType.split('xx');
    dop3 = postMore.split('xx');
    post3 = [];
    post3.push(postName);
    post3.push(postDesc);
    if (data.indexOf('x3havtimeouthav') >= 0) {
      postS3 = 1;
    } else {
      postS3 = 2;
    }
  } else {
    postS3 = 3;
  }
}

var ready = false;
console.log('readyfalse');
var blurred = false;
window.onblur = function () {
  blurred = true;
};
window.onfocus = function () {
  blurred = false;
  if (selectedLNav == 1 && ready == true) {
    updateMSG();
  }
};
function loadFeed() {
  if (ready == true) {
    updateMSG();
  }
}
function updateMSG() {
  ready = false;
  console.log('readyfalse');
  document.getElementById('hideLog').style.display = 'inline-block';
  document.getElementById('hideLog3').style.display = 'inline-block';
  if (blurred == false) {
    if (selectedLNav == 1) {
      loadUpdate();
    }
    setTimeout(updateMSG, 11000);
  } else {
    ready = true;
    console.log('readytrue');
  }
}

function loadUpdate() {
  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $.ajax({
      type: 'post',
      url: 'getFeed.php',
      data: {
        checkL: unID,
        postOwner: selectedPostOwner,
        friendID: selectedM,
        postID: selectedPost,
      },
      success: function (data) {
        if (data.indexOf('havtotalmhav') >= 0) {
          console.log(data);
          lentaData = [];
          peopleM = [];
          var result = data.match(
            new RegExp('havtotalmhav' + '(.*)' + 'havfintotalmhav'),
          );
          result = result[1];
          var lID = data.match(new RegExp('havid' + '(.*)' + 'idhav'));
          lID = lID[1];
          var lPic = data.match(new RegExp('havpic' + '(.*)' + 'pichav'));
          lPic = lPic[1];
          var sendFrom = '';
          var sendTo = '';
          var sendDate = '';
          var message = '';
          var nameOther = '';
          var lnameOther = '';
          var thePic = 1;
          var replyGet = '';
          var toName = '';
          var fromName = '';
          var toPic = '';
          var fromPic = '';
          var postID = 0;
          var postOwner = 0;
          var uniqueID = 0;
          var postRead = 1;

          for (var counter = 1; counter <= result; counter++) {
            var d = 'x' + counter;
            postRead = data.match(
              new RegExp(d + 'havmread:' + '(.*)' + d + 'havmowner:'),
            );
            postRead = postRead[1];
            postOwner = data.match(
              new RegExp(d + 'havmowner:' + '(.*)' + d + 'havmtype:'),
            );
            postOwner = postOwner[1];
            postID = data.match(
              new RegExp(d + 'havmtype:' + '(.*)' + d + 'havmmore:'),
            );
            postID = postID[1];
            uniqueID = data.match(
              new RegExp(d + 'havmmore:' + '(.*)' + d + 'havmfrom:'),
            );
            uniqueID = uniqueID[1];
            sendFrom = data.match(
              new RegExp(d + 'havmfrom:' + '(.*)' + d + 'havmto:'),
            );
            sendFrom = sendFrom[1];
            sendTo = data.match(
              new RegExp(d + 'havmto:' + '(.*)' + d + 'havmsg:'),
            );
            sendTo = sendTo[1];
            message = data.match(
              new RegExp(d + 'havmsg:' + '(.*)' + d + 'havmdate:'),
            );
            message = message[1];
            sendDate = data.match(
              new RegExp(d + 'havmdate:' + '(.*)' + d + 'havmname:'),
            );
            sendDate = sendDate[1];
            nameOther = data.match(
              new RegExp(d + 'havmname:' + '(.*)' + d + 'havmlastname:'),
            );
            nameOther = nameOther[1];
            lnameOther = data.match(
              new RegExp(d + 'havmlastname:' + '(.*)' + d + 'havmpic:'),
            );
            lnameOther = lnameOther[1];
            thePic = data.match(
              new RegExp(d + 'havmpic:' + '(.*)' + d + 'havmfinito:'),
            );
            thePic = thePic[1];
            var listP = '';
            var styleM = '';
            var styleT = '';
            var tempPDesc = '';
            var tempPName = '';
            if (postID == 0 || postOwner == 0 || uniqueID == 0) {
              postID = 0;
              postOwner = 0;
              uniqueID = 0;
            } else {
              if (message.indexOf('havconname:') >= 0) {
                tempPName = message;
                tempPDesc = message;
                message = message.match(new RegExp('havconfinito:' + '(.*)'));
                message = message[1];
                tempPName = tempPName.match(
                  new RegExp('havconname:' + '(.*)' + 'havcondesc:'),
                );
                tempPName = tempPName[1];
                tempPDesc = tempPDesc.match(
                  new RegExp('havcondesc:' + '(.*)' + 'havconfinito:'),
                );
                tempPDesc = tempPDesc[1];
                thePic = 'pic';
              }
            }
            if (lID == sendFrom) {
              styleT =
                'style="float:right;background-color:rgb(230,250,230);border-bottom-right-radius:0;"';
              fromName = 'Вы';
              toName = nameOther + ' ' + lnameOther;
              fromPic = lPic;
              toPic = thePic;
              replyGet = sendTo;
              if (tempPName == '') {
                tempPName = toName;
              }
              if (
                sendTo == selectedM &&
                postID == selectedPost &&
                postOwner == selectedPostOwner
              ) {
                styleM = 'background-color:rgb(220,220,220);position:fixed;';
              } else if (selectedM != 0) {
                styleM += 'display:none;';
              }
              if (peopleM.length > 0) {
                //console.log("Begin");
                //console.log(postID);console.log(sendTo);
                //console.log("check");
                var canAdd = 'yes';
                for (var i = 0; i < peopleM.length; i++) {
                  if (
                    peopleM[i][0] == sendTo &&
                    peopleM[i][2] == postID &&
                    peopleM[i][3] == postOwner
                  ) {
                    canAdd = 'no';
                  }
                }
                if (canAdd == 'yes') {
                  //console.log(postID);console.log(sendTo);
                  listP =
                    '<div style="' +
                    styleM +
                    '" onclick="selectMessage(' +
                    sendTo +
                    ',this,' +
                    postOwner +
                    ',' +
                    postID +
                    ',' +
                    "'" +
                    uniqueID +
                    "'" +
                    ')" class="messagePerson"><img src="images/' +
                    thePic +
                    '.png"><div class="personNandM"><div class="personN" title="' +
                    tempPDesc +
                    '">' +
                    tempPName +
                    '</div><div class="personM">' +
                    sendDate +
                    '<br>' +
                    fromName +
                    ': ' +
                    message.replaceAll('</br>', ' ') +
                    '</div></div></div>';
                  peopleM.push([sendTo, listP, postID, postOwner]);
                }
              } else {
                //console.log(postID);console.log(sendTo);
                listP =
                  '<div style="' +
                  styleM +
                  '" onclick="selectMessage(' +
                  sendTo +
                  ',this,' +
                  postOwner +
                  ',' +
                  postID +
                  ',' +
                  "'" +
                  uniqueID +
                  "'" +
                  ')" class="messagePerson"><img src="images/' +
                  thePic +
                  '.png"><div class="personNandM"><div class="personN" title="' +
                  tempPDesc +
                  '">' +
                  tempPName +
                  '</div><div class="personM">' +
                  sendDate +
                  '<br>' +
                  fromName +
                  ': ' +
                  message.replaceAll('</br>', ' ') +
                  '</div></div></div>';
                peopleM.push([sendTo, listP, postID, postOwner]);
              }
            }
            if (lID == sendTo) {
              //console.log("Begin");
              //console.log(postID);console.log(sendFrom);
              //console.log("check");
              styleT = 'style="float:left;border-bottom-left-radius:0;"';
              if (postRead == 1) {
                styleM = 'background-color:rgb(215,240,215);';
              }
              if (
                sendFrom == selectedM &&
                postID == selectedPost &&
                postOwner == selectedPostOwner
              ) {
                styleM = 'background-color:rgb(220,220,220);position:fixed;';
              } else if (selectedM != 0) {
                styleM += 'display:none;';
              }

              //console.log(postRead);
              toName = 'Вы';
              fromName = nameOther + ' ' + lnameOther;
              toPic = lPic;
              fromPic = thePic;
              replyGet = sendFrom;
              if (tempPName == '') {
                tempPName = fromName;
              }
              if (peopleM.length > 0) {
                var canAdd = 'yes';
                for (var i = 0; i < peopleM.length; i++) {
                  if (
                    peopleM[i][0] == sendFrom &&
                    peopleM[i][2] == postID &&
                    peopleM[i][3] == postOwner
                  ) {
                    canAdd = 'no';
                  }
                }
                if (canAdd == 'yes') {
                  //console.log(postID);console.log(sendFrom);
                  listP =
                    '<div style="' +
                    styleM +
                    '" onclick="selectMessage(' +
                    sendFrom +
                    ',this,' +
                    postOwner +
                    ',' +
                    postID +
                    ',' +
                    "'" +
                    uniqueID +
                    "'" +
                    ')" class="messagePerson"><img src="images/' +
                    thePic +
                    '.png"><div class="personNandM"><div class="personN" title="' +
                    tempPDesc +
                    '">' +
                    tempPName +
                    '</div><div class="personM">' +
                    sendDate +
                    '<br>' +
                    fromName +
                    ': ' +
                    message.replaceAll('</br>', ' ') +
                    '</div></div></div>';
                  peopleM.push([sendFrom, listP, postID, postOwner]);
                }
              } else {
                listP =
                  '<div style="' +
                  styleM +
                  '"  onclick="selectMessage(' +
                  sendFrom +
                  ',this,' +
                  postOwner +
                  ',' +
                  postID +
                  ',' +
                  "'" +
                  uniqueID +
                  "'" +
                  ')" class="messagePerson"><img src="images/' +
                  thePic +
                  '.png"><div class="personNandM"><div class="personN" title="' +
                  tempPDesc +
                  '">' +
                  tempPName +
                  '</div><div class="personM">' +
                  sendDate +
                  '<br>' +
                  fromName +
                  ': ' +
                  message.replaceAll('</br>', ' ') +
                  '</div></div></div>';
                peopleM.push([sendFrom, listP, postID, postOwner]);
              }
            }
            d =
              '<div ' +
              styleT +
              ' class="chatText" onclick="openText(this)">' +
              message +
              '<br><a class="timeMsg">' +
              sendDate +
              '</a></div><div style="clear: both;"></div><div ></div>';
            lentaData.push([sendTo, sendFrom, d, postID, postOwner]);
          }
          var tempTest = '';
          for (var i = 0; i < peopleM.length; i++) {
            tempTest += peopleM[i][1];
          }
          if (selectedM != 0) {
            refreshMsg(selectedM, 1, selectedPost, selectedPostOwner);
          }
          document.getElementById('contMP').innerHTML = tempTest;
          animate = false;
          document.getElementById('logBox').style.display = 'none';
          document.getElementById('profBox').style.display = 'inline-block';
        } else {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'ошибка загрузки';
          document.getElementById('logBox').style.display = 'block';
          document.getElementById('load').style.display = 'none';
          animate = false;
        }
      },
    });
  }
}

function refreshMsg(senderID, refreshType, postID, postOwner) {
  console.log('we recieve' + postOwner);
  var tempHTML = '';
  for (var i = lentaData.length - 1; i >= 0; i--) {
    //console.log(postOwner+"owner");console.log(lentaData[i][4]+"owner2");
    if (
      (lentaData[i][0] == senderID &&
        lentaData[i][3] == postID &&
        lentaData[i][4] == postOwner) ||
      (lentaData[i][1] == senderID &&
        selectedM != 0 &&
        lentaData[i][3] == postID &&
        lentaData[i][4] == postOwner)
    ) {
      tempHTML += lentaData[i][2];
    }
  }
  if (tempHTML != '') {
    document.getElementById('contMM').innerHTML = tempHTML;
  } else {
    document.getElementById('contMM').innerHTML =
      "<div class='personN'>Нет сообщений</div>";
  }

  if (selectedM != 0 && refreshType != 1) {
    var el = $('#msgID');
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;

    if (elHeight < windowHeight) {
      offset = elOffset - (windowHeight / 2 - elHeight / 2);
    } else {
      offset = elOffset;
    }
    var speed = 700;
    $('html, body').animate({scrollTop: offset}, speed);
  }
}
function selectMessage(senderID, senderObj, postOwner, postID, uniqueID) {
  var clearObjects = document.getElementsByClassName('messagePerson');
  if (senderID == selectedM) {
    selectedM = 0;
    selectedPost = 0;
    selectedPostOwner = 0;
  } else {
    selectedPost = postID;
    selectedM = senderID;
    selectedPostOwner = postOwner;
    loadUpdate();
  }
  for (var i = 0; i < clearObjects.length; i++) {
    if (selectedM == 0) {
      clearObjects[i].style.position = '';
      clearObjects[i].style.display = '';
    } else {
      clearObjects[i].style.display = 'none';
    }
  }
  if (selectedM != 0) {
    senderObj.style.display = '';
    senderObj.style.position = 'fixed';
    if (postOwner != 0 && postID != 0 && uniqueID != 0) {
      document.getElementById('contMS').innerHTML =
        '<div class="chatX"><textarea placeholder="Сообщение" id="msgID" maxlength="100" style="width:80%"></textarea><br><a onclick="sendSMX(' +
        postOwner +
        ',' +
        senderID +
        ',' +
        postID +
        ',' +
        "'" +
        uniqueID +
        "'" +
        ');">Отправить</a><a href="posts.html#' +
        postOwner +
        'xpost' +
        postID +
        '">Просмотреть публикацию</a></div>';
    } else {
      document.getElementById('contMS').innerHTML =
        '<div class="chatX"><textarea placeholder="Сообщение" id="msgID" maxlength="100" style="width:80%"></textarea><br><a onclick="sendSM(' +
        senderID +
        ')">Отправить</a></div>';
    }
    refreshMsg(senderID, 2, postID, postOwner);
  } else {
    document.getElementById('contMM').innerHTML =
      "<div class='personN'>Сообщения</div>";
    document.getElementById('contMS').innerHTML = '';
    senderObj.style.position = '';
    senderObj.style.backgroundColor = 'rgb(235,235,235)';
    $('html, body').animate({scrollTop: 0}, 700);
  }
}
function showImage(pic) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  var imageS = pic.src;
  document.getElementById('errReg').innerHTML =
    '<img style="max-width:90%;max-height:80%;border-radius:5%;" src="' +
    imageS +
    '">';
}
function useKupon() {
  var unID = getCookie('c');
  if (unID == null) {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'вы не вошли';
  } else {
    if (unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'activateKupon.php',
        data: {
          checkL: unID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            document.getElementById('menuImages').innerHTML =
              'Купон активирован';
          } else if (data.indexOf('nopoints') >= 0) {
            document.getElementById('menuImages').innerHTML =
              'Недостаточно бонусов';
          } else {
            document.getElementById('menuImages').innerHTML = 'Ошибка загрузки';
          }
        },
      });
    }
  }
}
function openKupon(kID, pID, kCont) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    '<div style="width:90%;overflow:hidden;word-break:break-all;margin-left:5%;">' +
    kCont +
    '</div><br><div id="menuImages"></div>';
  document.getElementById('multiple').innerHTML =
    '<a style="background-color:rgb(100,200,100);" onclick="useKupon()" class="closeOk" href="#closeOk">Использовать купон, - 2 балла</a><a onclick="closeContX()" class="closeOk" href="#closeOk">Отмена</a>';
  var unID = getCookie('c');
  if (unID == null) {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'Вы не вошли';
  } else {
    if (unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'loadKuponMenu.php',
        data: {
          checkL: unID,
          kID: kID,
          pID: pID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            var menuIDS = data.match(
              new RegExp('startIDS:' + '(.*)' + 'endIDS:'),
            );
            menuIDS = menuIDS[1];
            menuIDS = menuIDS.split('id');
            var links = '';
            var mImage = '';

            for (i = 0; i < menuIDS.length; i++) {
              links = 'upload/i' + pID + 'dmpic' + menuIDS[i] + 'm.';
              if (imageExists(links + 'png')) {
                mImage += '<img alt="???" src="' + links + 'png">';
              } else if (imageExists(links + 'jpg')) {
                mImage += '<img alt="???" src="' + links + 'jpg">';
              } else if (imageExists(links + 'jpeg')) {
                mImage += '<img alt="???" src="' + links + 'jpeg">';
              }
            }
            document.getElementById('menuImages').innerHTML = mImage;

            //document.getElementById("multiple").innerHTML='<a onclick="closeContX()" class="closeOk" href="#closeOk">ок</a>';
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'ошибка загрузки';
          }
        },
      });
    }
  }
}
function cancelBron(pID) {
  var unID = getCookie('c');
  if (unID == null) {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'Вы не вошли';
  } else {
    if (unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'bronCancel.php',
        data: {
          checkL: unID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            var sAnswer = data.match(
              new RegExp('success' + '(.*)' + 'endsuccess'),
            );
            sAnswer = sAnswer[1];
            document.getElementById('errReg').innerHTML = sAnswer;
            document.getElementById('bronInfo' + pID).innerHTML = '';
            for (i = 0; i < placeData.length; i++) {
              if (placeData[i].indexOf('bronInfo' + pID) != -1) {
                placeData[i] = placeData[i].replace(
                  /<div id="bronInfo(.*?)<\/div>/,
                  '',
                );
              }
            }
            document.getElementById('multiple').innerHTML =
              '<a onclick="closeContX()" class="closeOk" href="#closeOk">ок</a>';
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'Ошибка загрузки';
          }
        },
      });
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'Вы не вошли';
    }
  }
}
function preCancelBron(pID) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    "Вы действительно хотите отменить бронь?<div class='notes'>** при отмене брони взымаются бонусы  **</div><div class='notes'>** при отрицательном баласне бронь недоступна  **</div><div class='notes'>** если бронь принята -1 бонус **</div><div class='notes'>** если бронь принята и до брони меньше 1 дня, -2 бонуса **</div><div class='notes'>** если бронь принята и до брони меньше 12 часов, -3 бонуса **</div><div class='notes'>** если бронь принята и до брони меньше 2-ух часов, -5 бонусов **</div>";
  document.getElementById('multiple').innerHTML =
    '<a onclick="cancelBron(' +
    pID +
    ');" class="closeOk" href="#closeOk">да</a><a onclick="closeContX()" class="closeOk" href="#closeOk">нет</a>';
}
function showBron(details, ids) {
  var dateGet = details.match(new RegExp('datexp' + '(.*)' + 'descxp'));
  dateGet = dateGet[1];
  var tempMonthGet = dateGet.split('-');
  var monthGet = tempMonthGet[1];
  if (monthGet == 1) {
    monthGet = 'Января';
  } else if (monthGet == 2) {
    monthGet = 'Февраля';
  } else if (monthGet == 3) {
    monthGet = 'Марта';
  } else if (monthGet == 4) {
    monthGet = 'Апреля';
  } else if (monthGet == 5) {
    monthGet = 'Мая';
  } else if (monthGet == 6) {
    monthGet = 'Июня';
  } else if (monthGet == 7) {
    monthGet = 'Июля';
  } else if (monthGet == 8) {
    monthGet = 'Августа';
  } else if (monthGet == 9) {
    monthGet = 'Сентября';
  } else if (monthGet == 10) {
    monthGet = 'Октября';
  } else if (monthGet == 11) {
    monthGet = 'Ноября';
  } else if (monthGet == 12) {
    monthGet = 'Декабря';
  }
  var tempTime = tempMonthGet[2].split(' ')[1];
  tempTime = tempTime.substring(0, tempTime.length - 3);
  dateGet =
    'Прибытие в ' +
    tempTime +
    ', ' +
    tempMonthGet[2].split(' ')[0] +
    ' ' +
    monthGet +
    ', ' +
    tempMonthGet[0] +
    ' года';
  ids = 'idxp' + ids;
  details = details.replace(ids, '');
  var bronStatus = '';
  if (details.includes('waitxp')) {
    bronStatus = 'Бронь ожидает подтверждения';
  } else {
    bronStatus = 'Бронь принята';
  }
  var bronAmount = details.match(new RegExp('amountxp' + '(.*)' + 'datexp'));
  bronAmount = bronAmount[1];
  var bronDesc = details.match(new RegExp('descxp' + '(.*)'));
  bronDesc = bronDesc[1];
  details =
    bronStatus +
    '<br>Количество человек: ' +
    bronAmount +
    '<br>' +
    dateGet +
    '<br>Детали: ' +
    bronDesc;
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = details;
}
function imageExists(image_url, tID) {
  var image = new Image();

  image.onload = function () {
    document.getElementById(tID).setAttribute('src', image_url);
  };
  image.onerror = function () {
    return false;
  };
  image.src = image_url;
}
function clearPlace() {
  document.getElementById('pcell1').innerHTML = '';
  document.getElementById('pcell2').innerHTML = '';
  document.getElementById('pcell3').innerHTML = '';
  document.getElementById('pcell4').innerHTML = '';
  document.getElementById('pcell5').innerHTML = '';
}
function clearPlace3() {
  document.getElementById('pstcell1').innerHTML = '';
  document.getElementById('pstcell2').innerHTML = '';
  document.getElementById('pstcell3').innerHTML = '';
  document.getElementById('pstcell4').innerHTML = '';
  document.getElementById('pstcell5').innerHTML = '';
}
function switchPlace(sw) {
  if (document.getElementById('placeGen').style.backgroundColor != '') {
    var pcount = parseInt(document.getElementById('placePage').innerHTML);
    if (placeData.length / (pcount * 5) < 1 && sw > 0) {
      return;
    }
    clearPlace();
    if ((pcount == 1 && sw < 1) || (sw > 0 && pcount * 5 == placeData.length)) {
    } else {
      pcount = pcount + sw;
    }
    document.getElementById('placePage').innerHTML = pcount;
    var limit = (pcount - 1) * 5;
    var counter = 0;
    for (var i = 0 + limit; i < 5 + limit && i < placeData.length; i++) {
      counter++;
      var obj = placeData[i];
      document.getElementById('pcell' + counter).innerHTML = obj;
    }
  } else if (document.getElementById('kuponGen').style.backgroundColor != '') {
    var pcount = parseInt(document.getElementById('placePage').innerHTML);
    if (kuponData.length / (pcount * 5) < 1 && sw > 0) {
      return;
    }
    clearPlace();
    if ((pcount == 1 && sw < 1) || (sw > 0 && pcount * 5 == kuponData.length)) {
    } else {
      pcount = pcount + sw;
    }
    document.getElementById('placePage').innerHTML = pcount;

    var limit = (pcount - 1) * 5;
    var counter = 0;
    for (var i = 0 + limit; i < 5 + limit && i < kuponData.length; i++) {
      counter++;
      var obj = kuponData[i];
      document.getElementById('pcell' + counter).innerHTML = obj;
    }
  } else if (document.getElementById('eventGen').style.backgroundColor != '') {
    var pcount = parseInt(document.getElementById('placePage').innerHTML);
    if (eventPlaceData.length / (pcount * 5) < 1 && sw > 0) {
      return;
    }
    clearPlace();
    if (
      (pcount == 1 && sw < 1) ||
      (sw > 0 && pcount * 5 == eventPlaceData.length)
    ) {
    } else {
      pcount = pcount + sw;
    }
    document.getElementById('placePage').innerHTML = pcount;

    var limit = (pcount - 1) * 5;
    var counter = 0;
    for (var i = 0 + limit; i < 5 + limit && i < eventPlaceData.length; i++) {
      counter++;
      var obj = eventPlaceData[i];
      document.getElementById('pcell' + counter).innerHTML = obj;
    }
  }
}

function getLogo(ext, id2) {
  var tempPath = '';
  tempPath = 'upload/i' + id2 + 'dxlx.' + ext;
  $.get(tempPath)
    .done(function () {
      tempPath = '<img alt="???" src="' + tempPath + '">';
      alert(tempPath);
      return tempPath;
    })
    .fail(function () {
      if (ext == 'jpg') {
        getLogo('png', id2);
      } else if (ext == 'png') {
        getLogo('jpeg', id2);
      } else {
        return 'no';
      }
    });
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

function continueLoadProfile(unID, tempLat, tempLon) {
  $.ajax({
    type: 'post',
    url: 'loadP.php',
    data: {
      checkL: unID,
      fLat: tempLat,
      fLon: tempLon,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('havsuccesshav') >= 0) {
        fillProf(data);
      } else {
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'ошибка входа';
        document.getElementById('logBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
      }
    },
  });
}
function loadProfile(unID) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        continueLoadProfile(
          unID,
          parseFloat(position.coords.latitude),
          parseFloat(position.coords.longitude),
        );
      },
      function (error) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML =
          'доступ к вашей локации отклонен';
        continueLoadProfile(unID, 0, 0);
      },
      {enableHighAccuracy: true, timeout: 5000},
    );
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      'ваше устройство не поддерживает определение локации';
    continueLoadProfile(unID, 0, 0);
  }
  document.getElementById('logBox').style.display = 'none';
}

function sendSMS() {
  var cDay = document.getElementById('day');
  cDay = cDay.options[cDay.selectedIndex].text;
  var tempVar = cDay;
  cDay = document.getElementById('month');
  cDay = cDay.options[cDay.selectedIndex].text;
  if (cDay == 'январь') {
    cDay = 1;
  } else if (cDay == 'февраль') {
    cDay = 2;
  } else if (cDay == 'март') {
    cDay = 3;
  } else if (cDay == 'апрель') {
    cDay = 4;
  } else if (cDay == 'май') {
    cDay = 5;
  } else if (cDay == 'июнь') {
    cDay = 6;
  } else if (cDay == 'июль') {
    cDay = 7;
  } else if (cDay == 'август') {
    cDay = 8;
  } else if (cDay == 'сентябрь') {
    cDay = 9;
  } else if (cDay == 'октябрь') {
    cDay = 10;
  } else if (cDay == 'ноябрь') {
    cDay = 11;
  } else if (cDay == 'декабрь') {
    cDay = 12;
  }
  if (tempVar > 0 && tempVar < 31 && cDay > 0 && cDay < 13) {
    tempVar = cDay + '-' + tempVar;
    cDay = document.getElementById('year');
    cDay = cDay.options[cDay.selectedIndex].text;
    if (cDay > 1920 && cDay < new Date().getFullYear()) {
      var dayD = cDay + '-' + tempVar;
      var nameD = document.getElementById('rName').value;
      var lastD = document.getElementById('rLastName').value;
      var passD = document.getElementById('rPass').value;
      var phone = document.getElementById('rPhone').value;
      $.ajax({
        type: 'post',
        url: 'checkPhone.php',
        data: {
          phone: phone,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML =
              'пользователь уже существует';
            document.getElementById('regBox').style.display = 'block';
          } else if (data.indexOf('errnotvalid') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML =
              'проверьте номер, должен начинаться с +375 или 80, код оператора должен быть один из следующих: 25,29,33,44';
            document.getElementById('regBox').style.display = 'block';
          } else if (data.indexOf('errperson') >= 0) {
            var phonePass = data.match(
              new RegExp('errperson' + '(.*)' + 'finito'),
            );
            phonePass = phonePass[1];
            $.ajax({
              type: 'post',
              url: 'mail.php',
              data: {
                phone: phonePass,
                dayD: dayD,
                nameD: nameD,
                lastD: lastD,
                passD: passD,
              },
              success: function (data) {
                console.log(data);
                if (data.indexOf('havsuccesshav') >= 0) {
                  var check = data.match(
                    new RegExp('havsuccesshav' + '(.*)' + 'havfinito'),
                  );
                  check = check[1];
                  document.getElementById('checkCode').innerHTML = check;
                  document.getElementById('rcodeBox').style.display = 'block';
                } else if (data.indexOf('havwaithav') >= 0) {
                  var waitTime = data.match(
                    new RegExp('havwaithav' + '(.*)' + 'havwaitendhav'),
                  );
                  waitTime = waitTime[1];
                  document.getElementById('contxg').style.display = 'block';
                  document.getElementById('errReg').innerHTML =
                    'повторите попытку через ' + waitTime + ' минут';
                  document.getElementById('regBox').style.display = 'block';
                  document.getElementById('load').style.display = 'none';
                } else {
                  document.getElementById('contxg').style.display = 'block';
                  document.getElementById('errReg').innerHTML =
                    'ошибка отправки';
                  document.getElementById('regBox').style.display = 'block';
                  document.getElementById('load').style.display = 'none';
                }
              },
            });
          } else if (data.indexOf('errempty') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'пустой запрос';
            document.getElementById('regBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML =
              'потеряна связь с сервером';
            document.getElementById('regBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
          }
        },
      });
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'неверный год';
      document.getElementById('regBox').style.display = 'block';
      document.getElementById('load').style.display = 'none';
    }
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'неверное число или месяц';
    document.getElementById('regBox').style.display = 'block';
    document.getElementById('load').style.display = 'none';
  }
}

function getCookie(name) {
  var value = `; ${document.cookie}`;
  var parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function registration() {
  document.getElementById('logBox').style.display = 'none';
  document.getElementById('regBox').style.display = 'block';
}

function register() {
  document.getElementById('regBox').style.display = 'none';
  document.getElementById('load').style.display = 'block';
  if (validatePhone(document.getElementById('rPhone').value)) {
    if (
      document.getElementById('rPass').value ==
      document.getElementById('rrPass').value
    ) {
      if (document.getElementById('rPass').value != '') {
        if (document.getElementById('rPass').value.length > 5) {
          if (
            document.getElementById('rName').value != '' &&
            document.getElementById('rName').value != ''
          ) {
            sendSMS();
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'введите имя/фамилию';
            document.getElementById('regBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
          }
        } else {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML =
            'минимальная длина пароля 6 символов';
          document.getElementById('regBox').style.display = 'block';
          document.getElementById('load').style.display = 'none';
        }
      } else {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'введите пароль';
        document.getElementById('regBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
      }
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'пароли не совпадают';
      document.getElementById('regBox').style.display = 'block';
      document.getElementById('load').style.display = 'none';
    }
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'проверьте номер';
    document.getElementById('regBox').style.display = 'block';
    document.getElementById('load').style.display = 'none';
  }
}

function contReg() {
  document.getElementById('rcodeBox').style.display = 'none';
  var nCheck = document.getElementById('checkCode').innerHTML;
  var codeCheck = document.getElementById('regCode').value;
  if (
    isFinite(nCheck) &&
    nCheck < 376000000000 &&
    nCheck > 374999999999 &&
    isFinite(codeCheck)
  ) {
    $.ajax({
      type: 'post',
      url: 'reg.php',
      data: {
        checkN: nCheck,
        checkC: codeCheck,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('added') >= 0) {
          document.getElementById('successMsg').innerHTML =
            'Регистрация прошла успешно!';
          document.getElementById('successBox').style.display = 'block';
        } else if (data.indexOf('invalid') >= 0) {
          document.getElementById('rcodeBox').style.display = 'block';
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'проверьте почту';
        } else if (data.indexOf('used') >= 0) {
          document.getElementById('rcodeBox').style.display = 'block';
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML =
            'почта уже используется';
        } else if (
          data.indexOf('errdata') >= 0 ||
          data.indexOf('errserver') >= 0
        ) {
          document.getElementById('rcodeBox').style.display = 'block';
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'сервер не доступен';
        } else {
          document.getElementById('rcodeBox').style.display = 'block';
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'ошибка регистрации';
        }
      },
    });
  } else {
    document.getElementById('logBox').style.display = 'block';
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'ошибка определения номера';
  }
}

function tryLogin() {
  document.getElementById('regBox').style.display = 'none';
  document.getElementById('profBox').style.display = 'none';
  document.getElementById('reccBox').style.display = 'none';
  document.getElementById('recnBox').style.display = 'none';
  document.getElementById('recBox').style.display = 'none';
  document.getElementById('rcodeBox').style.display = 'none';
  document.getElementById('successBox').style.display = 'none';
  document.getElementById('logBox').style.display = 'block';
}

function forgot() {
  document.getElementById('logBox').style.display = 'none';
  document.getElementById('recBox').style.display = 'block';
}

function recoverP() {
  document.getElementById('recBox').style.display = 'none';
  document.getElementById('load').style.display = 'block';
  animate = true;
  o.c = 1;
  var dEmail = document.getElementById('recEmail').value;
  $.ajax({
    type: 'post',
    url: 'checkPhone.php',
    data: {
      email: dEmail,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('success') >= 0) {
        var email = data.match(new RegExp('(.*)' + 'success'));
        email = email[1];
        $.ajax({
          type: 'post',
          url: 'mail.php',
          data: {
            email: email,
          },
          success: function (data) {
            console.log(data);
            if (data.indexOf('keyx') >= 0) {
              if (data.indexOf('errshortp') >= 0) {
                document.getElementById('recBox').style.display = 'block';
                document.getElementById('load').style.display = 'none';
                animate = false;
                document.getElementById('contxg').style.display = 'block';
                document.getElementById('errReg').innerHTML = 'короткий пароль';
              } else {
                document.getElementById('load').style.display = 'none';
                animate = false;
                document.getElementById('reccBox').style.display = 'block';
              }
            } else {
              document.getElementById('recBox').style.display = 'block';
              document.getElementById('load').style.display = 'none';
              animate = false;
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML =
                'сообщение не отправлено';
            }
          },
        });
      } else if (data.indexOf('invalid') >= 0) {
        document.getElementById('recBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'проверьте почту';
      } else if (data.indexOf('errperson') >= 0) {
        document.getElementById('recBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'пользователь не найден';
      } else if (data.indexOf('errempty') >= 0) {
        document.getElementById('recBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'пустой запрос';
      } else {
        document.getElementById('recBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'неизвестная ошибка';
      }
    },
  });
}
function logIn() {
  document.getElementById('logBox').style.display = 'none';
  var dLogin = document.getElementById('lLogin').value;
  var dPass = document.getElementById('lPass').value;
  $.ajax({
    type: 'post',
    url: 'login.php',
    data: {
      phone: dLogin,
      pass: dPass,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('success') >= 0) {
        window.location.reload();
      } else if (data.indexOf('invalid') >= 0) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'проверьте почту';
        document.getElementById('logBox').style.display = 'block';
      } else if (data.indexOf('errpassx') >= 0) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'проверьте пароль';
        document.getElementById('logBox').style.display = 'block';
        animate = false;
      } else if (
        data.indexOf('errdata') >= 0 ||
        data.indexOf('errserver') >= 0
      ) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'сервер не доступен';
        document.getElementById('load').style.display = 'none';
        document.getElementById('logBox').style.display = 'block';
        animate = false;
      } else {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML =
          'проверьте пароль/телефон';
        document.getElementById('load').style.display = 'none';
        document.getElementById('logBox').style.display = 'block';
        animate = false;
      }
    },
  });
}

function confirmRecovery() {
  document.getElementById('reccBox').style.display = 'none';
  document.getElementById('load').style.display = 'block';
  animate = true;
  o.c = 1;

  $.ajax({
    type: 'get',
    url: 'codeCheck.php',
    success: function (data) {
      console.log(data);

      if (MD5(document.getElementById('recCode').value) == data) {
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('recnBox').style.display = 'block';
      } else {
        document.getElementById('reccBox').style.display = 'block';
        document.getElementById('load').style.display = 'none';
        animate = false;
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'неправильный код';
      }
    },
  });
}

function updatePass() {
  document.getElementById('recnBox').style.display = 'none';
  document.getElementById('load').style.display = 'block';
  animate = true;
  o.c = 1;
  if (
    document.getElementById('newP1').value ==
    document.getElementById('newP2').value
  ) {
    if (document.getElementById('newP1').value.length > 5) {
      var dPass = document.getElementById('newP1').value;
      $.ajax({
        type: 'post',
        url: 'updatePass.php',
        data: {
          pass: dPass,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('added') >= 0) {
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('recnBox').style.display = 'none';
            document.getElementById('successMsg').innerHTML =
              'Пароль был обнавлен!';
            document.getElementById('successBox').style.display = 'block';
          } else if (data.indexOf('invalid') >= 0) {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'проверьте почту';
          } else if (data.indexOf('errperson') >= 0) {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML =
              'пользователь не найден';
          } else if (
            data.indexOf('errdata') >= 0 ||
            data.indexOf('errserver') >= 0
          ) {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'сервер не доступен';
          } else if (data.indexOf('errshortp') >= 0) {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'короткий пароль';
          } else if (data.indexOf('errempty') >= 0) {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'пустой запрос';
          } else {
            document.getElementById('recnBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            aninmate = false;
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'неизвестная ошибка';
          }
        },
      });
    } else {
      document.getElementById('recnBox').style.display = 'block';
      document.getElementById('load').style.display = 'none';
      animate = false;
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML =
        'минимальная длина пароля 6 символов';
    }
  } else {
    document.getElementById('recnBox').style.display = 'block';
    document.getElementById('load').style.display = 'none';
    animate = false;
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'пароли не совпадают';
  }
}

var delete_cookie = function (name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function logOut() {
  delete_cookie('c');
  location.reload();
}

function deleteProfile() {
  document.getElementById('multiple').innerHTML =
    '<a onclick="confirmDelete()" class="closeOk" href="#closeOk">Да</a><a onclick="closeContX()"class="closeOk" href="#closeOk">Нет</a>';
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'удалить профиль?';
}

function confirmDelete() {
  document.getElementById('settingBox').style.display = 'none';
  document.getElementById('load').style.display = 'block';
  animate = true;
  o.c = 1;
  document.getElementById('contxg').style.display = 'none';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX()" class="closeOk" href="#closeOk">Ок</a>';
  var logCheck = getCookie('c');
  $.ajax({
    type: 'post',
    url: 'deleteProfile.php',
    data: {
      logCheck: logCheck,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('added') >= 0) {
        delete_cookie('c');
        location.reload();
      } else if (
        data.indexOf('errdata') >= 0 ||
        data.indexOf('errserver') >= 0
      ) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'сервер не доступен';
      } else if (data.indexOf('errempty') >= 0) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'пустой запрос';
      } else {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'неизвестная ошибка';
      }
    },
  });
}

function openSettings() {
  document.getElementById('regBox').style.display = 'none';
  document.getElementById('profBox').style.display = 'none';
  document.getElementById('reccBox').style.display = 'none';
  document.getElementById('recnBox').style.display = 'none';
  document.getElementById('recBox').style.display = 'none';
  document.getElementById('rcodeBox').style.display = 'none';
  document.getElementById('successBox').style.display = 'none';
  document.getElementById('logBox').style.display = 'none';
  if (document.getElementById('settingBox').style.display == 'block') {
    document.getElementById('settingBox').style.display = 'none';
    document.getElementById('profBox').style.display = 'block';
  } else {
    document.getElementById('settingBox').style.display = 'block';
  }
}

function closeContX() {
  $('body').css('overflow', '');
  document.getElementById('contxg').style.display = 'none';
  document.getElementById('errReg').innerHTML = '';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX()" class="closeOk" href="#closeOk">Ок</a>';
}

function pShow() {
  if (document.getElementById('pHide').style.display == 'none') {
    document.getElementById('pHide').style.display = 'block';
    updatePX = '2';
  } else {
    document.getElementById('pHide').style.display = 'none';
    updatePX = '1';
  }
}
function tShow() {
  alert('отправка кода');
}

function switchLogo(id) {
  for (var i = 1; i < 12; i++) {
    document.getElementById('im' + i).style.backgroundColor = '';
  }
  document.getElementById(id).style.backgroundColor = 'rgb(125,200,125)';
  id = id.replace('im', '');
  profPicX = id;
}

function updateInfo() {
  document.getElementById('settingBox').style.display = 'none';
  var logCheck = getCookie('c');
  if (updatePX == '2') {
    if (document.getElementById('cP1x').value.length < 6) {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML =
        'минимальная длина пароля 6 символов';
      document.getElementById('settingBox').style.display = 'block';
    } else if (
      document.getElementById('cP2x').value ==
      document.getElementById('cP1x').value
    ) {
      if (logCheck.includes('x5qz')) {
        var name = document.getElementById('nChange').value;
        var last = document.getElementById('lChange').value;
        var gender = document.getElementById('sGender').selectedIndex;
        var dPass = document.getElementById('cP1x').value;
        $.ajax({
          type: 'post',
          url: 'updateInfo.php',
          data: {
            pass: dPass,
            name: name,
            last: last,
            gender: gender,
            pic: profPicX,
            checkL: logCheck,
          },
          success: function (data) {
            console.log(data);
            if (data.indexOf('havsuccesshav') >= 0) {
              location.reload();
            } else if (data.indexOf('errregion') >= 0) {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errregion').innerHTML =
                'регион не найден';
              document.getElementById('settingBox').style.display = 'block';
            } else if (
              data.indexOf('errdata') >= 0 ||
              data.indexOf('errserver') >= 0
            ) {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML =
                'сервер не доступен';
              document.getElementById('settingBox').style.display = 'block';
            } else if (data.indexOf('errshortp') >= 0) {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML = 'короткий пароль';
              document.getElementById('settingBox').style.display = 'block';
            } else if (data.indexOf('errempty') >= 0) {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML = 'пустой запрос';
              document.getElementById('settingBox').style.display = 'block';
            } else if (data.indexOf('errpassx') >= 0) {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML =
                'неправильный старый пароль';
              document.getElementById('settingBox').style.display = 'block';
            } else {
              document.getElementById('contxg').style.display = 'block';
              document.getElementById('errReg').innerHTML =
                'неизвестная ошибка';
              document.getElementById('settingBox').style.display = 'block';
            }
          },
        });
      } else {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML = 'ошибка входа';
        document.getElementById('settingBox').style.display = 'block';
      }
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'пароли не совпадают';
      document.getElementById('settingBox').style.display = 'block';
    }
  } else {
    if (logCheck.includes('x5qz')) {
      var name = document.getElementById('nChange').value;
      var last = document.getElementById('lChange').value;
      var gender = document.getElementById('sGender').selectedIndex;
      $.ajax({
        type: 'post',
        url: 'updateInfo.php',
        data: {
          name: name,
          last: last,
          gender: gender,
          pic: profPicX,
          checkL: logCheck,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('havsuccesshav') >= 0) {
            location.reload();
          } else if (data.indexOf('errregion') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'регион не найден';
            document.getElementById('settingBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
          } else if (
            data.indexOf('errdata') >= 0 ||
            data.indexOf('errserver') >= 0
          ) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'сервер не доступен';
            document.getElementById('settingBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
          } else if (data.indexOf('errshortp') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'короткий пароль';
            document.getElementById('settingBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
          } else if (data.indexOf('errempty') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'пустой запрос';
            document.getElementById('settingBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'неизвестная ошибка';
            document.getElementById('settingBox').style.display = 'block';
            document.getElementById('load').style.display = 'none';
            animate = false;
          }
        },
      });
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'ошибка входа';
      document.getElementById('settingBox').style.display = 'block';
      document.getElementById('load').style.display = 'none';
      animate = false;
    }
  }
}

function updatePoints(minus) {
  var thenum = document
    .getElementById('userPoints')
    .innerHTML.replace(/^\D+/g, '');
  thenum -= minus;
  document.getElementById('userPoints').innerHTML = 'Баллы: ' + thenum;
}

function noDirection() {
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'нет доступа к локации';
}

function nextSearch(l1, l2, type) {
  var gender = 0;
  var tempHTML = '';
  var fullHTML = '';
  var inputCheck = '';
  var aFrom = 18;
  var aTo = 99;
  if (type == 3) {
    searchData = [];
    var tempHTML = '<div class="friendsSearchBox"></div>';
    searchData.push(tempHTML);
    inputCheck = document.getElementById('searchInput').value;
    aFrom = document.getElementById('ageFrom');
    aFrom = aFrom.options[aFrom.selectedIndex].text;
    aTo = document.getElementById('ageTo');
    aTo = aTo.options[aTo.selectedIndex].text;
  } else if (type == 1) {
    requestData = [];
  } else if (type == 2) {
    friendData = [];
  }

  if (
    (isFinite(l1) &&
      isFinite(l2) &&
      isFinite(tempSkills) &&
      isFinite(tempStatus) &&
      isFinite(aFrom) &&
      isFinite(aTo) &&
      type == 3) ||
    (isFinite(type) && type < 3 && type > 0)
  ) {
    var unID = getCookie('c');
    if (unID != null && unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'findFriends.php',
        data: {
          checkL: unID,
          fSearch: inputCheck,
          fGender: gender,
          fAgeTo: aTo,
          fAgeFrom: aFrom,
          fSkill: tempSkills,
          fStatus: tempStatus,
          fLat: l1,
          fLon: l2,
          fType: type,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('havsuccesshav') >= 0) {
            var gFullName = '';
            var tempLastName = '';
            var gBirth = '';
            var gPic = '';
            var gPhone = '';
            var gID = '';
            var gStat = '';
            var gDis = '';
            var actX = '';
            if (data.indexOf('havfinito:') >= 0) {
              var counter = data.match(
                new RegExp('havtotalhav' + '(.*)' + 'havfintotalhav'),
              );
              counter = counter[1];
              var counter2 = 1;
              if (type == 3) {
                updatePoints(5);
                var addOperation = document.getElementById('contOP').innerHTML;
                addOperation =
                  '<div class="operation">Поиск людей, 5 баллов потрачено<br><div style="width:100%" class="personM">Недавно</div>' +
                  addOperation;
                document.getElementById('contOP').innerHTML = addOperation;
              }
              while (counter2 <= counter && counter != 0) {
                gPhone = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havphone:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havgender:',
                  ),
                );
                gPhone = gPhone[1];
                gPic = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havpic:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havskill:',
                  ),
                );
                gPic = gPic[1];
                gFullName = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havname:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havlastname:',
                  ),
                );
                gFullName = gFullName[1];
                tempLastName = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havlastname:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havage:',
                  ),
                );
                tempLastName = tempLastName[1];
                gFullName += ' ' + tempLastName;
                gAge = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havage:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havpic:',
                  ),
                );
                gAge = gAge[1];
                gFullName = '(' + gAge + ') ' + gFullName;
                gGender = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havgender:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havname:',
                  ),
                );
                gGender = gGender[1];
                gID = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havid:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havstat:',
                  ),
                );
                gID = gID[1];
                gInfo = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havinfo:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havlat:',
                  ),
                );
                gInfo = gInfo[1];
                gLat = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havlat:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havlon:',
                  ),
                );
                gLat = gLat[1];
                gLon = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havlon:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havid:',
                  ),
                );
                gLon = gLon[1];
                gFiltr = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havstatus:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havinfo:',
                  ),
                );
                gFiltr = gFiltr[1];
                gStat = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havstat:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havdis:',
                  ),
                );
                gStat = gStat[1];
                gDis = data.match(
                  new RegExp(
                    'x' +
                      counter2 +
                      'havdis:' +
                      '(.*)' +
                      'x' +
                      counter2 +
                      'havfinito:',
                  ),
                );
                gDis = gDis[1];
                var tempSearchHTML = '';
                if (gGender == 0) {
                  gGender = '';
                }
                if (gGender == 1) {
                  gGender = '<img src="images/female.png">';
                }
                if (gGender == 2) {
                  gGender = '<img src="images/male.png">';
                }
                if (gLat == gLon && gLat == 1) {
                  actX =
                    '<a onclick="noDirection();" style="background-color:rgb(100,50,50);">' +
                    gDis +
                    '</a>';
                } else {
                  actX =
                    '<a href="https://www.google.com/maps/dir/?api=1&origin=' +
                    l1 +
                    ',' +
                    l2 +
                    '&destination=' +
                    gLat +
                    ',' +
                    gLon +
                    '&travelmode=driving" target="_blank" style="background-color:rgb(50,100,50);">' +
                    gDis +
                    '</a>';
                }
                if (gFiltr > 0 && gFiltr < filtrList.length + 1) {
                  gFiltr = filtrList[gFiltr - 1];
                  actX +=
                    '<a style="background-color:rgb(50,100,50);" >' +
                    gFiltr +
                    '</a>';
                }
                if (gStat == 'no') {
                  actX +=
                    '<a onclick="addFriend(this,' +
                    "'" +
                    gID +
                    "'" +
                    ',2)">Добавить</a>';
                } else if (gStat == 'friends') {
                  var link = 'tel:+' + gPhone;
                  actX +=
                    '<a href="' +
                    link +
                    '">Позвонить</a><a onclick="addFriend(this,' +
                    "'" +
                    gID +
                    "'" +
                    ',1)">Удалить</a><a onclick="sendOpen(' +
                    gID +
                    ')">Написать</a>';
                } else if (gStat == 'yousub') {
                  actX +=
                    '<a onclick="addFriend(this,' +
                    "'" +
                    gID +
                    "'" +
                    ',3)" >Отменить</a>';
                } else if (gStat == 'hesub') {
                  actX +=
                    '<a onclick="addFriend(this,' +
                    "'" +
                    gID +
                    "'" +
                    ',4)">Принять</a>';
                }
                /*listP='<div '+styleM+' onclick="selectMessage('+sendTo+',this,'+postOwner+','+postID+','+"'"+uniqueID+"'"+')" class="messagePerson"><img src="images/'+thePic+'.png"><div class="personNandM"><div class="personN">'+toName+'</div><div class="personM">'+message.replaceAll("</br>"," ")+'</div></div></div>';*/
                tempSearchHTML +=
                  '<div class="messagePerson"><img src="images/' +
                  gPic +
                  '.png"><div class="personNandM">' +
                  gGender +
                  '<div class="personN">' +
                  gFullName +
                  '</div><div class="personM">' +
                  gInfo +
                  '</div></div></div><div class="friendAction">' +
                  actX +
                  '</div>';
                if (type == 1) {
                  fullHTML += tempSearchHTML;
                } else if (type == 2) {
                  fullHTML += tempSearchHTML;
                } else if (type == 3) {
                  fullHTML += tempSearchHTML;
                }

                counter2++;
              }
              if (type == 1) {
                document.getElementById('containerContactsRequest').innerHTML =
                  fullHTML;
              } else if (type == 2) {
                document.getElementById('containerContacts').innerHTML =
                  fullHTML;
              } else if (type == 3) {
                document.getElementById('searchResults').innerHTML = fullHTML;
              }
            } else {
              if (type == 3) {
                document.getElementById('contxg').style.display = 'block';
                document.getElementById('errReg').innerHTML =
                  'не удалось найти людей';
              } else if (type == 2) {
                document.getElementById('containerContacts').innerHTML =
                  "<div class='personN'>Нет контактов</div>";
              } else if (type == 1) {
                document.getElementById('containerContactsRequest').innerHTML =
                  "<div class='personN'>Нет запросов</div>";
              }
            }
          } else if (data.indexOf('havnopointshav') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'недостаточно баллов';
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'ошибка загрузки';
          }
        },
      });
    } else {
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'ошибка входа';
    }
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'ошибка поиска';
  }
}

function startSearch(lookUp) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        nextSearch(
          parseFloat(position.coords.latitude),
          parseFloat(position.coords.longitude),
          lookUp,
        );
      },
      function (error) {
        if (lookUp != 3) {
          nextSearch(1, 1, lookUp);
        } else {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML =
            'доступ к вашей локации отклонен';
        }
      },
      {enableHighAccuracy: true, timeout: 5000},
    );
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      'ваше устройство не поддерживает определение локации';
    if (lookUp != 3) {
      nextSearch(1, 1, lookUp);
    }
  }
}

function addFriend(addr, fID, actX) {
  var errS = 'ошибка';
  var tempIDX2 = '';
  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $.ajax({
      type: 'post',
      url: 'addremovefriend.php',
      data: {
        checkL: unID,
        fID: fID,
        act: actX,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('success') >= 0) {
          if (actX == 1) {
            addr.innerHTML = 'Принять';
            addr.setAttribute('onclick', 'addFriend(this,"' + fID + '",4)');
          } else if (actX == 3) {
            addr.innerHTML = 'Добавить';
            addr.setAttribute('onclick', 'addFriend(this,"' + fID + '",2)');
          }

          if (actX == 2) {
            addr.innerHTML = 'Отменить';
            addr.setAttribute('onclick', 'addFriend(this,"' + fID + '",3)');
          } else if (actX == 4) {
            addr.innerHTML = 'Удалить';
            addr.setAttribute('onclick', 'addFriend(this,"' + fID + '",1)');
          }
        } else {
          document.getElementById('contxg').style.display = 'block';
          document.getElementById('errReg').innerHTML = 'ошибка загрузки';
          document.getElementById('logBox').style.display = 'block';
          document.getElementById('load').style.display = 'none';
          animate = false;
        }
      },
    });
  }
}

document.addEventListener('keypress', function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    //e.preventDefault();
    //return false;
  }
});

function sendOpen(friendID) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    '<div class="chatX">Короткое сообщение<textarea id="msgID" maxlength="100" style="width:80%"></textarea></div>';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX();" class="closeOk" href="#closeOk">Отмена</a><a onclick="sendSM(' +
    friendID +
    ');" class="closeOk" href="#closeOk">Отправить</a>';
}
function sendOpenX(postOwner, friendID, postID, uniqueID) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    '<div class="chatX">Короткое сообщение<textarea id="msgID" maxlength="100" style="width:80%"></textarea></div>';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX();" class="closeOk" href="#closeOk">Отмена</a><a onclick="sendSMX(' +
    postOwner +
    ',' +
    friendID +
    ',' +
    postID +
    ',' +
    "'" +
    uniqueID +
    "'" +
    ');" class="closeOk" href="#closeOk">Отправить</a>';
}

function sendSM(friendID) {
  var msgSend = document.getElementById('msgID').value;
  document.getElementById('msgID').value = '';
  closeContX();
  console.log('normal');
  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $.ajax({
      type: 'post',
      url: 'sendMessage.php',
      data: {
        checkL: unID,
        sendM: msgSend,
        friendID: friendID,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('havsuccesshav') >= 0) {
          loadUpdate();
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
        }
      },
    });
  }
}

function sendSMX(postOwner, friendID, postID, uniqueID) {
  console.log('notnormal');
  var msgSend = document.getElementById('msgID').value;
  document.getElementById('msgID').value = '';
  closeContX();
  var unID = getCookie('c');
  if (unID != null && unID.includes('x5qz')) {
    $.ajax({
      type: 'post',
      url: 'sendMessageX.php',
      data: {
        checkL: unID,
        sendM: msgSend,
        friendID: friendID,
        postID: postID,
        uniqueID: uniqueID,
        postOwner: postOwner,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('havsuccesshav') >= 0) {
          loadUpdate();
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
            'объявление изменено либо удалено, сообщение не отправлено';
        }
      },
    });
  }
}

function back() {
  document.getElementById('profBox').style.display = 'inline-block';
  document.getElementById('settingBox').style.display = 'none';
  document.getElementById('placeBox').style.display = 'none';
}
var parOn = false;
function params() {
  if (parOn == false) {
    parOn = true;
    document.getElementById('parametrs').style.display = 'block';
  } else {
    parOn = false;
    document.getElementById('parametrs').style.display = 'none';
  }
}

//email validation
function validatePhone(phone) {
  phone = phone.replace('+', '');
  phone = phone.replace('-', '');
  phone = phone.replace(')', '');
  phone = phone.replace('(', '');
  if (phone.substring(0, 2) == '80' && isFinite(phone) && phone.length == 11) {
    return true;
  } else if (
    phone.substring(0, 3) == '375' &&
    isFinite(phone) &&
    phone.length == 12
  ) {
    return true;
  } else {
    return false;
  }
}

function showNav() {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML =
    '<div class="rateplace" id="rateplaceID"><span>Разделы</span><br><br><a href="view.html?v=' +
    vGlobal +
    '">Обзор</a><a href="promo.html?v=' +
    vGlobal +
    '">Акции</a><a href="posts.html?v=' +
    vGlobal +
    '">Объявления</a></div>';
  //document.getElementById("multiple").innerHTML="";
}

function placeGen() {
  clearPlace();
  document.getElementById('placePage').innerHTML = 1;
  document.getElementById('placeGen').style.backgroundColor =
    'rgb(100,100,100)';
  document.getElementById('kuponGen').style.backgroundColor = '';
  document.getElementById('eventGen').style.backgroundColor = '';
  switchPlace(-1);
}
function kuponGen() {
  clearPlace();
  document.getElementById('placePage').innerHTML = 1;
  document.getElementById('placeGen').style.backgroundColor = '';
  document.getElementById('kuponGen').style.backgroundColor =
    'rgb(100,100,100)';
  document.getElementById('eventGen').style.backgroundColor = '';
  switchPlace(-1);
}
function eventGen() {
  clearPlace();
  document.getElementById('placePage').innerHTML = 1;
  document.getElementById('placeGen').style.backgroundColor = '';
  document.getElementById('kuponGen').style.backgroundColor = '';
  document.getElementById('eventGen').style.backgroundColor =
    'rgb(100,100,100)';
  switchPlace(-1);
}
function requestGen() {
  clearPlace2();
  document.getElementById('placePage2').innerHTML = 1;
  document.getElementById('kontaktGen').style.backgroundColor = '';
  document.getElementById('requestGen').style.backgroundColor =
    'rgb(100,100,100)';
  startSearch(1);
}
function kontaktGen() {
  clearPlace2();
  document.getElementById('placePage2').innerHTML = 1;
  document.getElementById('kontaktGen').style.backgroundColor =
    'rgb(100,100,100)';
  document.getElementById('requestGen').style.backgroundColor = '';
  startSearch(2);
}

function modGen() {
  var unID = getCookie('c');
  unID = unID.replace(/(^\d+)(.+$)/i, '$1');
  if (post1.length == 2) {
    document.getElementById('postName1').innerHTML = post1[0];
    document.getElementById('postDetails1').innerHTML = post1[1];
  }
  if (post2.length == 2) {
    document.getElementById('postName2').innerHTML = post2[0];
    document.getElementById('postDetails2').innerHTML = post2[1];
  }
  if (post3.length == 2) {
    document.getElementById('postName3').innerHTML = post3[0];
    document.getElementById('postDetails3').innerHTML = post3[1];
  }
  var tempPublish =
    '<a onclick="openPostDelete(1)" style="margin-top:0;width:30%;">Удалить</a><a style="margin-top:0;width:30%;" onclick="publishPost(1)">Опубликовать</a>';
  if (postS1 == 2) {
    tempPublish =
      '<a onclick="openPostPause(1)" style="margin-top:0;width:30%;">Отключить</a><a style="margin-top:0;width:30%;" onclick="publishPost(1)">Обновить</a>';
  } else if (postS1 == 3) {
    tempPublish =
      '<a style="margin-top:0;width:30%;" onclick="publishPost(1)">Опубликовать</a>';
  }
  if (ext1[0] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost1.jpeg?' + ext1[0],
      'lilppic1',
    );
  }
  if (ext1[1] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost2.jpeg?' + ext1[1],
      'lilppic2',
    );
  }
  if (ext1[2] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost3.jpeg?' + ext1[2],
      'lilppic3',
    );
  }
  if (ext1[3] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost4.jpeg?' + ext1[3],
      'lilppic4',
    );
  }

  if (ext2[0] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost5.jpeg?' + ext2[0],
      'lilppic5',
    );
  }
  if (ext2[1] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost6.jpeg?' + ext2[1],
      'lilppic6',
    );
  }
  if (ext2[2] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost7.jpeg?' + ext2[2],
      'lilppic7',
    );
  }
  if (ext2[3] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost8.jpeg?' + ext2[3],
      'lilppic8',
    );
  }

  if (ext3[0] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost9.jpeg?' + ext3[0],
      'lilppic9',
    );
  }
  if (ext3[1] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost10.jpeg?' + ext3[1],
      'lilppic10',
    );
  }
  if (ext3[2] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost11.jpeg?' + ext3[2],
      'lilppic11',
    );
  }
  if (ext3[3] != 1) {
    imageExists(
      'upload/user/' + unID + '/lilpost12.jpeg?' + ext3[3],
      'lilppic12',
    );
  }
}

function selectSkills(sklID, skl) {
  tempSkills = sklID;
  tempSKillText = skl.innerHTML;
  document.getElementById('skillSearch').innerHTML = tempSKillText;
  closeContX();
}
function selectStatus(sklID, skl) {
  tempStatus = sklID;
  tempStatusText = skl.innerHTML;
  document.getElementById('statusSearch').innerHTML = tempStatusText;
  closeContX();
}
function getStatus() {
  return "<div class='skills'><a href='#status' onclick='selectStatus(1,this)'>Медик</a><a href='#status' onclick='selectStatus(2,this)'>Нужна помощь</a><a href='#status' onclick='selectStatus(3,this)'>Дружба</a><a href='#status' onclick='selectStatus(4,this)'>Отношения</a><a href='#status' onclick='selectStatus(5,this)'>Любовь</a><a href='#status' onclick='selectStatus(6,this)'>Общение</a><a href='#status' onclick='selectStatus(7,this)'>Бизнес</a><a href='#status' onclick='selectStatus(8,this)'>Прогулка</a><a href='#status' onclick='selectStatus(9,this)'>Активный отдых</a><a href='#status' onclick='selectStatus(10,this)'>Культурный отдых</a><a href='#status' onclick='selectStatus(11,this)'>Отдых на природе</a><a href='#status' onclick='selectStatus(12,this)'>Хочу кофе</a><a href='#status' onclick='selectStatus(13,this)'>Хочу кушать</a><a href='#status' onclick='selectStatus(14,this)'>С кем выпить?</a><a href='#status' onclick='selectStatus(15,this)'>Работодатель</a><a href='#status' onclick='selectStatus(16,this)'>Работник</a><a href='#status' onclick='selectStatus(17,this)'>Муж на час</a><a href='#status' onclick='selectStatus(18,this)'>Электрик</a><a href='#status' onclick='selectStatus(19,this)'>Сантехник</a><a href='#status' onclick='selectStatus(20,this)'>Няня</a><a href='#status' onclick='selectStatus(21,this)'>Аренда</a><a href='#status' onclick='selectStatus(22,this)'>Есть предложение</a><a href='#status' onclick='selectStatus(23,this)'>Катаюсь(вело)</a><a href='#status' onclick='selectStatus(24,this)'>Катаюсь(мото)</a><a href='#status' onclick='selectStatus(25,this)'>Катаюсь(авто)</a><a href='#status' onclick='selectStatus(26,this)'>Ищу попутчика</a><a href='#status' onclick='selectStatus(27,this)'>Приючу</a><a href='#status' onclick='selectStatus(28,this)'>Сломалось авто</a><a href='#status' onclick='selectStatus(29,this)'>Поиграю(онлайн)</a><a href='#status' onclick='selectStatus(30,this)'>Поиграю(встреча)</a></div>";
}
var filtrList = [];
filtrList.push('Медик');
filtrList.push('Нужна помощь');
filtrList.push('Дружба');
filtrList.push('Отношения');
filtrList.push('Любовь');
filtrList.push('Общение');
filtrList.push('Бизнес');
filtrList.push('Прогулка');
filtrList.push('Активный отдых');
filtrList.push('Культурный отдых');
filtrList.push('Отдых на природе');
filtrList.push('Хочу кофе');
filtrList.push('Хочу кушать');
filtrList.push('С кем выпить?');
filtrList.push('Работодатель');
filtrList.push('Работник');
filtrList.push('Муж на час');
filtrList.push('Электрик');
filtrList.push('Сантехник');
filtrList.push('Няня');
filtrList.push('Аренда');
filtrList.push('Есть предложение');
filtrList.push('Катаюсь(вело)');
filtrList.push('Катаюсь(мото)');
filtrList.push('Катаюсь(авто)');
filtrList.push('Ищу попутчика');
filtrList.push('Приючу');
filtrList.push('Сломалось авто');
filtrList.push('Поиграю(онлайн)');
filtrList.push('Поиграю(встреча)');

function getSkills() {
  return "<div class='skills'><a href='#skills' onclick='selectSkills(1,this);'>Медицина</a><a href='#skills' onclick='selectSkills(2,this);'>IT, Фриланс</a><a href='#skills' onclick='selectSkills(3,this);'>Дизайн</a><a href='#skills' onclick='selectSkills(4,this);'>Управление</a><a href='#skills' onclick='selectSkills(5,this);'>Инженерия</a><a href='#skills' onclick='selectSkills(6,this);'>Строительство</a><a href='#skills' onclick='selectSkills(7,this);'>Транспорт</a><a href='#skills' onclick='selectSkills(8,this);'>Маркетинг</a><a href='#skills' onclick='selectSkills(9,this);'>Издательство</a><a href='#skills' onclick='selectSkills(10,this);'>Полиграфия</a><a href='#skills' onclick='selectSkills(11,this);'>Сервис</a><a href='#skills' onclick='selectSkills(12,this);'>Туризм</a><a href='#skills' onclick='selectSkills(13,this);'>Наука</a><a href='#skills' onclick='selectSkills(14,this);'>Образование</a><a href='#skills' onclick='selectSkills(15,this);'>Экономика</a><a href='#skills' onclick='selectSkills(16,this);'>Торговля</a><a href='#skills' onclick='selectSkills(17,this);'>Юриспруденция</a><a href='#skills' onclick='selectSkills(18,this);'>Лингвистика</a><a href='#skills' onclick='selectSkills(19,this);'>Офис</a><a href='#skills' onclick='selectSkills(20,this);'>Общепит</a><a href='#skills' onclick='selectSkills(21,this);'>Мода, Красота</a><a href='#skills' onclick='selectSkills(22,this);'>Спорт, Фитнес</a><a href='#skills' onclick='selectSkills(23,this);'>Недвижимость</a><a href='#skills' onclick='selectSkills(24,this);'>Геология</a><a href='#skills' onclick='selectSkills(25,this);'>Экология</a><a href='#skills' onclick='selectSkills(26,this);'>Фермерство</a><a href='#skills' onclick='selectSkills(27,this);'>Животные</a><a href='#skills' onclick='selectSkills(28,this);'>Промышленность</a><a href='#skills' onclick='selectSkills(29,this);'>Безопасность</a><a href='#skills' onclick='selectSkills(30,this);'>Религия</a></div>";
}
function getAge(bage) {
  var countAge = 18;
  var outAge = '';
  while (countAge < 100) {
    if (bage == 0 && countAge == 18) {
      outAge += '<option selected>' + countAge + '</option>';
    } else if (bage == 1 && countAge == 99) {
      outAge += '<option selected>' + countAge + '</option>';
    } else {
      outAge += '<option>' + countAge + '</option>';
    }

    countAge++;
  }
  return outAge;
}
function openText(theText) {
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = theText.innerHTML;
}

function openPlaceInst() {
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'Не шали';
}
function openPostInst() {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'Не шали';
}
function uploadBtn(id) {
  document.getElementById('PostPic' + id).click();
}
function delBtn(id) {
  document.getElementById(id + 'pic').setAttribute('src', 'images/pic.png');
  document
    .getElementById('lil' + id + 'pic')
    .setAttribute('src', 'images/pic.png');
  document.getElementById('btn' + id).innerHTML = 'Загрузить';
  document
    .getElementById('btn' + id)
    .setAttribute('onclick', 'uploadBtn(' + id + ')');
}
function openPrePost() {
  if (selectedPostMod != 0) {
    var catNames = [];
    var dopNames = [];
    document.getElementById('containerPosts').style.display = 'none';
    var contP =
      '<div class="chatX">' +
      document.getElementById('tm' + selectedPostMod).innerHTML +
      '</div>';
    contP +=
      "<div style='width:100%;color:rgb(140,140,140);' class='personM'><br>Для экономии блалов на редактирование - вводите точные данные </div><br>";
    contP += '<div class="chatX">УНП</div>';
    contP +=
      '<div class="chatX"><input maxlength="20" placeholder="Введите УНП"></div>';
    if (selectedPostMod == 1) {
      catNames.push('Ресторан');
      catNames.push('Кафе');
      catNames.push('Бар/Паб');
      catNames.push('Кофейня');
      catNames.push('Чайная');
      catNames.push('Закусочная');
      catNames.push('Фастфуд');
      catNames.push('Бистро');
      catNames.push('Столовая');
      catNames.push('Буфет');
      catNames.push('Кафетерий');
      catNames.push('Кулинария');
      dopNames.push('24/7');
      dopNames.push('WI-FI');
      dopNames.push('Парковка');
      dopNames.push('Авто(Drive)');
      dopNames.push('Доставка');
      dopNames.push('Торжество');
      dopNames.push('Банкет');
      dopNames.push('Пицца');
      dopNames.push('Шаурма');
      dopNames.push('Шашлык');
      dopNames.push('Суши');
      dopNames.push('Живая музыка');
      dopNames.push('За городом');
      dopNames.push('Клуб');
      dopNames.push('Караоке');
      dopNames.push('Кальян');
      dopNames.push('Для компании');
      dopNames.push('Для детей');
      contP += '<div class="chatX">Название заведения</div>';
    } else if (selectedPostMod == 2) {
      catNames.push('Музей/Выставка');
      catNames.push('Театр/Цирк');
      catNames.push('Кино');
      catNames.push('Аква/Зоопарк');
      catNames.push('Туризм');
      catNames.push('Квест');
      catNames.push('Стрельба');
      catNames.push('Катание');
      catNames.push('Сауна/Баня');
      catNames.push('Караоке');
      catNames.push('Клуб/Дискотека');
      catNames.push('Прочее');
      dopNames.push('24/7');
      dopNames.push('Бильярд');
      dopNames.push('Боулинг');
      dopNames.push('Видеоигры');
      dopNames.push('Комнаты');
      dopNames.push('Танцы');
      dopNames.push('Спорт');
      dopNames.push('Охота/Рыбалка');
      dopNames.push('Пейнтбол');
      dopNames.push('Гольф');
      dopNames.push('Каток');
      dopNames.push('Сноуборд/Лыжи');
      dopNames.push('Торжество');
      dopNames.push('Для детей');
      dopNames.push('Для взрослых');
      dopNames.push('Природа');
      dopNames.push('Экскурсии');
      dopNames.push('Экстрим');
      contP += '<div class="chatX">Наименование досуга</div>';
    } else if (selectedPostMod == 3) {
      catNames.push('Универмаг');
      catNames.push('Супермаркет');
      catNames.push('Гипермаркет');
      catNames.push('Дискаунтер');
      catNames.push('Бутик');
      catNames.push('Торговый дом');
      catNames.push('Гастроном');
      catNames.push('Автоцентр');
      catNames.push('Автозапчасти');
      catNames.push('Зоомагазин');
      catNames.push('Киоск/Ларек');
      catNames.push('Прочее');
      dopNames.push('24/7');
      dopNames.push('Электроника');
      dopNames.push('Техника');
      dopNames.push('Косметика');
      dopNames.push('Автозаправка');
      dopNames.push('Строительный');
      dopNames.push('Мебельный');
      dopNames.push('Бытовой');
      dopNames.push('Одежда');
      dopNames.push('Сэконд/Сток');
      dopNames.push('Канцелярия');
      dopNames.push('Дача и огород');
      dopNames.push('Здоровье и уход');
      dopNames.push('Книги');
      dopNames.push('Исскуство');
      dopNames.push('Интернет');
      dopNames.push('Опт');
      dopNames.push('Инструмент');
      contP += '<div class="chatX">Название магазина</div>';
    } else if (selectedPostMod == 4) {
      catNames.push('Больница');
      catNames.push('Госпиталь');
      catNames.push('Диспансер');
      catNames.push('Поликлиника');
      catNames.push('Мед. часть');
      catNames.push('Родильный дом');
      catNames.push('Амбулатория');
      catNames.push('Клиника');
      catNames.push('Санаторий');
      catNames.push('Аптека');
      catNames.push('Частное');
      catNames.push('Прочее');
      dopNames.push('Скорая помощь');
      dopNames.push('Хоспис');
      dopNames.push('Дом ребенка');
      dopNames.push('Донорство крови');
      dopNames.push('Мед. осмотр');
      dopNames.push('Онлайн талон');
      dopNames.push('Стоматология');
      dopNames.push('Косметология');
      dopNames.push('Массаж/Спа');
      dopNames.push('Процедуры');
      dopNames.push('Для женщин');
      dopNames.push('Для мужчин');
      dopNames.push('Для детей');
      dopNames.push('Санаторий');
      dopNames.push('Реабилитация');
      dopNames.push('Анализы');
      dopNames.push('Ветеринарная');
      dopNames.push('Бассейн');
      contP += '<div class="chatX">Название медучреждения</div>';
    } else if (selectedPostMod == 5) {
      catNames.push('Сад');
      catNames.push('Школа');
      catNames.push('Лицей');
      catNames.push('Гимназия');
      catNames.push('ПТУ');
      catNames.push('Техникум');
      catNames.push('Колледж');
      catNames.push('Институт');
      catNames.push('Университет');
      catNames.push('Академия');
      catNames.push('Частное');
      catNames.push('Прочее');
      dopNames.push('Дополнительное');
      dopNames.push('Военное');
      dopNames.push('Клубы');
      dopNames.push('Лагерь');
      dopNames.push('Исскуство');
      dopNames.push('Танцы');
      dopNames.push('Для детей');
      dopNames.push('Для взрослых');
      dopNames.push('Спорт');
      dopNames.push('Авто');
      dopNames.push('Экскурсии');
      dopNames.push('Курсы');
      dopNames.push('Дневная');
      dopNames.push('Вечерняя');
      dopNames.push('Заочная');
      dopNames.push('Онлайн');
      dopNames.push('Специальное');
      dopNames.push('Библиотека');
      contP += '<div class="chatX">Название учреждения образования</div>';
    } else if (selectedPostMod == 6) {
      catNames.push('Медицина');
      catNames.push('Транспорт');
      catNames.push('Недвижимость');
      catNames.push('IT/Фриланс');
      catNames.push('Дизайн');
      catNames.push('Красота/Мода');
      catNames.push('Полиграфия');
      catNames.push('Образование');
      catNames.push('Юр./Бух. услуги');
      catNames.push('Уборка');
      catNames.push('Строительство');
      catNames.push('Прочее');
      dopNames.push('Юр. лицо');
      dopNames.push('Рассрочка');
      dopNames.push('Безнал');
      dopNames.push('Дистанционно');
      dopNames.push('Работа с текстом');
      dopNames.push('Организатор');
      dopNames.push('Аренда');
      dopNames.push('Универсал');
      dopNames.push('Коммуникации');
      dopNames.push('Ремонт');
      dopNames.push('Монтаж');
      dopNames.push('Фото/Видео');
      dopNames.push('Тату/Татуаж');
      dopNames.push('Уход/Процедуры');
      dopNames.push('Стрижка/Окраска');
      dopNames.push('Веб/Интернет');
      dopNames.push('Интерьер');
      dopNames.push('Животные');
      contP += '<div class="chatX">Наименование услуги</div>';
    }

    var srcL = 'images/logo.png';
    var src1 = 'images/pic.png';
    var src2 = 'images/pic.png';
    var src3 = 'images/pic.png';
    var src4 = 'images/pic.png';
    var src5 = 'images/pic.png';
    var src6 = 'images/pic.png';
    var a1 = "<a id='btn1' onclick='uploadBtn(1)'>Загрузить</a>";
    var a2 = "<a id='btn2' onclick='uploadBtn(2)'>Загрузить</a>";
    var a3 = "<a id='btn3' onclick='uploadBtn(3)'>Загрузить</a>";
    var a4 = "<a id='btn4' onclick='uploadBtn(4)'>Загрузить</a>";
    var a5 = "<a id='btn5' onclick='uploadBtn(5)'>Загрузить</a>";
    var a6 = "<a id='btn6' onclick='uploadBtn(6)'>Загрузить</a>";
    var a7 = "<a id='btn7' onclick='uploadBtn(7)'>Загрузить</a>";
    contP +=
      '<div class="chatX"><input maxlength="100" placeholder="Введите название"></div>';
    contP += '<div class="chatX">Логотип</div>';
    contP +=
      "<div style='display:none;'><img class='picUp' src='" +
      src1 +
      "' id='lil1pic'><img class='picUp' src='" +
      src2 +
      "' id='lil2pic'><img class='picUp' src='" +
      src3 +
      "' id='lil3pic'><img class='picUp' src='" +
      src4 +
      "' id='lil4pic'><img class='picUp' src='" +
      src5 +
      "' id='lil5pic'><img class='picUp' src='" +
      src6 +
      "' id='lil6pic'></div>";
    contP +=
      "<div class='postImgages2'><label class='custom-file-upload'><input oninput='readURL(this,7)' id='PostPic7' type='file' style='display:none;'><img class='picUp' id='7pic' src='" +
      srcL +
      "' alt='загрузить фото'/></label><br>" +
      a7;
    contP +=
      '<div class="chatX">Детали</div><div class="chatX"><textarea id="detPost" maxlength=200></textarea></div>';
    contP +=
      '<div class="chatX">Телефон</div><div class="chatX"><input maxlength="100" placeholder="Введите адрес"></div>';
    contP +=
      '<div class="chatX">Адрес</div><div class="chatX"><input maxlength="100" placeholder="Введите адрес"></div>';
    contP +=
      "<div class='chatX'>Уточнение геолокации</div><div style='width:100%;color:rgb(140,140,140);' class='personM'>помогает построить маршрут к вашему месту<br>в расчет берется ваше текущее месторасположение</div><br><div class='chatX'><a>Уточнить</a></div>";
    contP +=
      '<div class="chatX">График работы</div><div class="chatX"><a style="background-color: rgb(125, 200, 125);" id="allnight" onclick="workTime(this.id)" href="#да">24/7</a><a id="daily" onclick="workTime(this.id)" href="#да" style="">Ежедневно</a><a onclick="workTime(this.id)" id="other" href="#нет">Другое</a></div>';
    contP +=
      '<div id="dailyTime" style="display: none;"> С <select id="edhs"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="edms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> До <select id="edhp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="edmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select><br></div>';
    contP +=
      '<div id="otherTime" style="display: none;"><div >Понедельник</div> с <select id="pnhs"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="pnms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="pnhp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="pnmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendpn"><option>рабочий</option><option>выходной</option></select><br><br><div >Вторник</div> с <select id="vths"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="vtms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="vthp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="vtmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendvt"><option>рабочий</option><option>выходной</option></select><br><br><div >Среда</div> с <select id="srhs"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="srms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="srhp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="srmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendsr"><option>рабочий</option><option>выходной</option></select><br><br><div >Четверг</div> с <select id="chths"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="chtms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="chthp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="chtmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendcht"><option>рабочий</option><option>выходной</option></select><br><br><div >Пятница</div> с <select id="pths"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="ptms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="pthp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="ptmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendpt"><option>рабочий</option><option>выходной</option></select><br><br><div >Суббота</div> с <select id="sbhs"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="sbms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="sbhp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="sbmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendsb"><option>рабочий</option><option>выходной</option></select><br><br><div >Воскресенье</div> с <select id="vshs"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="vsms"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> до <select id="vshp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select> : <select id="vsmp"><option>0</option><option>5</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select> - <select id="weekendvs"><option>рабочий</option><option>выходной</option></select></div><br>';
    contP +=
      "<div class='chatX'>Фото</div><div class='postImages2'><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,1)' id='PostPic1' type='file' style='display:none;'><img class='picUp' id='1pic' src='" +
      src1 +
      "' alt='загрузить фото'/></label><br>" +
      a1 +
      "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,2)' id='PostPic2' type='file' style='display:none;'><img class='picUp' id='2pic' src='" +
      src2 +
      "' alt='загрузить фото'/></label><br>" +
      a2 +
      "</div><br><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,3)' id='PostPic3' type='file' style='display:none;'><img class='picUp' id='3pic' src='" +
      src3 +
      "' alt='загрузить фото'/></label><br>" +
      a3 +
      "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,4)' id='PostPic4' type='file' style='display:none;'><img class='picUp' id='4pic' src='" +
      src4 +
      "' alt='загрузить фото'/></label><br>" +
      a4 +
      "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,5)' id='PostPic5' type='file' style='display:none;'><img class='picUp' id='5pic' src='" +
      src5 +
      "' alt='загрузить фото'/></label><br>" +
      a5 +
      "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,6)' id='PostPic6' type='file' style='display:none;'><img class='picUp' id='6pic' src='" +
      src6 +
      "' alt='загрузить фото'/></label><br>" +
      a6 +
      '</div></div>';
    contP +=
      "<div id='postHide2'><div class='chatX'>Категория(1-2)</div><div class='lilType'><a onclick='addPostType(1,this);' id='tt1'>" +
      catNames[0] +
      "</a><a onclick='addPostType(2,this);' id='tt2'>" +
      catNames[1] +
      "</a><a onclick='addPostType(3,this);' id='tt3'>" +
      catNames[2] +
      "</a><a onclick='addPostType(4,this);' id='tt4'>" +
      catNames[3] +
      "</a><a onclick='addPostType(5,this);' id='tt5'>" +
      catNames[4] +
      "</a><a onclick='addPostType(6,this);' id='tt6'>" +
      catNames[5] +
      "</a><a onclick='addPostType(7,this);' id='tt7'>" +
      catNames[6] +
      "</a><a onclick='addPostType(8,this);' id='tt8'>" +
      catNames[7] +
      "</a><a onclick='addPostType(9,this);' id='tt9'>" +
      catNames[8] +
      "</a><a onclick='addPostType(10,this);' id='tt10'>" +
      catNames[9] +
      "</a><a onclick='addPostType(11,this);' id='tt11'>" +
      catNames[10] +
      "</a><a onclick='addPostType(12,this);' id='tt12'>" +
      catNames[11] +
      '</a></div>';
    contP +=
      "<div class='chatX'>Дополнение</div><div class='lilType'><a onclick='addPostDop(1,this);' id='mm1'>" +
      dopNames[0] +
      "</a><a onclick='addPostDop(2,this);' id='mm2'>" +
      dopNames[1] +
      "</a><a onclick='addPostDop(3,this);' id='mm3'>" +
      dopNames[2] +
      "</a><a onclick='addPostDop(4,this);' id='mm4'>" +
      dopNames[3] +
      "</a><a onclick='addPostDop(5,this);' id='mm5'>" +
      dopNames[4] +
      "</a><a onclick='addPostDop(6,this);' id='mm6'>" +
      dopNames[5] +
      "</a><a onclick='addPostDop(7,this);' id='mm7'>" +
      dopNames[6] +
      "</a><a onclick='addPostDop(8,this);' id='mm8'>" +
      dopNames[7] +
      "</a><a onclick='addPostDop(9,this);' id='mm9'>" +
      dopNames[8] +
      "</a><a onclick='addPostDop(10,this);' id='mm10'>" +
      dopNames[9] +
      "</a><a onclick='addPostDop(11,this);' id='mm11'>" +
      dopNames[10] +
      "</a><a onclick='addPostDop(12,this);' id='mm12'>" +
      dopNames[11] +
      "</a><a onclick='addPostDop(13,this);' id='mm13'>" +
      dopNames[12] +
      "</a><a onclick='addPostDop(14,this);' id='mm14'>" +
      dopNames[13] +
      "</a><a onclick='addPostDop(15,this);' id='mm15'>" +
      dopNames[14] +
      "</a><a onclick='addPostDop(16,this);' id='mm16'>" +
      dopNames[15] +
      "</a><a onclick='addPostDop(17,this);' id='mm17'>" +
      dopNames[16] +
      "</a><a onclick='addPostDop(18,this);' id='mm18'>" +
      dopNames[17] +
      '</a></div></div>';
    contP +=
      "<div style='width:100%;color:rgb(140,140,140);' class='personM'><br>Первичная публикация -2000 баллов<br>после первичной публикации появится доступ к<br>дополнительным элементам управления(бронь/акции/купоны/товары/меню и так далее</div><br>";

    document.getElementById('postEditor').innerHTML = contP;
    document.getElementById('postEditorSave').innerHTML =
      '<div class="chatX"><a onclick="savePrePost();" class="closeOk">Опубликовать</a><a onclick="closePublish();" class="closeOk">Отмена</a>';
  } else {
    alert('Выберите раздел');
  }
}

var placeWorkTime = 'allnight';
function workTime(check) {
  if (check == 'allnight') {
    document.getElementById('allnight').style.backgroundColor =
      'rgb(125,200,125)';
    document.getElementById('daily').style.backgroundColor = '';
    document.getElementById('other').style.backgroundColor = '';
    document.getElementById('dailyTime').style.display = 'none';
    document.getElementById('otherTime').style.display = 'none';
    placeWorkTime = 'allnight';
  } else if (check == 'daily') {
    document.getElementById('allnight').style.backgroundColor = '';
    document.getElementById('daily').style.backgroundColor = 'rgb(125,200,125)';
    document.getElementById('other').style.backgroundColor = '';
    document.getElementById('dailyTime').style.display = 'block';
    document.getElementById('otherTime').style.display = 'none';
    placeWorkTime = 'daily';
  } else {
    document.getElementById('allnight').style.backgroundColor = '';
    document.getElementById('daily').style.backgroundColor = '';
    document.getElementById('other').style.backgroundColor = 'rgb(125,200,125)';
    document.getElementById('dailyTime').style.display = 'none';
    document.getElementById('otherTime').style.display = 'block';
    placeWorkTime = 'other';
  }
}

function savePrePost() {
  console.log('saved');
}
function openPostDetails(id) {
  document.getElementById('containerPosts').style.display = 'none';
  var picN = 4 * (id - 1);
  var postN = '';
  var postD = '';
  if (id == 1 && post1.length == 2) {
    postN = post1[0];
    postD = post1[1];
    filtX = filt1;
    dopX = dop1;
  } else if (id == 2 && post2.length == 2) {
    postN = post2[0];
    postD = post2[1];
    filtX = filt2;
    dopX = dop2;
  } else if (id == 3 && post3.length == 2) {
    postN = post3[0];
    postD = post3[1];
    filtX = filt3;
    dopX = dop3;
  }
  postD = postD.replace(/<\/br *\/?>/gi, '\n');
  var contP =
    "<div id='postHide1'><div class='chatX'>Заголовок</div><div class='chatX'><input id='namePost' maxlength=60 type='text' value='" +
    postN +
    "'></div><div class='chatX'>Детали</div><div class='chatX'><textarea id='detPost' maxlength=200>" +
    postD +
    '</textarea></div></div>';
  contP +=
    "<div id='postHide2'><div class='chatX'>Категория(1-2)</div><div class='lilType'><a onclick='addPostType(1,this);' id='tt1'>Авто</a><a onclick='addPostType(2,this);' id='tt2'>Недвижимость</a><a onclick='addPostType(3,this);' id='tt3'>Одежда</a><a onclick='addPostType(4,this);' id='tt4'>Мебель</a><a onclick='addPostType(5,this);' id='tt5'>Электроника</a><a onclick='addPostType(6,this);' id='tt6'>Техника</a><a onclick='addPostType(7,this);' id='tt7'>Дом/Дача</a><a onclick='addPostType(8,this);' id='tt8'>Строительство</a><a onclick='addPostType(9,this);' id='tt9'>Работа/Офис</a><a onclick='addPostType(10,this);' id='tt10'>Спорт/Туризм</a><a onclick='addPostType(11,this);' id='tt11'>Здоровье/Уход</a><a onclick='addPostType(12,this);' id='tt12'>Прочее</a></div>";
  contP +=
    "<div class='chatX'>Дополнение</div><div class='lilType'><a onclick='addPostDop(1,this);' id='mm1'>Даром</a><a onclick='addPostDop(2,this);' id='mm2'>Обмен</a><a onclick='addPostDop(3,this);' id='mm3'>Аренда</a><a onclick='addPostDop(4,this);' id='mm4'>Продажа</a><a onclick='addPostDop(5,this);' id='mm5'>Запчасти</a><a onclick='addPostDop(6,this);' id='mm6'>Инструмент</a><a onclick='addPostDop(7,this);' id='mm7'>Мужское</a><a onclick='addPostDop(8,this);' id='mm8'>Женское</a><a onclick='addPostDop(9,this);' id='mm9'>Детское</a><a onclick='addPostDop(10,this);' id='mm10'>Бизнес</a><a onclick='addPostDop(11,this);' id='mm11'>Б/у</a><a onclick='addPostDop(12,this);' id='mm12'>Новое</a><a onclick='addPostDop(13,this);' id='mm13'>Долгосрочно</a><a onclick='addPostDop(14,this);' id='mm14'>Временно</a><a onclick='addPostDop(15,this);' id='mm15'>Ретро</a><a onclick='addPostDop(16,this);' id='mm16'>Люкс</a><a onclick='addPostDop(17,this);' id='mm17'>Находки</a><a onclick='addPostDop(18,this);' id='mm18'>Животные</a></div></div>";
  var src1 = 'images/pic.png';
  var src2 = 'images/pic.png';
  var src3 = 'images/pic.png';
  var src4 = 'images/pic.png';
  var a1 = "<a id='btn1' onclick='uploadBtn(1)'>Загрузить</a>";
  var a2 = "<a id='btn2' onclick='uploadBtn(2)'>Загрузить</a>";
  var a3 = "<a id='btn3' onclick='uploadBtn(3)'>Загрузить</a>";
  var a4 = "<a id='btn4' onclick='uploadBtn(4)'>Загрузить</a>";
  console.log('ppic' + (picN + 1)); //comebackhere
  if (
    document.getElementById('lilppic' + (picN + 1)).getAttribute('src') !=
    'images/pic.png'
  ) {
    src1 = document.getElementById('lilppic' + (picN + 1)).getAttribute('src');
    a1 = "<a id='btn1' onclick='delBtn(1)'>Удалить</a>";
  }
  if (
    document.getElementById('lilppic' + (picN + 2)).getAttribute('src') !=
    'images/pic.png'
  ) {
    src2 = document.getElementById('lilppic' + (picN + 2)).getAttribute('src');
    a2 = "<a id='btn2' onclick='delBtn(2)'>Удалить</a>";
  }
  if (
    document.getElementById('lilppic' + (picN + 3)).getAttribute('src') !=
    'images/pic.png'
  ) {
    src3 = document.getElementById('lilppic' + (picN + 3)).getAttribute('src');
    a3 = "<a id='btn3' onclick='delBtn(3)'>Удалить</a>";
  }
  if (
    document.getElementById('lilppic' + (picN + 4)).getAttribute('src') !=
    'images/pic.png'
  ) {
    src4 = document.getElementById('lilppic' + (picN + 4)).getAttribute('src');
    a4 = "<a id='btn4' onclick='delBtn(4)'>Удалить</a>";
  }
  contP +=
    "<div style='display:none;'><img class='picUp' src='" +
    src1 +
    "' id='lil1pic'><img class='picUp' src='" +
    src2 +
    "' id='lil2pic'><img class='picUp' src='" +
    src3 +
    "' id='lil3pic'><img class='picUp' src='" +
    src4 +
    "' id='lil4pic'></div><div id='postHide3'><div class='chatX'>Фото</div><div class='postImages2'><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,1)' id='PostPic1' type='file' style='display:none;'><img class='picUp' id='1pic' src='" +
    src1 +
    "' alt='загрузить фото'/></label><br>" +
    a1 +
    "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,2)' id='PostPic2' type='file' style='display:none;'><img class='picUp' id='2pic' src='" +
    src2 +
    "' alt='загрузить фото'/></label><br>" +
    a2 +
    "</div><br><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,3)' id='PostPic3' type='file' style='display:none;'><img class='picUp' id='3pic' src='" +
    src3 +
    "' alt='загрузить фото'/></label><br>" +
    a3 +
    "</div><div class='postImg'><label class='custom-file-upload'><input oninput='readURL(this,4)' id='PostPic4' type='file' style='display:none;'><img class='picUp' id='4pic' src='" +
    src4 +
    "' alt='загрузить фото'/></label><br>" +
    a4 +
    '</div></div></div>';
  document.getElementById('postEditor').innerHTML = contP;
  document.getElementById('postEditorSave').innerHTML =
    '<div class="chatX"><a onclick="savePost(' +
    id +
    ');" class="closeOk">Опубликовать</a><a onclick="closePublish();" class="closeOk">Отмена</a>';
  if (id == 1) {
    for (var i = 0; i < filt1.length; i++) {
      console.log(filt1[i] + 'this');
      document.getElementById('tt' + filt1[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
    for (var i = 0; i < dop1.length; i++) {
      console.log(dop1[i] + 'this');
      document.getElementById('mm' + dop1[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
  } else if (id == 2) {
    for (var i = 0; i < filt2.length; i++) {
      document.getElementById('tt' + filt2[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
    for (var i = 0; i < dop2.length; i++) {
      document.getElementById('mm' + dop2[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
  }
  if (id == 3) {
    for (var i = 0; i < filt3.length; i++) {
      document.getElementById('tt' + filt3[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
    for (var i = 0; i < dop3.length; i++) {
      document.getElementById('mm' + dop3[i]).style.backgroundColor =
        'rgb(150,240,150)';
    }
  }

  if (src1 != 'images/pic.png' && src1.indexOf('lil') >= 0) {
    imageExists(src1.replace('lil', ''), '1pic');
  }
  if (src2 != 'images/pic.png' && src2.indexOf('lil') >= 0) {
    imageExists(src2.replace('lil', ''), '2pic');
  }
  if (src3 != 'images/pic.png' && src3.indexOf('lil') >= 0) {
    imageExists(src3.replace('lil', ''), '3pic');
  }
  if (src4 != 'images/pic.png' && src4.indexOf('lil') >= 0) {
    imageExists(src4.replace('lil', ''), '4pic');
  }
}
function closePublish() {
  //document.getElementById('postEditor').innerHTML="";
  document.getElementById('postEditorSave').innerHTML = '';
  document.getElementById('containerPosts').style.display = '';
}
function nextPost(id) {
  document.getElementById('postHide1').style.display = 'none';
  document.getElementById('postHide2').style.display = 'block';
  document.getElementById('postHide3').style.display = 'none';
  document.getElementById('postEditorSave').innerHTML =
    '<a onclick="nextNextPost(' +
    id +
    ');" class="closeOk" href="#closeOk">Далее</a><a onclick="backPost(' +
    id +
    ');" class="closeOk" href="#closeOk">Назад</a>';
}
function nextNextPost(id) {
  document.getElementById('postHide1').style.display = 'none';
  document.getElementById('postHide2').style.display = 'none';
  document.getElementById('postHide3').style.display = 'block';
  document.getElementById('postEditorSave').innerHTML =
    '<a onclick="savePost(' +
    id +
    ');" class="closeOk" href="#closeOk">Опубликовать</a><a onclick="nextPost(' +
    id +
    ');" class="closeOk" href="#closeOk">Назад</a>';
}
function backPost(id) {
  document.getElementById('postHide1').style.display = 'block';
  document.getElementById('postHide2').style.display = 'none';
  document.getElementById('postHide3').style.display = 'none';
  document.getElementById('postEditorSave').innerHTML =
    '<a onclick="nextPost(' +
    id +
    ');" class="closeOk" href="#closeOk">Далее</a><a onclick="closePublish();" class="closeOk" href="#closeOk">Отмена</a>';
}

function openPostDelete(id) {
  var unID = getCookie('c');
  if (unID == null) {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML = 'Вы не вошли';
  } else {
    if (unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'deletePost.php',
        data: {
          checkL: unID,
          postID: id,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('success') >= 0) {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'Объявление удалено';
          } else {
            document.getElementById('contxg').style.display = 'block';
            document.getElementById('errReg').innerHTML = 'ошибка загрузки';
          }
        },
      });
    }
  }
}
function savePost(id) {
  $('html, body').animate({scrollTop: 0}, 700);
  if (
    document.getElementById('namePost').value != '' &&
    document.getElementById('detPost').value != ''
  ) {
    console.log('here 1');
    if (id == 1) {
      console.log('here 2');
      post1 = [];
      post1.push(document.getElementById('namePost').value);
      post1.push(document.getElementById('detPost').value);
      filt1 = filtX;
      dop1 = dopX;
      filtX = [];
      dopX = [];
      document.getElementById('postName1').innerHTML =
        document.getElementById('namePost').value;
      document
        .getElementById('ppic1')
        .setAttribute(
          'src',
          document.getElementById('1pic').getAttribute('src'),
        );
      document
        .getElementById('ppic2')
        .setAttribute(
          'src',
          document.getElementById('2pic').getAttribute('src'),
        );
      document
        .getElementById('ppic3')
        .setAttribute(
          'src',
          document.getElementById('3pic').getAttribute('src'),
        );
      document
        .getElementById('ppic4')
        .setAttribute(
          'src',
          document.getElementById('4pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic1')
        .setAttribute(
          'src',
          document.getElementById('lil1pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic2')
        .setAttribute(
          'src',
          document.getElementById('lil2pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic3')
        .setAttribute(
          'src',
          document.getElementById('lil3pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic4')
        .setAttribute(
          'src',
          document.getElementById('lil4pic').getAttribute('src'),
        );
      publishPost(1);
    } else if (id == 2) {
      console.log('here 2');
      post2 = [];
      post2.push(document.getElementById('namePost').value);
      post2.push(document.getElementById('detPost').value);
      filt2 = filtX;
      dop2 = dopX;
      filtX = [];
      dopX = [];
      document.getElementById('postName2').innerHTML =
        document.getElementById('namePost').value;
      document
        .getElementById('ppic5')
        .setAttribute(
          'src',
          document.getElementById('1pic').getAttribute('src'),
        );
      document
        .getElementById('ppic6')
        .setAttribute(
          'src',
          document.getElementById('2pic').getAttribute('src'),
        );
      document
        .getElementById('ppic7')
        .setAttribute(
          'src',
          document.getElementById('3pic').getAttribute('src'),
        );
      document
        .getElementById('ppic8')
        .setAttribute(
          'src',
          document.getElementById('4pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic5')
        .setAttribute(
          'src',
          document.getElementById('lil1pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic6')
        .setAttribute(
          'src',
          document.getElementById('lil2pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic7')
        .setAttribute(
          'src',
          document.getElementById('lil3pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic8')
        .setAttribute(
          'src',
          document.getElementById('lil4pic').getAttribute('src'),
        );
      publishPost(2);
    } else if (id == 3) {
      console.log('here 2');
      post3 = [];
      post3.push(document.getElementById('namePost').value);
      post3.push(document.getElementById('detPost').value);
      filt3 = filtX;
      dop3 = dopX;
      filtX = [];
      dopX = [];
      document.getElementById('postName3').innerHTML =
        document.getElementById('namePost').value;
      document
        .getElementById('ppic9')
        .setAttribute(
          'src',
          document.getElementById('1pic').getAttribute('src'),
        );
      document
        .getElementById('ppic10')
        .setAttribute(
          'src',
          document.getElementById('2pic').getAttribute('src'),
        );
      document
        .getElementById('ppic11')
        .setAttribute(
          'src',
          document.getElementById('3pic').getAttribute('src'),
        );
      document
        .getElementById('ppic12')
        .setAttribute(
          'src',
          document.getElementById('4pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic9')
        .setAttribute(
          'src',
          document.getElementById('lil1pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic10')
        .setAttribute(
          'src',
          document.getElementById('lil2pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic11')
        .setAttribute(
          'src',
          document.getElementById('lil3pic').getAttribute('src'),
        );
      document
        .getElementById('lilppic12')
        .setAttribute(
          'src',
          document.getElementById('lil4pic').getAttribute('src'),
        );
      publishPost(3);
    }
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      'Заголовок и детали не могут быть пустыми!';
  }
}

function addPostType(typeID, typeObj) {
  if (typeObj.style.backgroundColor == '') {
    if (filtX.length < 2 && filtX.indexOf(typeID) < 1) {
      filtX.push(typeID);
      typeObj.style.backgroundColor = 'rgb(150,240,150)';
    }
  } else {
    if (filtX.length > 0) {
      filtX.splice(filtX.indexOf(typeID), 1);
      typeObj.style.backgroundColor = '';
    }
  }
}

function addPostDop(typeID, typeObj) {
  if (typeObj.style.backgroundColor == '') {
    if (dopX.length < 6 && dopX.indexOf(typeID) < 1) {
      dopX.push(typeID);
      typeObj.style.backgroundColor = 'rgb(150,240,150)';
    }
  } else {
    if (dopX.length > 0) {
      dopX.splice(dopX.indexOf(typeID), 1);
      typeObj.style.backgroundColor = '';
    }
  }
}
function publishPost(id) {
  var tLat = 0;
  var tLon = 0;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        tLat = parseFloat(position.coords.latitude);
        tLon = parseFloat(position.coords.longitude);
        continuePublish(tLat, tLon, id);
      },
      function (error) {
        document.getElementById('contxg').style.display = 'block';
        document.getElementById('errReg').innerHTML =
          'Доступ к вашей локации отклонен, объявление не опубликовано';
      },
      {enableHighAccuracy: true, timeout: 5000},
    );
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      'Ваше устройство не поддерживает определение локации, объявление не опубликовано';
  }
}

function continuePublish(tLat, tLon, id) {
  var tempFilt = '';
  var tempDop = '';
  var tempName = '';
  var tempDesc = '';
  if (id == 1 && post1.length == 2) {
    for (var i = 0; i < filt1.length; i++) {
      tempFilt += 'x' + filt1[i] + 'x';
    }
    for (var i = 0; i < dop1.length; i++) {
      tempDop += 'x' + dop1[i] + 'x';
    }
    if (tempDop == '') {
      tempDop = 'nothing';
    }
    tempName = post1[0];
    tempDesc = post1[1];
  } else if (id == 2 && post2.length == 2) {
    for (var i = 0; i < filt2.length; i++) {
      tempFilt += 'x' + filt2[i] + 'x';
    }
    for (var i = 0; i < dop2.length; i++) {
      tempDop += 'x' + dop2[i] + 'x';
    }
    if (tempDop == '') {
      tempDop = 'nothing';
    }
    tempName = post2[0];
    tempDesc = post2[1];
  } else if (id == 3 && post3.length == 2) {
    for (var i = 0; i < filt3.length; i++) {
      tempFilt += 'x' + filt3[i] + 'x';
    }
    for (var i = 0; i < dop3.length; i++) {
      tempDop += 'x' + dop3[i] + 'x';
    }
    if (tempDop == '') {
      tempDop = 'nothing';
    }
    tempName = post3[0];
    tempDesc = post3[1];
  }

  if (tempFilt != '' && tempDesc != '' && tempName != '') {
    var tpID = 4 * (id - 1);
    console.log('begin');
    console.log('tpID' + tpID);
    console.log('id' + id);
    var data = new FormData();
    var pic1Post = document
      .getElementById('ppic' + (tpID + 1))
      .getAttribute('src');
    var lilpic1Post = document
      .getElementById('lilppic' + (tpID + 1))
      .getAttribute('src');
    console.log(pic1Post);
    if (lilpic1Post.indexOf('pic.png') >= 0) {
      pic1Post = 'nothing';
      console.log('nothing1');
      console.log(pic1Post);
    } else if (
      pic1Post.indexOf('post1.jpeg') >= 0 ||
      pic1Post.indexOf('post5.jpeg') >= 0 ||
      pic1Post.indexOf('post9.jpeg') >= 0
    ) {
      pic1Post = 'skip';
      console.log('skipped1');
    } else {
      console.log('uploading1');
    }
    var pic2Post = document
      .getElementById('ppic' + (tpID + 2))
      .getAttribute('src');
    var lilpic2Post = document
      .getElementById('lilppic' + (tpID + 2))
      .getAttribute('src');
    console.log(pic2Post);
    if (pic2Post.indexOf('pic.png') >= 0) {
      pic2Post = 'nothing';
      console.log('nothing2');
    } else if (
      pic2Post.indexOf('post2.jpeg') >= 0 ||
      pic2Post.indexOf('post6.jpeg') >= 0 ||
      pic2Post.indexOf('post10.jpeg') >= 0
    ) {
      pic2Post = 'skip';
      console.log('skipped2');
    } else {
      console.log('uploading2');
    }
    var pic3Post = document
      .getElementById('ppic' + (tpID + 3))
      .getAttribute('src');
    var lilpic3Post = document
      .getElementById('lilppic' + (tpID + 3))
      .getAttribute('src');
    console.log(pic3Post);
    if (pic3Post.indexOf('pic.png') >= 0) {
      pic3Post = 'nothing';
      console.log('nothing3');
    } else if (
      pic3Post.indexOf('post3.jpeg') >= 0 ||
      pic3Post.indexOf('post7.jpeg') >= 0 ||
      pic3Post.indexOf('post11.jpeg') >= 0
    ) {
      pic3Post = 'skip';
      console.log('skipped3');
    } else {
      console.log('uploading3');
    }
    var pic4Post = document
      .getElementById('ppic' + (tpID + 4))
      .getAttribute('src');
    var lilpic4Post = document
      .getElementById('lilppic' + (tpID + 4))
      .getAttribute('src');
    console.log(pic4Post);
    if (pic4Post.indexOf('pic.png') >= 0) {
      pic4Post = 'nothing';
      console.log('nothing4');
    } else if (
      pic4Post.indexOf('post4.jpeg') >= 0 ||
      pic4Post.indexOf('post8.jpeg') >= 0 ||
      pic4Post.indexOf('post12.jpeg') >= 0
    ) {
      pic4Post = 'skip';
      console.log('skipped4');
      console.log(pic4Post);
    } else {
      console.log('uploading4');
    }

    var unID = getCookie('c');
    if (unID != null && unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'uploadPost.php',
        data: {
          checkL: unID,
          pic1: pic1Post,
          pic2: pic2Post,
          pic3: pic3Post,
          pic4: pic4Post,
          lilpic1: lilpic1Post,
          lilpic2: lilpic2Post,
          lilpic3: lilpic3Post,
          lilpic4: lilpic4Post,
          postID: id,
          tempName: tempName,
          tempDesc: tempDesc,
          tempFilt: tempFilt,
          tempDop: tempDop,
          fLat: tLat,
          fLon: tLon,
        },
        success: function (data) {
          var feedBack = '';
          console.log(data);
          if (data.indexOf('havsuccesshav') >= 0) {
            document.getElementById('postEditor').innerHTML = '';
            document.getElementById('postEditorSave').innerHTML = '';
            document.getElementById('containerPosts').style.display = '';
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack +=
              'Объявление принято и проходит проверку, 25 баллов потрачено<br>';
          } else if (data.indexOf('havnopointshav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Недостаточно баллов<br>';
          } else if (data.indexOf('haverrdatahav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Нет связи с сервером<br>';
          } else if (data.indexOf('haverrserverhav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Нет связи с сервером<br>';
          } else if (data.indexOf('haverrloghav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Вы не вошли<br>';
          } else if (data.indexOf('haverremptyhav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Пустой запрос<br>';
          } else {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Ошибка загрузки<br>';
          }
          if (data.indexOf('haverrimgsizehav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Размеры некоторых файлов превысили лимит<br>';
          }
          if (data.indexOf('haverrimgdatahav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack += 'Некоторые файлы не являются изображением<br>';
          }
          if (data.indexOf('haverrimgformathav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack +=
              'Некоторые файлы не загружены<br>Допустимые форматы<br>JPEG,PNG,GIF<br>';
          }
          if (data.indexOf('haverrdecodehav') >= 0) {
            $('body').css('overflow', 'hidden');
            document.getElementById('contxg').style.display = 'block';
            feedBack +=
              'Некоторые файлы не загружены<br>Ошибка декодирования<br>';
          }
          document.getElementById('errReg').innerHTML = feedBack;
        },
      });
    } else {
      $('body').css('overflow', 'hidden');
      document.getElementById('contxg').style.display = 'block';
      document.getElementById('errReg').innerHTML = 'Вы не вошли';
    }
  } else {
    document.getElementById('contxg').style.display = 'block';
    document.getElementById('errReg').innerHTML =
      'Объявление должно содержать название, детали и от 1 до 2 категорий (дополнение не обязательно)';
  }
}

function openPhoto(pic, picN) {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  var imageS = pic.src;
  imageS = imageS.replace('pic.png', 'pic1.png');
  document.getElementById('errReg').innerHTML =
    '<label class="custom-file-upload"><input oninput="readURL(this,' +
    picN +
    ')" id="PostPic" type="file" style="display:none;"/><img class="picUp" id="' +
    picN +
    'pic" src="' +
    imageS +
    '" alt="your image"/></label>';
  document.getElementById('multiple').innerHTML =
    '<a onclick="closeContX();" oninput="" class="closeOk" href="#closeOk">Ок</a><a onclick="closeContX();removePic(' +
    picN +
    ');" class="closeOk" href="#closeOk">Удалить</a>';
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type: mime});
}

function removePic(pic) {
  picUpData.pop(picUpData.indexOf(pic));
  $('#ppic' + pic).attr('src', 'images/pic.png');
  $('#' + pic + 'pic').attr('src', 'images/pic1.png');
}

var picUpData = [];
function readURL(input, pics) {
  var ppic = pics + 'pic';

  if (picUpData.indexOf(pics) == 0) {
    picUpData.push(pics);
  }

  console.log(picUpData.length);
  var file = input.files[0];

  var errorCheck = checkFile(file);
  if (errorCheck == 'good') {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var image = new Image();
        image.src = e.target.result;

        console.log('1x');
        image.onload = function (event) {
          const canvas = document.createElement('canvas');
          const max_width = 512;
          const max_width2 = 128;
          const scaleSize = max_width / event.target.width;
          const scaleSize2 = max_width2 / event.target.width;
          canvas.width = max_width;
          canvas.height = event.target.height * scaleSize;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(event.target, 0, 0, canvas.width, canvas.height);
          var srcEncoded;
          var srcEncoded2;
          if (pics == 7) {
            srcEncoded = ctx.canvas.toDataURL('image/png', 0.7);
          } else {
            srcEncoded = ctx.canvas.toDataURL('image/jpeg', 0.7);
          }
          canvas.width = max_width2;
          canvas.height = event.target.height * scaleSize2;
          const ctx2 = canvas.getContext('2d');
          ctx2.drawImage(event.target, 0, 0, canvas.width, canvas.height);
          if (pics == 7) {
            srcEncoded2 = ctx2.canvas.toDataURL('image/png', 0.7);
          } else {
            srcEncoded2 = ctx2.canvas.toDataURL('image/jpeg', 0.7);
          }
          $('#' + ppic).attr('src', srcEncoded);
          $('#lil' + ppic).attr('src', srcEncoded2);
          document
            .getElementById('ppic' + pics)
            .setAttribute('onclick', 'delBtn(' + pics + ')');
          document.getElementById('btn' + pics).innerHTML = 'Удалить';
          document
            .getElementById('btn' + pics)
            .setAttribute('onclick', 'delBtn(' + pics + ')');
          console.log(srcEncoded);
        };
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }
}

function checkFile(file) {
  var errorCheck = 'bad';
  const fileType = file['type'];
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  if (file.name.match(/\./g).length != 1) {
    alert('Лишние точки в названии файла недопустимы!');
  } else if (!validImageTypes.includes(fileType)) {
    alert('Допустимые форматы<br>JPEG,PNG,GIF');
  } else if (file.size > 20650000) {
    alert('Файл не должен превышать 20 мегабайт');
  } else {
    errorCheck = 'good';
  }

  return errorCheck;
}

function showUserAgreement() {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'пользовательское соглашение';
}
function showPolicy() {
  $('body').css('overflow', 'hidden');
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('errReg').innerHTML = 'политика конфиденциальности';
}
function openLeftNav() {
  if (document.getElementById('leftNavigation').style.right != '41vw') {
    document.getElementById('leftNavigation').style.right = '41vw';
  } else {
    document.getElementById('leftNavigation').style.right = '100vw';
  }
}

function openNavigation(navID, navObj) {
  document.getElementById('leftNavigation').style.right = '100vw';
  selectedLNav = navID;
  selectedM = 0;
  var someCont = document.querySelector('#leftNavigation');
  var els = someCont.querySelectorAll('a');
  els.forEach(function (el) {
    el.style.borderColor = 'rgba(0,0,0,0)';
  });
  $('.container').each(function (i, obj) {
    obj.style.display = 'none';
  });
  if (navID == 1) {
    loadUpdate();
    document.getElementById('contMM').innerHTML =
      "<div class='personN'>Сообщения</div>";
    document.getElementById('contMS').innerHTML = '';
    document.getElementById('containerMM').style.display = '';
    document.getElementById('containerMP').style.display = '';
  } else if (navID == 2) {
    document.getElementById('containerContacts').style.display = '';
    document.getElementById('containerContactsInfo').style.display = '';
    startSearch(2);
  } else if (navID == 3) {
    document.getElementById('ageFrom').innerHTML = getAge(0);
    document.getElementById('ageTo').innerHTML = getAge(1);
    document.getElementById('containerContactsSearch').style.display = '';
    document.getElementById('containerContactsSearchInfo').style.display = '';
  } else if (navID == 4) {
    document.getElementById('containerContactsRequest').style.display = '';
    document.getElementById('containerContactsRequestInfo').style.display = '';
    startSearch(1);
  } else if (navID == 5) {
    document.getElementById('balanceOp').innerHTML =
      "<div class='personN'>" +
      document.getElementById('userPoints').innerHTML +
      '</div>';
    document.getElementById('containerOperations').style.display = '';
    document.getElementById('containerOperationsInfo').style.display = '';
  } else if (navID == 6) {
    document.getElementById('balanceOp').innerHTML =
      "<div class='personN'>" +
      document.getElementById('userPoints').innerHTML +
      '</div>';
    document.getElementById('containerOperations').style.display = '';
    document.getElementById('containerOperationsInfo').style.display = '';
  } else if (navID == 7) {
    modGen();
    document.getElementById('containerPosts').style.display = '';
    document.getElementById('containerPostsInfo').style.display = '';
  }

  navObj.style.borderColor = 'rgba(75,75,75,1)';
}

function selectPost(pSelect, pObj) {
  selectedPostMod = pSelect;
  document.getElementById('tm1').style.backgroundColor = '';
  document.getElementById('tm2').style.backgroundColor = '';
  document.getElementById('tm3').style.backgroundColor = '';
  document.getElementById('tm4').style.backgroundColor = '';
  document.getElementById('tm5').style.backgroundColor = '';
  document.getElementById('tm6').style.backgroundColor = '';
  pObj.style.backgroundColor = 'rgb(150,240,150)';
}
