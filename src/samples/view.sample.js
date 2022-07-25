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

      checkIfLoggedIn();
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
    checkIfLoggedIn();
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
  f1,
  f2,
  f3,
  f4,
  f5,
  section,
  name,
  rating,
  more,
  workTime,
  type,
  location,
  description,
  list,
  pPhone,
  counter,
  lat,
  lng,
  id,
  bron,
  menu,
  dostavka,
) {
  try {
    if (window.innerHeight < window.innerWidth) {
      //browser
    } else {
      //mobile
    }

    var addMore = '';
    var addType = '';
    var addTime = '';
    if (type != '') {
      var tempCounter = 0;
      if (section == 1) {
        if (type.includes('x1x')) {
          addType += 'РЕСТОРАН';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КАФЕ';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'БАР/ПАБ';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КОФЕЙНЯ';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ЧАЙНАЯ';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ЗАКУСОЧНАЯ';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ФАСТФУД';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'БИСТРО';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'СТОЛОВАЯ';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'БУФЕТ';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КАФЕТЕРИЙ';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КУЛИНАРИЯ';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">24/7</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">WI-FI</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Парковка</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Для Авто(Drive)</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Доставка</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Торжество</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Банкет</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Пицца</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Шаурма</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Шашлык</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Суши</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Живая музыка</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">За городом</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Клуб</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Караоке</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Кальян</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Для компании</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Для детей</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
      if (section == 2) {
        if (type.includes('x1x')) {
          addType += 'МУЗЕЙ/ВЫСТАВКА';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ТЕАТР/ЦИРК';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КИНО';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'АКВА/ЗООПАРК';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ТУРИЗМ';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КВЕСТ';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'СТРЕЛЬБА';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КАТАНИЕ';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'САУНА/БАНЯ';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КАРАОКЕ';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'КЛУБ/ДИСКОТЕКА';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ПРОЧЕЕ';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">24/7</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">Бильярд</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Боулинг</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Видеоигры</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Комнаты</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Танцы</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Спорт</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Охота/Рыбалка</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Пейнтбол</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Гольф</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Каток</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Сноуборд/Лыжи</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">Торжество</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Для детей</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Для взрослых</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Природа</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Экскурсии</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Экстрим</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
      if (section == 3) {
        if (type.includes('x1x')) {
          addType += 'Универмаг';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Супермаркет';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Гипермаркет';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Дискаунтер';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Бутик';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Торговый дом';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Гастроном';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Автоцентр';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Автозапчасти';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Зоомагазин';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Киоск/Ларек';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Прочее';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">24/7</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">Электроника</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Техника</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Косметика</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Автозаправка</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Строительный</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Мебельный</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Бытовой</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Одежда</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Сэконд/Сток</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Канцелярия</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Дача и огород</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">Здоровье и уход</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Книги</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Исскуство</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Интернет</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Опт</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Инструмент</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
      if (section == 4) {
        if (type.includes('x1x')) {
          addType += 'Больница';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Госпиталь';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Диспансер';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Поликлиника';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Мед. часть';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Родильный дом';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Амбулатория';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Клиника';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Санаторий';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Аптека';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Частное';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Прочее';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">Скорая помощь</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">Хоспис</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Дом ребенка</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Донорство крови</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Мед. осмотр</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Онлайн талон</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Стоматология</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Косметология</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Массаж/Спа</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Процедуры</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Для женщин</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Для мужчин</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">Для детей</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Санаторий</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Реабилитация</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Анализы</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Ветеринарная</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Бассейн</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
      if (section == 5) {
        if (type.includes('x1x')) {
          addType += 'Сад';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Школа';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Лицей';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Гимназия';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'ПТУ';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Техникум';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Колледж';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Институт';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Университет';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Академия';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Частное';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Прочее';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">Дополнительное</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">Военное</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Клубы</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Лагерь</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Исскуство</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Танцы</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Для детей</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Для взрослых</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Спорт</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Авто</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Экскурсии</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Курсы</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">Дневная</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Вечерняя</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Заочная</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Онлайн</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Специальное</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Библиотека</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
      if (section == 6) {
        if (type.includes('x1x')) {
          addType += 'Перевозки';
          tempCounter++;
        }
        if (type.includes('x2x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Авто и мото';
          tempCounter++;
        }
        if (type.includes('x3x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Недвижимость';
          tempCounter++;
        }
        if (type.includes('x4x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'IT/Фриланс';
          tempCounter++;
        }
        if (type.includes('x5x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Дизайн';
          tempCounter++;
        }
        if (type.includes('x6x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Красота/Мода';
          tempCounter++;
        }
        if (type.includes('x7x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Полиграфия';
          tempCounter++;
        }
        if (type.includes('x8x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Ритуалы';
          tempCounter++;
        }
        if (type.includes('x9x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Юр./Бух. услуги';
          tempCounter++;
        }
        if (type.includes('x10x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Уборка';
          tempCounter++;
        }
        if (type.includes('x11x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Строительство';
          tempCounter++;
        }
        if (type.includes('x12x')) {
          if (tempCounter > 0) {
            addType += ', ';
          }
          addType += 'Прочее';
          tempCounter++;
        }
        addMore += '<div class="moreContainer">';
        if (more.includes('x1x')) {
          addMore += '<div class="tag">Юр. лицо</div>';
        } //else{addMore+='<div class="tag">Даром</div>';}
        if (more.includes('x2x')) {
          addMore += '<div class="tag">Рассрочка</div>';
        } //else{addMore+='<div class="tag">Обмен</div>';}
        if (more.includes('x3x')) {
          addMore += '<div class="tag">Безнал</div>';
        } //else{addMore+='<div class="tag">Аренда</div>';}
        if (more.includes('x4x')) {
          addMore += '<div class="tag">Дистанционно</div>';
        } //else{addMore+='<div class="tag">Продажа</div>';}
        if (more.includes('x5x')) {
          addMore += '<div class="tag">Работа с текстом</div>';
        } //else{addMore+='<div class="tag">Запчасти</div>';}
        if (more.includes('x6x')) {
          addMore += '<div class="tag">Организатор</div>';
        } //else{addMore+='<div class="tag">Инструмент</div>';}
        if (more.includes('x7x')) {
          addMore += '<div class="tag">Аренда</div>';
        } //else{addMore+='<div class="tag">Мужское</div>';}
        if (more.includes('x8x')) {
          addMore += '<div class="tag">Универсал</div>';
        } //else{addMore+='<div class="tag">Женское</div>';}
        if (more.includes('x9x')) {
          addMore += '<div class="tag">Коммуникации</div>';
        } //else{addMore+='<div class="tag">Детское</div>';}
        if (more.includes('x10x')) {
          addMore += '<div class="tag">Ремонт</div>';
        } //else{addMore+='<div class="tag">Бизнес</div>';}
        if (more.includes('x11x')) {
          addMore += '<div class="tag">Монтаж</div>';
        } //else{addMore+='<div class="tag">Б/у</div>';}
        if (more.includes('x12x')) {
          addMore += '<div class="tag">Фото/Видео</div>';
        } //else{addMore+='<div class="tag">Новое</div>';}
        if (more.includes('x13x')) {
          addMore += '<div class="tag">Тату/Татуаж</div>';
        } //else{addMore+='<div class="tag">Долгосрочно</div>';}
        if (more.includes('x14x')) {
          addMore += '<div class="tag">Уход/Процедуры</div>';
        } //else{addMore+='<div class="tag">Временно</div>';}
        if (more.includes('x15x')) {
          addMore += '<div class="tag">Стрижка/Окраска</div>';
        } //else{addMore+='<div class="tag">Ретро</div>';}
        if (more.includes('x16x')) {
          addMore += '<div class="tag">Веб/Интернет</div>';
        } //else{addMore+='<div class="tag">Люкс</div>';}
        if (more.includes('x17x')) {
          addMore += '<div class="tag">Интерьер</div>';
        } //else{addMore+='<div class="tag">Находки</div>';}
        if (more.includes('x18x')) {
          addMore += '<div class="tag">Животные</div>';
        } //else{addMore+='<div class="tag">Животные</div>';}
        addMore += '</div>';
      }
    }

    var phone = "'" + pPhone + "'";
    var link = "'tel:" + pPhone + "'";
    if (workTime != '') {
      var d = new Date();
      var n = d.getDay();
      var currentTime = d.getHours();
      if (d.getMinutes() !== 0) {
        currentTime += d.getMinutes() / 60;
      }
      if (workTime.includes('allnight')) {
        addTime =
          '<a href="#open" class="openTime" onclick="this.innerHTML=' +
          phone +
          ';if(this.href!=' +
          link +
          '){this.href=' +
          link +
          ';return false;}"><img src="images/phone.png">Открыто 24/7</a>';
      } else if (workTime.includes('edhs')) {
        var comp1 = '';
        var comp2 = '';
        var temph1 = '';
        var tempm1 = '';
        var temph2 = '';
        var tempm2 = '';
        var check1 = '';

        temph1 = workTime.match(new RegExp('hs' + '(.*)' + 'ms'));
        temph1 = temph1[1];
        temph2 = workTime.match(new RegExp('hp' + '(.*)' + 'mp'));
        temph2 = temph2[1];
        tempm1 = workTime.match(new RegExp('ms' + '(.*)' + 'hp'));
        tempm1 = tempm1[1];

        var tempx1 = 0;
        if (tempm1 !== 0) {
          tempx1 = tempm1 / 60;
        }

        comp1 = parseInt(temph1) + Number(tempx1);

        tempm2 = workTime.match(new RegExp('mp' + '(.*)' + 'xrx'));
        tempm2 = tempm2[1];

        var tempx2 = 0;
        if (tempm2 !== 0) {
          tempx2 = tempm2 / 60;
        }

        comp2 = parseInt(temph2) + Number(tempx2);

        if (currentTime >= comp1 && currentTime < comp2 && comp1 < comp2) {
          //if(tempm2<10){tempm2="0"+tempm2.toString();}
          addTime =
            '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
            phone +
            ';if(this.href!=' +
            link +
            '){this.href=' +
            link +
            ';return false;}"><img src="images/phone.png">Открыто до ' +
            temph2 +
            ':' +
            tempm2 +
            '</a>';
        } else if (
          currentTime >= comp1 &&
          currentTime > comp2 &&
          comp1 > comp2
        ) {
          //if(tempm2<10){tempm2="0"+tempm2.toString();}
          addTime =
            '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
            phone +
            ';if(this.href!=' +
            link +
            '){this.href=' +
            link +
            ';return false;}"><img src="images/phone.png">Закроется завтра в ' +
            temph2 +
            ':' +
            tempm2 +
            '</a>';
        } else if (
          currentTime < comp1 &&
          currentTime < comp2 &&
          comp1 > comp2
        ) {
          //if(tempm2<10){tempm2="0"+tempm2.toString();}
          addTime =
            '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
            phone +
            ';if(this.href!=' +
            link +
            '){this.href=' +
            link +
            ';return false;}"><img src="images/phone.png">Открыто до ' +
            temph2 +
            ':' +
            tempm2 +
            '</a>';
        } else if (
          currentTime < comp1 &&
          currentTime < comp2 &&
          comp1 < comp2
        ) {
          //if(tempm1<10){tempm1="0"+tempm1;}
          addTime =
            '<div class="openTime closeTime">Закрыто до ' +
            temph1 +
            ':' +
            tempm1 +
            '</div>';
        } else if (
          currentTime > comp1 &&
          currentTime > comp2 &&
          comp1 < comp2
        ) {
          //if(tempm1<10){tempm1="0"+tempm1;}
          addTime =
            '<div class="openTime closeTime">Откроется завтра в ' +
            temph1 +
            ':' +
            tempm1 +
            '</div>';
        } else if (
          currentTime < comp1 &&
          currentTime > comp2 &&
          comp1 > comp2
        ) {
          //if(tempm1<10){tempm1="0"+tempm1;}
          addTime =
            '<div class="openTime closeTime">Закрыто до ' +
            temph1 +
            ':' +
            tempm1 +
            '</div>';
        } else {
          addTime = '<div class="openTime closeTime">???</div>';
        }
      } else {
        var vcomp1 = '';
        var vcomp2 = '';
        var scomp1 = '';
        var scomp2 = '';
        var zcomp1 = '';
        var zcomp2 = '';
        var vtemph1 = '';
        var vtempm1 = '';
        var vtemph2 = '';
        var vtempm2 = '';
        var stemph1 = '';
        var stempm1 = '';
        var stemph2 = '';
        var stempm2 = '';
        var ztemph1 = '';
        var ztempm1 = '';
        var ztemph2 = '';
        var ztempm2 = '';
        var check1 = '';
        var check2 = '';
        var check3 = '';

        if (n == 0) {
          check1 = workTime.match(new RegExp('sb' + '(.*)' + 'vs'));
          check2 = workTime.match(new RegExp('vs' + '(.*)'));
          check3 = workTime.match(new RegExp('pn' + '(.*)' + 'vt'));
        } else if (n == 1) {
          check1 = workTime.match(new RegExp('vs' + '(.*)'));
          check2 = workTime.match(new RegExp('pn' + '(.*)' + 'vt'));
          check3 = workTime.match(new RegExp('vt' + '(.*)' + 'sr'));
        } else if (n == 2) {
          check1 = workTime.match(new RegExp('pn' + '(.*)' + 'vt'));
          check2 = workTime.match(new RegExp('vt' + '(.*)' + 'sr'));
          check3 = workTime.match(new RegExp('sr' + '(.*)' + 'cht'));
        } else if (n == 3) {
          check1 = workTime.match(new RegExp('vt' + '(.*)' + 'sr'));
          check2 = workTime.match(new RegExp('sr' + '(.*)' + 'cht'));
          check3 = workTime.match(new RegExp('cht' + '(.*)' + 'pt'));
        } else if (n == 4) {
          check1 = workTime.match(new RegExp('sr' + '(.*)' + 'cht'));
          check2 = workTime.match(new RegExp('cht' + '(.*)' + 'pt'));
          check3 = workTime.match(new RegExp('pt' + '(.*)' + 'sb'));
        } else if (n == 5) {
          check1 = workTime.match(new RegExp('cht' + '(.*)' + 'pt'));
          check2 = workTime.match(new RegExp('pt' + '(.*)' + 'sb'));
          check3 = workTime.match(new RegExp('sb' + '(.*)' + 'vs'));
        } else if (n == 6) {
          check1 = workTime.match(new RegExp('pt' + '(.*)' + 'sb'));
          check2 = workTime.match(new RegExp('sb' + '(.*)' + 'vs'));
          check3 = workTime.match(new RegExp('vs' + '(.*)'));
        }

        if (check1[1] != 'off') {
          vtemph1 = check1[1].match(new RegExp('hs' + '(.*)' + 'ms'));
          if (vtemph1[1] != null) {
            vtemph1 = vtemph1[1];
          } else {
            vtemph1 = 0;
          }

          vtemph2 = check1[1].match(new RegExp('hp' + '(.*)' + 'mp'));
          if (vtemph2[1] != null) {
            vtemph2 = vtemph2[1];
          } else {
            vtemph2 = 0;
          }
          vtempm1 = check1[1].match(new RegExp('ms' + '(.*)' + 'hp'));
          if (vtempm1[1] != null) {
            vtempm1 = vtempm1[1];
          } else {
            vtempm1 = 0;
          }
          var tempx1 = 0;
          if (vtempm1 != 0) {
            tempx1 = vtempm1 / 60;
          }
          if (vtempm1 < 10) {
            vtempm1 = '0' + vtempm1;
          }
          vcomp1 = parseInt(vtemph1) + Number(tempx1);
          vtempm2 = check1[1].match(new RegExp('mp' + '(.*)' + 'xrx'));
          if (vtempm2[1] != null) {
            vtempm2 = vtempm2[1];
          } else {
            vtempm2 = 0;
          }
          tempx1 = 0;
          if (vtempm2 != 0) {
            tempx1 = vtempm2 / 60;
          }
          if (vtempm2 < 10) {
            vtempm2 = '0' + vtempm2;
          }
          vcomp2 = parseInt(vtemph2) + Number(tempx1);
        }

        if (check2[1] != 'off') {
          stemph1 = check2[1].match(new RegExp('hs' + '(.*)' + 'ms'));
          stemph1 = stemph1[1];
          stemph2 = check2[1].match(new RegExp('hp' + '(.*)' + 'mp'));
          stemph2 = stemph2[1];
          stempm1 = check2[1].match(new RegExp('ms' + '(.*)' + 'hp'));
          stempm1 = stempm1[1];
          tempx1 = 0;
          if (stempm1 != 0) {
            tempx1 = stempm1 / 60;
          }
          if (stempm1 < 10) {
            stempm1 = '0' + stempm1;
          }
          scomp1 = parseInt(stemph1) + Number(tempx1);
          stempm2 = check2[1].match(new RegExp('mp' + '(.*)' + 'xrx'));
          stempm2 = stempm2[1];
          tempx1 = 0;
          if (stempm2 != 0) {
            tempx1 = stempm2 / 60;
          }
          if (stempm2 < 10) {
            stempm2 = '0' + stempm2;
          }
          scomp2 = parseInt(stemph2) + Number(tempx1);
        }

        if (check3[1] != 'off') {
          ztemph1 = check3[1].match(new RegExp('hs' + '(.*)' + 'ms'));
          ztemph1 = ztemph1[1];
          ztemph2 = check3[1].match(new RegExp('hp' + '(.*)' + 'mp'));
          ztemph2 = ztemph2[1];
          ztempm1 = check3[1].match(new RegExp('ms' + '(.*)' + 'hp'));
          ztempm1 = ztempm1[1];
          tempx1 = 0;
          if (ztempm1 != 0) {
            tempx1 = ztempm1 / 60;
          }
          if (ztempm1 < 10) {
            ztempm1 = '0' + ztempm1;
          }
          zcomp1 = parseInt(stemph1) + Number(tempx1);
          ztempm2 = check3[1].match(new RegExp('mp' + '(.*)' + 'xrx'));
          ztempm2 = ztempm2[1];
          tempx1 = 0;
          if (ztempm2 != 0) {
            tempx1 = ztempm2 / 60;
          }
          if (ztempm2 < 10) {
            ztempm2 = '0' + ztempm2;
          }
          zcomp2 = parseInt(ztemph2) + Number(tempx1);
        }
        if (check1[1] == 'off' && check2[1] == 'off' && check3[1] == 'off') {
          addTime =
            '<div class="openTime closeTime">Закрыто, сегодня и завтра</div>';
        } else if (
          check1[1] == 'off' &&
          check2[1] == 'off' &&
          check3[1] != 'off'
        ) {
          addTime =
            '<div class="openTime closeTime">Откроется завтра в ' +
            ztemph1 +
            ':' +
            ztempm1 +
            '</div>';
        } else if (
          check1[1] == 'off' &&
          check2[1] != 'off' &&
          check3[1] == 'off'
        ) {
          if (currentTime < scomp1) {
            addTime =
              '<div class="openTime closeTime">Закрыто до ' +
              stemph1 +
              ':' +
              stempm1 +
              '</div>';
          } else if (
            currentTime > scomp1 &&
            currentTime < scomp2 &&
            scomp1 < scomp2
          ) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else if (currentTime > scomp2 && scomp1 < scomp2) {
            addTime =
              '<div class="openTime closeTime">Закрыто, сегодня и завтра</div>';
          } else if (currentTime > scomp2 && scomp1 > scomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Закроется завтра в ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">График не определен</div>';
          }
        } else if (
          check1[1] == 'off' &&
          check2[1] != 'off' &&
          check3[1] != 'off'
        ) {
          if (currentTime < scomp1) {
            addTime =
              '<div class="openTime closeTime">Закрыто до ' +
              stemph1 +
              ':' +
              stempm1 +
              '</div>';
          } else if (
            currentTime > scomp1 &&
            currentTime < scomp2 &&
            scomp1 < scomp2
          ) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else if (currentTime > scomp2 && scomp1 < scomp2) {
            addTime =
              '<div class="openTime closeTime">Откроется завтра в ' +
              ztemph1 +
              ':' +
              ztempm1 +
              '</div>';
          } else if (currentTime > scomp2 && scomp1 > scomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Закроется завтра в ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">График не определен</div>';
          }
        } else if (
          check1[1] != 'off' &&
          check2[1] == 'off' &&
          check3[1] == 'off'
        ) {
          if (vcomp1 > vcomp2 && currentTime < vcomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              vtemph2 +
              ':' +
              vtempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">Закрыто, сегодня и завтра</div>';
          }
        } else if (
          check1[1] != 'off' &&
          check2[1] == 'off' &&
          check3[1] != 'off'
        ) {
          if (vcomp1 > vcomp2 && currentTime < vcomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              vtemph2 +
              ':' +
              vtempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">Откроется завтра в ' +
              ztemph1 +
              ':' +
              ztempm1 +
              '</div>';
          }
        } else if (
          check1[1] != 'off' &&
          check2[1] != 'off' &&
          check3[1] == 'off'
        ) {
          if (currentTime < scomp1) {
            if (vcomp1 > vcomp2 && currentTime < vcomp2) {
              addTime =
                '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
                phone +
                ';if(this.href!=' +
                link +
                '){this.href=' +
                link +
                ';return false;}"><img src="images/phone.png">Открыто до ' +
                vtemph2 +
                ':' +
                vtempm2 +
                '</a>';
            } else {
              addTime =
                '<div class="openTime closeTime">Закрыто до ' +
                stemph1 +
                ':' +
                stempm1 +
                '</div>';
            }
          } else if (
            currentTime > scomp1 &&
            currentTime < scomp2 &&
            scomp1 < scomp2
          ) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else if (currentTime > scomp2 && scomp1 < scomp2) {
            addTime =
              '<div class="openTime closeTime">Закрыто, сегодня и завтра</div>';
          } else if (currentTime > scomp2 && scomp1 > scomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Закроется завтра в ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">График не определен</div>';
          }
        } else if (
          check1[1] != 'off' &&
          check2[1] != 'off' &&
          check3[1] != 'off'
        ) {
          if (currentTime < scomp1) {
            if (vcomp1 > vcomp2 && currentTime < vcomp2) {
              addTime =
                '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
                phone +
                ';if(this.href!=' +
                link +
                '){this.href=' +
                link +
                ';return false;}"><img src="images/phone.png">Открыто до ' +
                vtemph2 +
                ':' +
                vtempm2 +
                '</a>';
            } else {
              addTime =
                '<div class="openTime closeTime">Закрыто до ' +
                stemph1 +
                ':' +
                stempm1 +
                '</div>';
            }
          } else if (
            currentTime > scomp1 &&
            currentTime < scomp2 &&
            scomp1 < scomp2
          ) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Открыто до ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else if (currentTime > scomp2 && scomp1 < scomp2) {
            addTime =
              '<div class="openTime closeTime">Откроется завтра в ' +
              ztemph1 +
              ':' +
              ztempm1 +
              '</div>';
          } else if (currentTime > scomp2 && scomp1 > scomp2) {
            addTime =
              '<a href="#phone" class="openTime" onclick="this.innerHTML=' +
              phone +
              ';if(this.href!=' +
              link +
              '){this.href=' +
              link +
              ';return false;}"><img src="images/phone.png">Закроется завтра в ' +
              stemph2 +
              ':' +
              stempm2 +
              '</a>';
          } else {
            addTime =
              '<div class="openTime closeTime">График не определен</div>';
          }
        }
      }
    }

    var tempPlace =
      '<input hidden value="' +
      lat +
      '" id="' +
      counter +
      'lat"><input hidden value="' +
      name +
      '" id="name' +
      counter +
      '"><input hidden value="' +
      lng +
      '" id="' +
      counter +
      'lon"><input hidden value="' +
      dostavka +
      '" id="' +
      counter +
      'dostavka"><input hidden id="pID' +
      counter +
      '" value="' +
      id +
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
      '"><input hidden id="ff5' +
      counter +
      '" value="' +
      f5 +
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
      name +
      '</div></div><br>';
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

    tempPlace += '<div class="placeLocation">' + location + '</div>';
    tempPlace +=
      '<div onclick="openText(this)" class="description">' +
      description +
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
      '<a class="btnMenu" onclick="openContX(' +
      "'" +
      'map' +
      "'," +
      counter +
      ')" href="#map"><div class="menuImageWrap"><img src="images/map.png"></div><div class="menuName">Карта</div></a>';
    if (placesLoad == 'no') {
      tempPlace +=
        '<a class="btnMenu" href="profile.html"><div class="menuImageWrap"><img src="images/book.png"></div><div class="menuName">Бронь</div></a>';
    } else {
      if (placesLoad.includes('x' + id + 'x') && bron == 'yes') {
        tempPlace +=
          '<a class="btnMenu" onclick="openContX(' +
          "'" +
          'bron' +
          "'," +
          counter +
          ')" href="#bron"><div class="menuImageWrap"><img src="images/book.png"></div><div class="menuName">Бронь</div></a>';
      } else if (bron == 'yes') {
        tempPlace +=
          '<a class="btnMenu" href="#bron" onclick="openContX(' +
          "'" +
          'addplace' +
          "'," +
          counter +
          ')"><div class="menuImageWrap"><img src="images/book.png"></div><div class="menuName">Бронь</div></a>';
      } else {
      }
    }
    var tempDel = '';
    if (more.includes('dostavka')) {
      tempDel =
        '<a href="#dostavka" class="addmore" onclick="openContX(' +
        "'" +
        'dostavka' +
        "'," +
        counter +
        ')">Доставка</a>';
    }
    tempPlace +=
      ' <a class="btnMenu" onclick="openContX(' +
      "'" +
      'menu' +
      "'," +
      counter +
      ')" href="#menu"><div class="menuImageWrap"><img src="images/menu.png"></div><div class="menuName">Меню</div></a>';
    tempPlace +=
      '<a class="btnMenu" onclick="openContX(' +
      "'" +
      'photo' +
      "'," +
      counter +
      ')" href="#photo"><div class="menuImageWrap"><img src="images/pic.png"></div><div class="menuName">Фото</div></a>';
    if (placesLoad == 'no') {
      tempPlace +=
        '<a class="btnMenu" href="profile.html"><div class="menuImageWrap"><img src="images/star.png"></div><div class="menuName">Отзыв</div></a><br><br>';
    } else {
      tempPlace +=
        '<a class="btnMenu" onclick="openContX(' +
        "'" +
        'rate' +
        "'," +
        counter +
        ')" href="#rate"><div class="menuImageWrap"><img src="images/star.png"></div><div class="menuName">Отзыв</div></a><br><br>';
    }
    if (placesLoad == 'no') {
      tempPlace += '<a href="profile.html" class="addmore">Войти</a>' + tempDel;
    } else {
      if (placesLoad.includes('x' + id + 'x')) {
        tempPlace +=
          '<a href="#remove" id="pAdd' +
          id +
          '" onclick="removePlace(this.id);" class="addmore">Удалить</a>' +
          tempDel;
      } else {
        tempPlace +=
          '<a href="#add" id="pAdd' +
          id +
          '" onclick="addPlace(this.id);" class="addmore">Добавить</a>' +
          tempDel;
      }
    }

    tempPlace += addTime;
    tempPlace += addMore;
    tempPlace += '<br><br></div>';

    return [tempPlace, counter, id];
  } catch (err) {
    console.log(err);
    return ['', counter, id];
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
function openDop() {
  alert('more');
}
function locateFirst() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        l1 = parseFloat(position.coords.latitude);
        l2 = parseFloat(position.coords.longitude);
        checkIfLoggedIn();
      },
      function (error) {
        //alert(error.message);
        alert('доступ к вашей локации отклонен');
        l1 = 0;
        l2 = 0;
        checkIfLoggedIn(0, 0);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      },
    );
  } else {
    alert('ваше устройство не поддерживает определение локации');
    l1 = 0;
    l2 = 0;
    checkIfLoggedIn();
  }
}
function locatePlace(lat1, lon1, counter) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  if (l1 == '' || l2 == '') {
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
      locateFirst();
      typewait = 'no';
    }, 3000);
  }
}

function loadPlace() {
  var placeID = window.location.href;
  placeID = placeID.match(new RegExp('#' + '(.*)'));
  if (placeID == null) {
    placeID = 'not';
  } else {
    placeID = placeID[1];
  }

  document.getElementById('filtr').style.display = 'none';

  var placeFind = document.getElementById('pFind').value;
  var placeType = pType;
  var placeRegion = pRegion;
  var placeMore = pMore;
  if (placeType == '') {
    placeType = 'all';
  }
  if (placeRegion == '') {
    placeRegion = 'all';
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
    url: 'lPlace.php',
    data: {
      dpPage: document.getElementById('page').innerHTML,
      dpType: placeType,
      dpRegion: placeRegion,
      dpFind: placeFind,
      dpMore: placeMore,
      dpID: placeID,
    },
    success: function (data) {
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
          data.indexOf(d + 'havrating:') >= 0
        ) {
          var lName = data.match(
            new RegExp(d + 'havname:' + '(.*)' + d + 'havrating:'),
          );
          lName = lName[1];
          var lRating = data.match(
            new RegExp(d + 'havrating:' + '(.*)' + d + 'havlat:'),
          );
          lRating = lRating[1];
          var lSection = data.match(
            new RegExp(d + 'havsection:' + '(.*)' + d + 'havname:'),
          );
          lSection = lSection[1];
          var lMore = data.match(
            new RegExp(d + 'havmore:' + '(.*)' + d + 'havphone:'),
          );
          lMore = lMore[1];
          var lPhone = data.match(
            new RegExp(d + 'havphone:' + '(.*)' + d + 'havbron:'),
          );
          lPhone = lPhone[1];
          var lLat = data.match(
            new RegExp(d + 'havlat:' + '(.*)' + d + 'havlon:'),
          );
          lLat = lLat[1];
          var lLon = data.match(
            new RegExp(d + 'havlon:' + '(.*)' + d + 'havworkTime:'),
          );
          lLon = lLon[1];
          var lWorkTime = data.match(
            new RegExp(d + 'havworkTime:' + '(.*)' + d + 'havtype:'),
          );
          lWorkTime = lWorkTime[1];
          var lType = data.match(
            new RegExp(d + 'havtype:' + '(.*)' + d + 'havlocation:'),
          );
          lType = lType[1];
          var lLocation = data.match(
            new RegExp(d + 'havlocation:' + '(.*)' + d + 'havdesc:'),
          );
          lLocation = lLocation[1];
          var lBron = data.match(
            new RegExp(d + 'havbron:' + '(.*)' + d + 'havmenu:'),
          );
          lBron = lBron[1];
          var lMenu = data.match(
            new RegExp(d + 'havmenu:' + '(.*)' + d + 'havfinito:'),
          );
          lMenu = lMenu[1];
          var lDescription = data.match(
            new RegExp(d + 'havdesc:' + '(.*)' + d + 'havpromo:'),
          );
          lDescription = lDescription[1];
          var lDostavka = data.match(
            new RegExp(d + 'havfinito:' + '(.*)' + d + 'havdostavka:'),
          );
          lDostavka = lDostavka[1];
          var lID = data.match(
            new RegExp(d + 'havid:' + '(.*)' + d + 'havmore:'),
          );
          lID = lID[1];
          var listPlaces = document.getElementById('page').innerHTML - 1;
          listPlaces = listPlaces * 18;
          listPlaces += counter;
          var files = data.match(
            new RegExp(d + 'havfiles:' + '(.*)' + d + 'havsection:'),
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
          var lFile5 = files.match(new RegExp('filel:' + '(.*)' + 'file1:'));
          lFile5 = lFile5[1];

          lDescription = lDescription.replace(/nextln/g, '<br>');
          countPlaces = counter;
          tempPlacePost = postPlace(
            lFile1,
            lFile2,
            lFile3,
            lFile4,
            lFile5,
            lSection,
            lName,
            lRating,
            lMore,
            lWorkTime,
            lType,
            lLocation,
            lDescription,
            listPlaces,
            lPhone,
            counter,
            lLat,
            lLon,
            lID,
            lBron,
            lMenu,
            lDostavka,
          );
          loader += tempPlacePost[0];
          logoLoader.push([tempPlacePost[1], tempPlacePost[2]]);
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
  var f1 = 0;
  var f2 = 0;
  var f3 = 0;
  var f4 = 0;
  var f5 = 0;
  if (total != 30) {
    var counter = 0;
    while (counter < total) {
      counter++;
      tempID = document.getElementById('pID' + counter).value;
      f1 = document.getElementById('ff1' + counter).value;
      f2 = document.getElementById('ff2' + counter).value;
      f3 = document.getElementById('ff3' + counter).value;
      f4 = document.getElementById('ff4' + counter).value;
      f5 = document.getElementById('ff5' + counter).value;
      imageExists(
        'upload/place/' + tempID + '/lilpost1.jpeg?' + f1,
        counter + 'lilppic1',
      );
      imageExists(
        'upload/place/' + tempID + '/lilpost2.jpeg?' + f2,
        counter + 'lilppic2',
      );
      imageExists(
        'upload/place/' + tempID + '/lilpost3.jpeg?' + f3,
        counter + 'lilppic3',
      );
      imageExists(
        'upload/place/' + tempID + '/lilpost4.jpeg?' + f4,
        counter + 'lilppic4',
      );
      imageExists(
        'upload/place/' + tempID + '/post5.png?' + f5,
        'nameID' + counter,
      );
      console.log('nameID' + counter);
    }
  }
}
function imageExists(image_url, tID) {
  console.log(image_url);
  console.log(tID);
  var image = new Image();

  image.onload = function () {
    if (tID.indexOf('nameID') >= 0) {
      var opa = tID.replace('ID', '');
      document.getElementById(tID).innerHTML =
        "<img title='" +
        document.getElementById(opa).value +
        "' src='" +
        image_url +
        "'>";
      console.log('ZZZZ');
      console.log(tID);
    } else {
      document.getElementById(tID).setAttribute('src', image_url);
      document.getElementById(tID).style.display = '';
      console.log('YYY');
    }
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
            alert('ошибка входа');
          } else {
            alert('неизвестная ошибка');
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
    var header = document.getElementById('placebarX');
    var header2 = document.getElementById('placebarX2');
    var header3 = document.getElementById('placebarX3');
    if (window.pageYOffset > 100) {
      header.style.position = 'fixed';
      header.style.top = '0';
      header2.style.position = 'fixed';
      header2.style.top = '0';
      header2.style.left = '0';
      header3.style.position = 'fixed';
      header3.style.top = '';
      header3.style.bottom = '0';
    } else {
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

function checkIfLoggedIn() {
  animate = true;
  document.getElementById('load').style.display = 'block';
  o.c = 1;
  var unID = getCookie('c');
  if (unID == null) {
    loadPlace();
  } else {
    if (unID.includes('x5qz')) {
      $.ajax({
        type: 'post',
        url: 'checkLog.php',
        data: {
          checkL: unID,
        },
        success: function (data) {
          console.log(data);
          if (data.indexOf('havsuccesshav') >= 0) {
            online = true;
            placesLoad = data.match(
              new RegExp('havplaces:' + '(.*)' + 'havfinito:'),
            );
            placesLoad = placesLoad[1];
            loadPlace();
          } else if (data.indexOf('haverrloginhav') >= 0) {
            document.getElementById('errReg').innerHTML = 'Вы не вошли';
            document.getElementById('contxg').style.display = 'block';
            loadPlace();
          } else if (data.indexOf('haverrserverhav') >= 0) {
            document.getElementById('errReg').innerHTML =
              'Потеряна связь с сервером';
            document.getElementById('contxg').style.display = 'block';
            loadPlace();
          } else if (data.indexOf('haverrdatahav') >= 0) {
            document.getElementById('errReg').innerHTML =
              'Нет доступа к данным';
            document.getElementById('contxg').style.display = 'block';
            loadPlace();
          }
        },
      });
    } else {
      alert('loggedOutB');
      loadPlace();
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

function checkImage(ext, checkMain, id, tempGal, tempID2) {
  if (id == 7) {
    if (checkMain == false) {
      tempGal +=
        '<div class="gallContainer"><img id="pgal" src="images/pic1.png"></div>';
    } else {
      tempGal += '</div>';
    }
    document.getElementById('contx').innerHTML = tempGal;
  } else {
    var tempPath = '';
    tempPath = 'upload/i' + tempID2 + 'dx' + id + 'x.' + ext;
    $.get(tempPath)
      .done(function () {
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
        if (ext == 'jpg') {
          ext = 'png';
        } else if (ext == 'png') {
          ext = 'jpeg';
        } else {
          ext = 'jpg';
          id++;
        }
        checkImage(ext, checkMain, id, tempGal, tempID2);
      })
      .fail(function () {
        if (ext == 'jpg') {
          ext = 'png';
        } else if (ext == 'png') {
          ext = 'jpeg';
        } else {
          ext = 'jpg';
          id++;
        }
        checkImage(ext, checkMain, id, tempGal, tempID2);
      });
  }
}

function openContX(openIt, counter, id, f1, f2, f3, f4) {
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
    var tempPath = 'upload/place/' + id + '/post1.jpeg?' + f1;
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
      tempPath = 'upload/place/' + id + '/post2.jpeg?' + f2;
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
      tempPath = 'upload/place/' + id + '/post3.jpeg?' + f3;
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
      tempPath = 'upload/place/' + id + '/post4.jpeg?' + f4;
      image4.src = tempPath;
    }

    //checkImage(false,1,galery,id,operation);
  }
}

function openContXX(openIt, counter) {
  document.getElementById('contxg').style.display = 'block';
  $('body').css('overflow', 'hidden');
  document.getElementById('placebarX').style = 'position:absolute;top:-100vw;';
  document.getElementById('placebarX2').style = 'position:absolute;top:-100vw;';
  document.getElementById('placebarX2X').style =
    'position:absolute;top:-100vw;';
  document.getElementById('placebarX3').style = 'position:absolute;top:-100vw;';
  var tempID = document.getElementById('pID' + counter).value;
  pSelected = tempID;
  if (openIt == 'map') {
    document.getElementById('contx').innerHTML =
      '<div style="border-radius:1vw;width:100%;height:100%;" id="theMap"></div><a  style="z-index: 4;position: relative;bottom:100%;" onclick="closeContX()" id="closeIt" href="#close">X</a>';

    var l3 = document.getElementById(counter + 'lat').value;
    var l4 = document.getElementById(counter + 'lon').value;
    window.open(
      'https://www.google.com/maps/dir/?api=1&origin=' +
        l1 +
        ',' +
        l2 +
        '&destination=' +
        l3 +
        ',' +
        l4 +
        '&travelmode=driving',
      '_blank',
    );
  } else if (openIt == 'bron') {
    showCalendar(0);
  } else if (openIt == 'photo') {
    var galery =
      '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br>';
    checkImage('jpg', false, 1, galery, tempID);
  } else if (openIt == 'rate') {
    document.getElementById('contx').innerHTML =
      '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br>';
    ratePlace(tempID);
  } else if (openIt == 'addplace') {
    if (document.getElementById('pAdd' + tempID).innerHTML == 'Удалить') {
      showCalendar(0);
    } else {
      document.getElementById('contx').innerHTML =
        '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><br><br><br><br><span>Добавьте заведение</span></div>';
    }
  } else if (openIt == 'dostavka') {
    document.getElementById('contx').innerHTML =
      '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br>';
    dostavkaLoad(counter);
  } else if (openIt == 'menu') {
    document.getElementById('contx').innerHTML =
      '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br>';
    menuLoad(tempID);
  } else {
    document.getElementById('contx').innerHTML =
      '<a " onclick="closeContX()" id="closeIt" href="#close">X</a>';
  }
}

function dostavkaLoad(counter) {
  var dostavkaGet = document.getElementById(counter + 'dostavka').value;
  var svD = dostavkaGet.match(new RegExp('svxstart' + '(.*)' + 'svxend'));
  svD = svD[1];
  var yanD = dostavkaGet.match(new RegExp('yanxstart' + '(.*)' + 'yanxend'));
  yanD = yanD[1];
  var delD = dostavkaGet.match(new RegExp('delxstart' + '(.*)' + 'delxend'));
  delD = delD[1];
  var tempDelivery = '';
  if (svD != '') {
    tempDelivery +=
      '<a href="https://' +
      svD +
      '" target="_blank">своя доставка</a></div><br>';
  } else {
    tempDelivery += '</div><br>';
  }
  if (yanD != '') {
    tempDelivery +=
      '<div class="delivery"><a href="https://eda.yandex.by/' +
      yanD +
      '" target="_blank"><img src="images/yandex.png"></a>';
  } else {
    tempDelivery += '<div class="delivery">';
  }
  if (delD != '') {
    tempDelivery +=
      '<a href="https://delivio.by/' +
      delD +
      '" target="_blank"><img src="images/delivio.png"></a></div>';
  } else {
    tempDelivery += '</div>';
  }
  document.getElementById('contx').innerHTML =
    '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><br><span>Службы доставки</span><br>' +
    tempDelivery;
}

function menuLoad(placeID) {
  $.ajax({
    type: 'post',
    url: 'lMenu.php',
    data: {
      placeID: placeID,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('success') >= 0) {
        if (data.includes('mmmEmptymmm')) {
        } else {
          var counterLim = data.match(
            new RegExp('mCountstart' + '(.*)' + 'mCountend'),
          );
          counterLim = counterLim[1];
          var counter = 1;
          var d = 'a';
          var dx = '';
          var tempID = '';
          var tempMHTML = '';
          var tempTypeHTML = '';
          while (counter <= counterLim) {
            if (counter == 10) {
              d = 'b';
            }
            if (counter == 20) {
              d = 'c';
            }
            if (counter == 30) {
              d = 'd';
            }
            if (counter == 40) {
              d = 'e';
            }
            if (counter == 50) {
              d = 'f';
            }
            if (counter == 60) {
              d = 'g';
            }
            if (counter == 70) {
              d = 'h';
            }
            if (counter == 80) {
              d = 'i';
            }
            if (counter == 90) {
              d = 'j';
            }
            if (counter == 100) {
              d = 'k';
            }
            dx = d + counter;
            var mName = data.match(
              new RegExp(dx + 'mName:' + '(.*)' + dx + 'mID:'),
            );
            mName = mName[1];
            var mID = data.match(
              new RegExp(dx + 'mID:' + '(.*)' + dx + 'mDop:'),
            );
            mID = mID[1];
            var mDop = data.match(
              new RegExp(dx + 'mDop:' + '(.*)' + dx + 'mPrice:'),
            );
            mDop = mDop[1];
            var mPrice = data.match(
              new RegExp(dx + 'mPrice:' + '(.*)' + dx + 'mKupon:'),
            );
            mPrice = mPrice[1];
            var mKupon = data.match(
              new RegExp(dx + 'mKupon:' + '(.*)' + dx + 'mType:'),
            );
            mKupon = mKupon[1];
            var mType = data.match(
              new RegExp(dx + 'mType:' + '(.*)' + dx + 'mFinito:'),
            );
            mType = mType[1];

            if (!mTypeID.includes(mType)) {
              mTypeID.push(mType);
            }
            tempID = mTypeID.indexOf(mType);
            mPosition.push([mID, mDop, mPrice, mType, mName, placeID]);
            if (counter == 1) {
              tempMHTML +=
                '<div style="width:100%;text-align:center;"><a onclick="changeTypePos(-1)" href="#left" id="typeLeft">&lt</a><div style="display:inline-block;" id="posType">' +
                mType +
                '</div><a onclick="changeTypePos(1);" href="#right" id="typeRight">&gt</a></div><div id="posName">' +
                mName +
                '</div>';
              tempMHTML += '<div id="posDop">' + mDop + '</div>';
              tempMHTML +=
                '<div id="picContainer"><img id="posPic" src="images/pic1.png" alt="нет фото"></div>';
              tempMHTML +=
                '<div style="width:100%;text-align:center;"><a style="border-color:white;" onclick="changeItem(-1)" href="#left" id="typeLeft">&lt</a><div style="display:inline-block;" id="posPrice">' +
                mPrice +
                '</div><a style="border-color:white;" onclick="changeItem(1);" href="#right" id="typeRight">&gt</a></div>';

              document.getElementById('contx').innerHTML =
                '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><br>' +
                tempMHTML;
            }
            counter++;
          }
          changeTypePos(0);
        }
      } else if (data.indexOf('toolong') >= 0) {
        document.getElementById('errReg').innerHTML =
          'Название слишком длинное';
        document.getElementById('contxg').style.display = 'block';
      } else if (data.indexOf('nopoints') >= 0) {
        document.getElementById('errReg').innerHTML = 'Недостаточно бонусов';
        document.getElementById('contxg').style.display = 'block';
      }
    },
  });
}
var counterPos = 0;
var counterType = 0;
function changeItem(way) {
  if (way == 1) {
    if (mSelected.length == counterPos + 1) {
      counterPos = 0;
    } else {
      counterPos++;
    }
  } else if (way == -1) {
    if (counterPos == 0) {
      counterPos = mSelected.length - 1;
    } else {
      counterPos--;
    }
  }
  document.getElementById('posName').innerHTML = mSelected[counterPos][4];
  document.getElementById('posDop').innerHTML = mSelected[counterPos][1];
  document.getElementById('posPrice').innerHTML = mSelected[counterPos][2];
  var links =
    'upload/i' +
    mSelected[counterPos][5] +
    'dmpic' +
    mSelected[counterPos][0] +
    'm.';
  if (imageExists(links + 'png')) {
    document.getElementById('posPic').setAttribute('src', links + 'png');
  } else if (imageExists(links + 'jpg')) {
    document.getElementById('posPic').setAttribute('src', links + 'jpg');
  } else if (imageExists(links + 'jpeg')) {
    document.getElementById('posPic').setAttribute('src', links + 'jpeg');
  }
}
function changeTypePos(way) {
  mSelected = [];

  if (way == 1) {
    if (mTypeID.length == counterType + 1) {
      counterType = 0;
    } else {
      counterType++;
    }
  } else if (way == -1) {
    if (counterType == 0) {
      counterType = mTypeID.length - 1;
    } else {
      counterType--;
    }
  }
  document.getElementById('posType').innerHTML = mTypeID[counterType];
  for (i = 0; i < mPosition.length; i++) {
    if (mPosition[i][3] == mTypeID[counterType]) {
      mSelected.push(mPosition[i]);
    }
  }
  changeItem(0);
}

function ratePlace(tempIDX) {
  var tempSend = "'" + tempIDX + "'";
  document.getElementById('contx').innerHTML =
    '<a onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><span>Оценка</span><br><br><a onclick="sendRate(1,' +
    tempSend +
    ')" href="#rate">отлично</a><a onclick="sendRate(2,' +
    tempSend +
    ')" href="#rate">хорошо</a><a onclick="sendRate(3,' +
    tempSend +
    ') "href="#rate">плохо</a><a onclick="sendRate(4,' +
    tempSend +
    ')" href="#rate">ужасно</a></div>';
}
function showNav() {
  document.getElementById('placebarX3').style.top = '-100vw';
  document.getElementById('contxg').style.display = 'block';
  document.getElementById('contx').innerHTML =
    '<a onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><span>Разделы</span><br><br><a href="promo.html">Акции</a><a href="posts.html">Объявления</a><a href="profile.html">Профиль</a><a onclick="openSlider();" href="#filtr">Фильтр</a></div>';
}

function sendRate(urate, tempZ) {
  alert(tempZ);
  var unID = getCookie('c');
  if (unID != null) {
    $.ajax({
      type: 'post',
      url: 'ratePlace.php',
      data: {
        pAdd: tempZ,
        checkL: unID,
        urate: urate,
      },
      success: function (data) {
        console.log(data);
        if (data.indexOf('success') >= 0) {
          var lRate = data.match(new RegExp('actstart' + '(.*)' + 'actend'));
          lRate = lRate[1];
          var rateM = '';
          alert(lRate);
          if (lRate == 'greatgood') {
            rateM = 'Вы сменили оценку с отлично на хорошо';
          } else if (lRate == 'greatnotgood') {
            rateM = 'Вы сменили оценку с отлично на плохо';
          } else if (lRate == 'greatbad') {
            rateM = 'Вы сменили оценку с отлично на ужасно';
          } else if (lRate == 'goodgreat') {
            rateM = 'Вы сменили оценку с хорошо на отлично';
          } else if (lRate == 'goodnotgood') {
            rateM = 'Вы сменили оценку с хорошо на плохо';
          } else if (lRate == 'goodbad') {
            rateM = 'Вы сменили оценку с хорошо на ужасно';
          } else if (lRate == 'notgoodgreat') {
            rateM = 'Вы сменили оценку с плохо на отлично';
          } else if (lRate == 'notgoodgood') {
            rateM = 'Вы сменили оценку с плохо на хорошо';
          } else if (lRate == 'notgoodbad') {
            rateM = 'Вы сменили оценку с плохо на ужасно';
          } else if (lRate == 'badgreat') {
            rateM = 'Вы сменили оценку с ужасно на отлично';
          } else if (lRate == 'badgood') {
            rateM = 'Вы сменили оценку с ужасно на хорошо';
          } else if (lRate == 'badnotgood') {
            rateM = 'Вы сменили оценку с ужасно на плохо';
          } else if (lRate == 'exist') {
            rateM = 'Ваша оценка осталась прежней';
          } else if (lRate == 'added') {
            rateM = 'Ваша оценка принята';
          }

          document.getElementById('contx').innerHTML =
            '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br><br><div class="rateplace" id="rateplaceID"><br><br><br><br><span>' +
            rateM +
            '</span></div>';
        } else if (data.indexOf('errlog') >= 0) {
          loadPlace();
        } else {
          loadPlace();
        }
      },
    });
  }
}
var selectDay = '';
var selectMonth = '';
var selectYear = '';

function showCalendar(monthCount) {
  var now = new Date();
  var caldays = '';
  now.setMonth(now.getMonth() + +monthCount);
  var day = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  if (day == 0) {
    day = 7;
  }
  var counter = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  //alert("день "+day+" год "+now.getFullYear()+" дней "+counter);
  var countBlocks = 0;

  while (day != 1) {
    countBlocks++;
    caldays += "<a href='#none' class='calbox'>/</a>";
    day--;
  }
  var daysCount = 0;
  while (daysCount != counter) {
    countBlocks++;
    daysCount++;
    if (now.getDate() == daysCount && monthCount == 0) {
      caldays +=
        "<a onclick='daySelect(this," +
        now.getFullYear() +
        ',' +
        now.getMonth() +
        ")' style='border-color:rgb(100,150,250);' href='#day' id='day" +
        daysCount +
        "' class='calbox gcalbox'>" +
        daysCount +
        '</a>';
    } else if (now.getDate() > daysCount && monthCount == 0) {
      caldays +=
        "<a style='color:rgb(240,120,120);' href='#day' id='day" +
        daysCount +
        "' class='calbox'>" +
        daysCount +
        '</a>';
    } else {
      caldays +=
        "<a onclick='daySelect(this," +
        now.getFullYear() +
        ',' +
        now.getMonth() +
        ")' href='#day' id='day" +
        daysCount +
        "' class='calbox pickday gcalbox'>" +
        daysCount +
        '</a>';
    }
    if (countBlocks == 7) {
      countBlocks = 0;
      caldays += '<br>';
    }
  }
  while (countBlocks != 0) {
    caldays += "<div class='calbox'>/</div>";
    countBlocks++;
    if (countBlocks == 7) {
      countBlocks = 0;
    }
  }
  var countH = 0;
  var countM = 0;
  var optionH = '';
  var optionM = '';
  while (countH != 24) {
    if (countH < 10) {
      optionH += '<option>0' + countH + '</option>';
    } else {
      optionH += '<option>' + countH + '</option>';
    }

    countH++;
  }
  while (countM != 60) {
    if (countM < 10) {
      optionM += '<option>0' + countM + '</option>';
    } else {
      optionM += '<option>' + countM + '</option>';
    }
    countM += 5;
  }

  var now_month = now.getMonth();
  now_month++;
  var now_week = now.getDay();
  if (now_month == '1') {
    now_month = 'Январь';
  } else if (now_month == '2') {
    now_month = 'Февраль';
  } else if (now_month == '3') {
    now_month = 'Март';
  } else if (now_month == '4') {
    now_month = 'Апрель';
  } else if (now_month == '5') {
    now_month = 'Май';
  } else if (now_month == '6') {
    now_month = 'Июнь';
  } else if (now_month == '7') {
    now_month = 'Июль';
  } else if (now_month == '8') {
    now_month = 'Август';
  } else if (now_month == '9') {
    now_month = 'Сентябрь';
  } else if (now_month == '10') {
    now_month = 'Октябрь';
  } else if (now_month == '11') {
    now_month = 'Ноябрь';
  } else if (now_month == '12') {
    now_month = 'Декабрь';
  }
  document.getElementById('contx').innerHTML =
    '<a " onclick="closeContX()" id="closeIt" href="#close">X</a><br><div style="width:100%;text-align:center;color:rgb(206, 194, 164)" class="calendar" id="calendarX"><h1 id="month"><a style="color:white;" id="leftC" class="calArrow" onclick="showCalendar(' +
    monthCount +
    '-1);" href="#left"><</a><span id="monthDis">' +
    now_month +
    '</span><a id="rightC" style="color:white;" class="calArrow" onclick="showCalendar(' +
    monthCount +
    '+1);" href="#right">></a><span style="color:white;"> ' +
    now.getFullYear() +
    '</span></h1><br><div style="display:inline-block;"><div class="calbox">ПН</div><div class="calbox">ВТ</div><div class="calbox">СР</div><div class="calbox">ЧТ</div><div class="calbox">ПТ</div><div class="calbox">СБ</div><div class="calbox">ВС</div><br>' +
    caldays +
    '</div><br><br><div class="calent">прибытие <select id="sh1">' +
    optionH +
    '</select> : <select id="sm1">' +
    optionM +
    '</select></div><br><br><a href="#next" onclick="nextBron()" style="display:none;" id ="nextBron">далее</a></div><div id="setBron"></div>';

  if (monthCount == 0) {
    document.getElementById('leftC').style.display = 'none';
  }
  if (monthCount == 12) {
    document.getElementById('rightC').style.display = 'none';
  }
}
function changeP(change) {
  if (document.getElementById('pAmount').innerHTML == 1 && change < 0) {
    change = 0;
  }
  document.getElementById('pAmount').innerHTML =
    parseInt(document.getElementById('pAmount').innerHTML) + change;
}
var dateSend = '';
function nextBron() {
  var contBron =
    "<h1>количество человек</h1><a class='peadd' onclick='changeP(-1)' href='#minus'>-</a><span id='pAmount'>1</span><a onclick='changeP(1)' class='peadd' href='#plus'>+</a><br><h1>предпочтения</h1><input id='bronInput' maxlength='50'><br><br>";
  var now_month = selectMonth + 1;
  var hours =
    document.getElementById('sh1').options[
      document.getElementById('sh1').selectedIndex
    ].text;
  var minutes =
    document.getElementById('sm1').options[
      document.getElementById('sm1').selectedIndex
    ].text;
  dateSend =
    selectYear +
    '-' +
    now_month +
    '-' +
    selectDay +
    ' ' +
    hours +
    ':' +
    minutes +
    ':00';
  var arrive = hours + ':' + minutes + ' / ' + selectDay;
  if (now_month == '1') {
    now_month = 'Январь';
  } else if (now_month == '2') {
    now_month = 'Февраль';
  } else if (now_month == '3') {
    now_month = 'Март';
  } else if (now_month == '4') {
    now_month = 'Апрель';
  } else if (now_month == '5') {
    now_month = 'Май';
  } else if (now_month == '6') {
    now_month = 'Июнь';
  } else if (now_month == '7') {
    now_month = 'Июль';
  } else if (now_month == '8') {
    now_month = 'Август';
  } else if (now_month == '9') {
    now_month = 'Сентябрь';
  } else if (now_month == '10') {
    now_month = 'Октябрь';
  } else if (now_month == '11') {
    now_month = 'Ноябрь';
  } else if (now_month == '12') {
    now_month = 'Декабрь';
  }
  document.getElementById('calendarX').style.display = 'none';
  document.getElementById('setBron').innerHTML =
    '<div id="nextBronId" class="nextBronC"><h1 id="bronka">' +
    arrive +
    ' ' +
    now_month +
    ' ' +
    selectYear +
    'г.</h1>' +
    contBron +
    '<a href="#next" onclick="backBron()" id ="nextBron">назад</a><a href="#next" onclick="zaprosBron()" id ="nextBron">запросить бронь</a></div>';
}
function zaprosBron() {
  var pAmount = document.getElementById('pAmount').innerHTML;
  var pDescribe = document.getElementById('bronInput').value;
  var unID = getCookie('c');
  document.getElementById('nextBronId').innerHTML = '';
  alert(pAmount);
  alert(pDescribe);

  $.ajax({
    type: 'post',
    url: 'bron.php',
    data: {
      bronAmount: pAmount,
      bronDesc: pDescribe,
      bronDate: dateSend,
      bronID: pSelected,
      checkL: unID,
    },
    success: function (data) {
      console.log(data);
      if (data.indexOf('success') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Запрос отправлен, ожидайте подтверждения</h1>";
      } else if (data.indexOf('errserver') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Сервер не доступен</h1>";
      } else if (data.indexOf('errdata') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Ошибка доступа к данным</h1>";
      } else if (data.indexOf('errlog') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Вы не вошли</h1>";
      } else if (data.indexOf('errempty') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Пустой запрос</h1>";
      } else if (data.indexOf('nopoints') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Бронь не доступна,</h1><h1>цена брони 1 бонус</h1>";
      } else if (data.indexOf('notaproved') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Бронь не доступна,</h1><h1>подтвердите свой аккаунт</h1>";
      } else if (data.indexOf('cancellast') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Отмените старую бронь</h1>";
      } else if (data.indexOf('errno') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Недопустимые комбинации слов использованы</h1>";
      } else if (data.indexOf('addthisplace') >= 0) {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Бронь не доступна,</h1><h1>добавьте заведение</h1>";
      } else {
        document.getElementById('nextBronId').innerHTML =
          "<h1 style='margin-top:40%;'>Неизвестная ошибка</h1>";
      }
    },
  });
}
function backBron() {
  document.getElementById('calendarX').style.display = '';
  document.getElementById('setBron').innerHTML = '';
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

function daySelect(day, year, month) {
  document.getElementById('nextBron').style.display = '';
  selectDay = day.innerHTML;
  selectMonth = month;
  selectYear = year;
  var els = document.getElementsByClassName('gcalbox');
  for (var i = 0; i < els.length; i++) {
    els[i].style.color = 'rgb(150,150,150)';
    if (
      els[i].style.borderColor == 'rgb(150,150,150)' ||
      els[i].style.borderColor == 'yellow'
    ) {
      els[i].style.borderColor = 'rgb(150,150,150)';
    }
  }

  day.style.color = 'rgb(70,200,70)';
  if (
    day.style.borderColor == '' ||
    day.style.borderColor == 'rgb(150, 150, 150)'
  ) {
    day.style.borderColor = 'yellow';
  }
}

function changeRegion(region, regionID) {
  if (regionID.style.backgroundColor == '') {
    document.getElementById('reg1').style.backgroundColor = '';
    document.getElementById('reg2').style.backgroundColor = '';
    document.getElementById('reg3').style.backgroundColor = '';
    document.getElementById('reg4').style.backgroundColor = '';
    document.getElementById('reg5').style.backgroundColor = '';
    document.getElementById('reg6').style.backgroundColor = '';
    regionID.style.backgroundColor = 'rgb(125,200,125)';
    pRegion = region;
    document.getElementById('type').style.display = '';
    if (region == 1) {
      document.getElementById('t1t').innerHTML = 'Ресторан';
      document.getElementById('t2t').innerHTML = 'Кафе';
      document.getElementById('t3t').innerHTML = 'Бар/Паб';
      document.getElementById('t4t').innerHTML = 'Кофейня';
      document.getElementById('t5t').innerHTML = 'Чайная';
      document.getElementById('t6t').innerHTML = 'Закусочная';
      document.getElementById('t7t').innerHTML = 'Фастфуд';
      document.getElementById('t8t').innerHTML = 'Бистро';
      document.getElementById('t9t').innerHTML = 'Столовая';
      document.getElementById('t10t').innerHTML = 'Буфет';
      document.getElementById('t11t').innerHTML = 'Кафетерий';
      document.getElementById('t12t').innerHTML = 'Кулинария';

      document.getElementById('m1m').innerHTML = '24/7';
      document.getElementById('m2m').innerHTML = 'WI-FI';
      document.getElementById('m3m').innerHTML = 'Парковка';
      document.getElementById('m4m').innerHTML = 'Автокафе';
      document.getElementById('m5m').innerHTML = 'Доставка';
      document.getElementById('m6m').innerHTML = 'Торжество';
      document.getElementById('m7m').innerHTML = 'Банкет';
      document.getElementById('m8m').innerHTML = 'Пицца';
      document.getElementById('m9m').innerHTML = 'Шаурма';
      document.getElementById('m10m').innerHTML = 'Шашлык';
      document.getElementById('m11m').innerHTML = 'Суши';
      document.getElementById('m12m').innerHTML = 'Живая музыка';
      document.getElementById('m13m').innerHTML = 'За городом';
      document.getElementById('m14m').innerHTML = 'Клуб';
      document.getElementById('m15m').innerHTML = 'Караоке';
      document.getElementById('m16m').innerHTML = 'Кальян';
      document.getElementById('m17m').innerHTML = 'Для компании';
      document.getElementById('m18m').innerHTML = 'Для детей';
    } else if (region == 2) {
      document.getElementById('t1t').innerHTML = 'Музей/Выставка';
      document.getElementById('t2t').innerHTML = 'Театр/Цирк';
      document.getElementById('t3t').innerHTML = 'Кино';
      document.getElementById('t4t').innerHTML = 'Аква/Зоопарк';
      document.getElementById('t5t').innerHTML = 'Туризм';
      document.getElementById('t6t').innerHTML = 'Квест';
      document.getElementById('t7t').innerHTML = 'Тир';
      document.getElementById('t8t').innerHTML = 'Катание';
      document.getElementById('t9t').innerHTML = 'Сауна/Баня';
      document.getElementById('t10t').innerHTML = 'Караоке';
      document.getElementById('t11t').innerHTML = 'Ночной клуб';
      document.getElementById('t12t').innerHTML = 'Прочее';

      document.getElementById('m1m').innerHTML = '24/7';
      document.getElementById('m2m').innerHTML = 'Бильярд';
      document.getElementById('m3m').innerHTML = 'Боулинг';
      document.getElementById('m4m').innerHTML = 'Видеоигры';
      document.getElementById('m5m').innerHTML = 'Комнаты';
      document.getElementById('m6m').innerHTML = 'Танцы';
      document.getElementById('m7m').innerHTML = 'Спорт';
      document.getElementById('m8m').innerHTML = 'Охота/Рыбалка';
      document.getElementById('m9m').innerHTML = 'Пейнтбол';
      document.getElementById('m10m').innerHTML = 'Гольф';
      document.getElementById('m11m').innerHTML = 'Каток';
      document.getElementById('m12m').innerHTML = 'Сноуборд/Лыжи';
      document.getElementById('m13m').innerHTML = 'Торжество';
      document.getElementById('m14m').innerHTML = 'Для детей';
      document.getElementById('m15m').innerHTML = 'Для взрослых';
      document.getElementById('m16m').innerHTML = 'Природа';
      document.getElementById('m17m').innerHTML = 'Экскурсии';
      document.getElementById('m18m').innerHTML = 'Экстрим';
    } else if (region == 3) {
      document.getElementById('t1t').innerHTML = 'Универмаг';
      document.getElementById('t2t').innerHTML = 'Супермаркет';
      document.getElementById('t3t').innerHTML = 'Гипермаркет';
      document.getElementById('t4t').innerHTML = 'Дискаунтер';
      document.getElementById('t5t').innerHTML = 'Бутик';
      document.getElementById('t6t').innerHTML = 'Торговый дом';
      document.getElementById('t7t').innerHTML = 'Гастроном';
      document.getElementById('t8t').innerHTML = 'Автоцентр';
      document.getElementById('t9t').innerHTML = 'Автозапчасти';
      document.getElementById('t10t').innerHTML = 'Зоомагазин';
      document.getElementById('t11t').innerHTML = 'Киоск/Ларек';
      document.getElementById('t12t').innerHTML = 'Прочее';

      document.getElementById('m1m').innerHTML = '24/7';
      document.getElementById('m2m').innerHTML = 'Электроника';
      document.getElementById('m3m').innerHTML = 'Техника';
      document.getElementById('m4m').innerHTML = 'Косметика';
      document.getElementById('m5m').innerHTML = 'Автозаправка';
      document.getElementById('m6m').innerHTML = 'Строительный';
      document.getElementById('m7m').innerHTML = 'Мебельный';
      document.getElementById('m8m').innerHTML = 'Бытовой';
      document.getElementById('m9m').innerHTML = 'Одежда';
      document.getElementById('m10m').innerHTML = 'Сэконд/Сток';
      document.getElementById('m11m').innerHTML = 'Канцелярия';
      document.getElementById('m12m').innerHTML = 'Дача и огород';
      document.getElementById('m13m').innerHTML = 'Здоровье и уход';
      document.getElementById('m14m').innerHTML = 'Книги';
      document.getElementById('m15m').innerHTML = 'Искусство';
      document.getElementById('m16m').innerHTML = 'Интернет';
      document.getElementById('m17m').innerHTML = 'Опт';
      document.getElementById('m18m').innerHTML = 'Инструмент';
    } else if (region == 4) {
      document.getElementById('t1t').innerHTML = 'Больница';
      document.getElementById('t2t').innerHTML = 'Госпиталь';
      document.getElementById('t3t').innerHTML = 'Диспансер';
      document.getElementById('t4t').innerHTML = 'Поликлиника';
      document.getElementById('t5t').innerHTML = 'Мед. часть';
      document.getElementById('t6t').innerHTML = 'Родильный дом';
      document.getElementById('t7t').innerHTML = 'Амбулатория';
      document.getElementById('t8t').innerHTML = 'Клиника';
      document.getElementById('t9t').innerHTML = 'Санаторий';
      document.getElementById('t10t').innerHTML = 'Аптека';
      document.getElementById('t11t').innerHTML = 'Частное';
      document.getElementById('t12t').innerHTML = 'Прочее';

      document.getElementById('m1m').innerHTML = 'Скорая помощь';
      document.getElementById('m2m').innerHTML = 'Хоспис';
      document.getElementById('m3m').innerHTML = 'Дом ребенка';
      document.getElementById('m4m').innerHTML = 'Донорство крови';
      document.getElementById('m5m').innerHTML = 'Мед. осмотр';
      document.getElementById('m6m').innerHTML = 'Онлайн талон';
      document.getElementById('m7m').innerHTML = 'Стоматология';
      document.getElementById('m8m').innerHTML = 'Косметология';
      document.getElementById('m9m').innerHTML = 'Массаж/Спа';
      document.getElementById('m10m').innerHTML = 'Процедуры';
      document.getElementById('m11m').innerHTML = 'Для женщин';
      document.getElementById('m12m').innerHTML = 'Для мужчин';
      document.getElementById('m13m').innerHTML = 'Для детей';
      document.getElementById('m14m').innerHTML = 'Пансионат';
      document.getElementById('m15m').innerHTML = 'Реабилитация';
      document.getElementById('m16m').innerHTML = 'Анализы';
      document.getElementById('m17m').innerHTML = 'Ветеринарная';
      document.getElementById('m18m').innerHTML = 'Бассейн';
    } else if (region == 5) {
      document.getElementById('t1t').innerHTML = 'Сад';
      document.getElementById('t2t').innerHTML = 'Школа';
      document.getElementById('t3t').innerHTML = 'Лицей';
      document.getElementById('t4t').innerHTML = 'Гимназия';
      document.getElementById('t5t').innerHTML = 'ПТУ';
      document.getElementById('t6t').innerHTML = 'Техникум';
      document.getElementById('t7t').innerHTML = 'Колледж';
      document.getElementById('t8t').innerHTML = 'Институт';
      document.getElementById('t9t').innerHTML = 'Университет';
      document.getElementById('t10t').innerHTML = 'Академия';
      document.getElementById('t11t').innerHTML = 'Частное';
      document.getElementById('t12t').innerHTML = 'Прочее';

      document.getElementById('m1m').innerHTML = 'Дополнительное';
      document.getElementById('m2m').innerHTML = 'Военное';
      document.getElementById('m3m').innerHTML = 'Клубы';
      document.getElementById('m4m').innerHTML = 'Лагерь';
      document.getElementById('m5m').innerHTML = 'Исскуство';
      document.getElementById('m6m').innerHTML = 'Танцы';
      document.getElementById('m7m').innerHTML = 'Для детей';
      document.getElementById('m8m').innerHTML = 'Для взрослых';
      document.getElementById('m9m').innerHTML = 'Спорт';
      document.getElementById('m10m').innerHTML = 'Авто';
      document.getElementById('m11m').innerHTML = 'Экскурсии';
      document.getElementById('m12m').innerHTML = 'Курсы';
      document.getElementById('m13m').innerHTML = 'Дневная';
      document.getElementById('m14m').innerHTML = 'Вечерняя';
      document.getElementById('m15m').innerHTML = 'Заочная';
      document.getElementById('m16m').innerHTML = 'Онлайн';
      document.getElementById('m17m').innerHTML = 'Специальное';
      document.getElementById('m18m').innerHTML = 'Библиотека';
    } else if (region == 6) {
      document.getElementById('t1t').innerHTML = 'Медицина';
      document.getElementById('t2t').innerHTML = 'Транспорт';
      document.getElementById('t3t').innerHTML = 'Недвижимость';
      document.getElementById('t4t').innerHTML = 'IT/Фриланс';
      document.getElementById('t5t').innerHTML = 'Дизайн';
      document.getElementById('t6t').innerHTML = 'Красота/Мода';
      document.getElementById('t7t').innerHTML = 'Полиграфия';
      document.getElementById('t8t').innerHTML = 'Образование';
      document.getElementById('t9t').innerHTML = 'Юр./Бух. услуги';
      document.getElementById('t10t').innerHTML = 'Уборка';
      document.getElementById('t11t').innerHTML = 'Строительство';
      document.getElementById('t12t').innerHTML = 'Прочее';

      document.getElementById('m1m').innerHTML = 'Юр. лицо';
      document.getElementById('m2m').innerHTML = 'Рассрочка';
      document.getElementById('m3m').innerHTML = 'Безнал';
      document.getElementById('m4m').innerHTML = 'Дистанционно';
      document.getElementById('m5m').innerHTML = 'Работа с текстом';
      document.getElementById('m6m').innerHTML = 'Организатор';
      document.getElementById('m7m').innerHTML = 'Аренда';
      document.getElementById('m8m').innerHTML = 'Универсал';
      document.getElementById('m9m').innerHTML = 'Коммуникации';
      document.getElementById('m10m').innerHTML = 'Ремонт';
      document.getElementById('m11m').innerHTML = 'Монтаж';
      document.getElementById('m12m').innerHTML = 'Фото/Видео';
      document.getElementById('m14m').innerHTML = 'Веб/Интернет';
      document.getElementById('m15m').innerHTML = 'Интерьер';
      document.getElementById('m13m').innerHTML = 'Тату/Татуаж';
      document.getElementById('m16m').innerHTML = 'Уход/Процедуры';
      document.getElementById('m17m').innerHTML = 'Стрижка/Окраска';
      document.getElementById('m18m').innerHTML = 'Животные';
    }
  } else {
    regionID.style.backgroundColor = '';
    pRegion = 0;
    document.getElementById('typse').style.display = 'none';
  }
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
    locateFirst();
  } else {
    window.scrollTo(0, 0);
    x.style.display = 'block';
    y.style.display = 'none';
  }
}
