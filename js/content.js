var myText = [{
    h2: 'Введение',
    p: [{
        h3: 'Введение в JavaScript',
        p: '1.Введение в JavaScript дает нам общее понятие о создании, общей истории и развити JavaScript'
    }, {
        h3: 'Справочники и спецификации',
        p: '2.Подраздел справочники и спецификации дает нам информацию о том, какие особенности у каких браузеров и где можно найти корректную документацию касаемо JavaScript'

    }, {
        h3: 'Редакторы для кода',
        p: '3.В пункте Редакторы для кода нам представляется возможность ознакомиться с редакторами кода и ссылками на оф. страницы для скачивания.'

    }, {

        h3: "Консоль разработчика",
        p: "4.Пункт Консоль разработчика в кратце рассказывает нам на что стоит обратить внимание при проверке кода через консоль."
    }]
}, {
    h2: "Основы JavaScript",
    p: [{

        h3: "Привет мир!",
        p: "В данной статье нас знакомяс с особенностями месторасположения тега script и корректным размещением коментариев и тд."

    }, {
        h3: "Внешние скрипты, порядок исполнения",
        p: "Данная статья обучает нас подключению внешних скриптов и корректирует нас в их особенностях и различиях при загрузке на страницу а так же рассказывает, как они непосредственно влияют на саму загрузку страницы"

    }, {
        h3: "Структура кода ",
        p: "Данная статья обучит нас как корректнее делать разметку кода, переносы и разбитие на строки"

    }, {
        h3: "Современный стандарт, use strict",
        p: "Use strict строка- дает нам возможность писать более современный код, но в то же время имеет свои особенности в использовании..."

    }, {
        h3: "Переменные",
        p: "На мой взгляд-одна из важнейших статей в данном разделе! Благодаря ей мы более детально поймем как работать с переменными, заполнять их информацией и использовать ее в будущем."

    }, {
        h3: "Правильный выбор имени переменной",
        p: "Правильный выбор имени переменных-одно из основных базовых  пониманий того, что в ней будет храниться либо для чего она может быть использована"

    }, {
        h3: "Шесть типов данных, typeof",
        p: "В данной статье нас в кратце ознакамливают с 5 основными примитивными  типами данных и обьектами"

    }, {
        h3: "Операторы",
        p: "Исходя из школьных программ все мы помним про математические елементы вычисления. Но в данной статье афтор открывает нам их новые возможности и раскрывает секреты использования в програмировании"

    }, {
        h3: "Условные операторы: if,?",
        p: "Данная статья обучает нас различиям методов использования операторов а так же дает нам возможность понять, как грамотно выстроить логическую цепочку действий при различных ответах(либо без них)."

    }, {
        h3: "Функции",
        p: "Данный ряд статей нам рассказывает о том, как грамотно создавать и использовать функции и с их помощью делать клиентскую сторону более динамичной."
    }]
}, {
    h2: "Качество кода",
    p: [{
        h3: "Отладка в chrome",
        p: "В данном пункте нам рассказывается о корректном тестировании кода, его шифровании и отладке в браузере. О том, куда стоит обратить внимание при работе с данным браузером."
    }, {
        h3: "Советы по стилю кода",
        p: "Мы переходим к стилю кода и его корректному написанию. В этом разделе нам предоставят таблицу со всеми нареканиями и замечаниями которые могут навредить нашему написанию кода и его формированию(дальнейшему использованию) на странице"
    }, {
        h3: "Как писать неподдерживаемый код?",
        p: "Для написания неподдерживаемого кода нужно усложнить его понятность для окружающих(уловки на эту тему указаны в данном разделе) а так же нам дается краткая екскурсия того, как этот код писать так, чтоб он был понятен только вам"
    }, {
        h3: "Автоматические тесты при помощи chai и mocha",
        p: "С данной главой я рекомендовал бы ознакомиться в начале своей деятельности как програмиста. Ведь писочницу можно использовать как тесты (которые гарантируют правильность кода),документацию по функциям и описанию их конкретных задач"
    }]
}, {
    h2: "Структуры данных",
    p: [{
        h3: "Введение в методы и свойства",
        p: "Все значения в JavaScript, за исключением null и undefined, содержат набор вспомогательных функций и значений, доступных «через точку». К примеру .length укажет нам длинну масива а str.toUpperCase() вернет строку в ВЕРХНЕМ РЕГИСТРЕ, num.toFixed(n) округлитель чисел в котором num-число а n количество цифр после запятой"
    }, {
        h3:"Числа",
        p:"Функции parseInt/parseFloat делают числа из строк, которые начинаются с числа, В JavaScript существует числовое значение бесконечность Infinity.\n" +
        "Ошибка вычислений дает NaN Есть четыре способа округления: Math.floor, Math.round, Math.ceil и битовый оператор. Для округления до нужного знака используйте +n.toFixed(p) или трюк с умножением и делением на 10p"
    },{
        h3:"Строки",
        p:"\\b\tBackspace\n" +
        "\\f\tForm feed\n" +
        "\\n\tNew line\n" +
        "\\r\tCarriage return\n" +
        "\\t\tTab" +
        "Методы toLowerCase() и toUpperCase() меняют регистр строки на нижний/верхний" +
        "Для поиска подстроки есть метод indexOf(подстрока[, начальная_позиция])"
    },{
        h3:"Обьекты как ассоциальные массивы",
        p:"Доступ к элементам осуществляется:\n" +
		"Напрямую по ключу obj.prop = 5\n" +
		"Через переменную, в которой хранится ключ\n" +
		"Удаление ключей: delete obj.name"
    },{
        h3:"Объекты: перебор свойств",
        p:"Цикл по ключам: for (key in obj)\n" +
		"Порядок перебора соответствует порядку объявления для нечисловых ключей, а числовые – сортируются (в современных браузерах)\n" +
		"Если нужно, чтобы порядок перебора числовых ключей соответствовал их объявлению в объекте, то используют трюк: числовые ключи заменяют на похожие, но содержащие не только цифры. Например, добавляют в начало +"
    },{
        h3:"Объекты: передача по ссылке",
        p:"Объект присваивается и копируется «по ссылке». То есть, в переменной хранится не сам объект а, условно говоря, адрес в памяти, где он находится.\n" +
		"Если переменная-объект скопирована или передана в функцию, то копируется именно эта ссылка, а объект остаётся один в памяти.\n" +
		"Это – одно из ключевых отличий объекта от примитива (числа, строки…), который при присвоении как раз копируется «по значению», то есть полностью."
    },{
        h3:"Массивы с числовыми индексами",
        p:"length – длина массива. Если точнее, то последний индекс массива плюс 1. Если её уменьшить вручную, то массив укоротится. Если length больше реального количества элементов, то отсутствующие элементы равны undefined \n" +
		"arr.push(элемент1, элемент2...) добавляет элементы в конец. \n" +
		"var elem = arr.pop() удаляет и возвращает последний элемент \n" +
		"arr.unshift(элемент1, элемент2...) добавляет элементы в начало. \n" +
		"var elem = arr.shift() удаляет и возвращает первый элемент \n" +
		"Эти операции перенумеровывают все элементы, поэтому работают медленно"
    },{
        h3:"Массивы: методы",
        p:"push/pop, shift/unshift, splice – для добавления и удаления элементов.\n" +
		"join/split – для преобразования строки в массив и обратно.\n" +
		"slice – копирует участок массива.\n" +
		"sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.\n" +
		"reverse – меняет порядок элементов на обратный.\n" +
		"concat – объединяет массивы.\n" +
		"indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).\n" +
		"Дополнительно: Object.keys(arr) возвращает массив свойств объекта."
    },{
		h3:"Массив: перебирающие методы",
		p:"forEach – для перебора массива.\n" +
		"filter – для фильтрации массива.\n" +
		"every/some – для проверки массива.\n" +
		"map – для трансформации массива в массив.\n" +
		"reduce/reduceRight – для прохода по массиву с вычислением значения."
	},{
		h3:"Псевдомассив аргументов "arguments"",
		p:""
	},{
		h3:"",
		p:""
	},{
		h3:"",
		p:""
	},{
		h3:"",
		p:""
	},{
		h3:"",
		p:""
	}]
}, {
    h2: "Замыкания",
    p: "Данная глава открывает нам новые возможности функций (в частности замыкания), и рассказывает, как можно использовать разные функии внутри функций а так же как повысить их функциональность и как управлять памятью"
}, {
    h2: "Методы объектов",
    p: "В данном разделе мы узнаем о новом виде функций-конструкторах. Нам пишут о том, как отличить их в обычном коде(написание с большой буквы). Также мы узнаем о различных методах(статических/фабричных) с кратким описанием их функционала и мер использования."
}, {
    h2: "другие возможности",
    p: "Этот раздел знакомит нас с такими функциями как setTimeout и setInterval которые позволяют управлять нам временем выведения результатов и не только. Так же ассказывается о преобразователях в строку и обратно на основе json"
}, {
    h2: "ООП в функциональном стиле",
    p: "Данные статьи дают нам краткое понятие о таких функциях как гетер и сетер. Которые выполняют такие действия как - геттер возвращает значение, сеттер – устанавливает"
}, {
    h2: "ООП в прототипном стиле"
}, {
    h2: "Современные возможности ES-2015",
    p: "Современные возможности ES-2015"
}
];

//myCode
var li = document.querySelectorAll("li");
var contentBarContainer = document.querySelector("#contentBar");

for (var i = 0; i < li.length; i++) {
    (function (a, iterator) {
        a.onclick = function () {
            /**
             * Clear element before appending new child
             */
            while (contentBarContainer.firstChild) {
                contentBarContainer.removeChild(contentBarContainer.firstChild);
            }
            var fragment = document.createDocumentFragment();
            createHtmlAssembly(myText[iterator], fragment);
            if (Array.isArray(myText[iterator].p) === true) {
                for (var alternative = 0; alternative < myText[iterator].p.length; alternative++) {
                    createHtmlAssembly(myText[iterator].p[alternative], fragment);
                }
            }
            contentBarContainer.appendChild(fragment);
        }
    }(li[i], i));
};
function createHtmlElement (tag, text) {
    var elem = document.createElement(tag);
    elem.innerHTML = text;
    return elem;
};
function createHtmlAssembly (tagName, fragment) {
    for (elem in tagName) {
        if (Array.isArray(tagName[elem]) === false) {
            fragment.appendChild(createHtmlElement(elem, tagName[elem]));
        }
    };
};
