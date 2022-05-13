# Front-end tools

## IDE

1. Выберите наиболее удобную для вас IDE для дальнейшей работы с кодом. Рекомендации: **WebStorm** или **VSCode**.
2. Изучите плагины, которые доступны для выбранной IDE. Установите те, которые вам потребуются.
3. Изучите возможности editorconfig, подготовьте и сохраните локально файл **.editorconfig**, настройте его как вам удобно.

----

Материалы:
- https://www.jetbrains.com/help/webstorm/installation-guide.html#standalone
- https://habr.com/ru/post/220131/
- https://editorconfig.org/

## Git

1. Изучите теоритические основы Git
2. Изучите наиболее используемые стратегии бранчевания, выберите одну и обсудите свой выбор с тренером
3. Изучите стандарт **Conventional Commits**, применяйте его при создании коммитов
4. Установите **git** вместе с **bash** терминалом
5. Настройте глобально в гите данные пользователя (имя и почту)
6. (опционально) Можете настроить SSH доступ к репозиторию в GitLab
7. Склонируйте ваш репозиторий из GitLab на локальный компьютер
8. Создайте ветку для работы в соответствии со стратегией бранчевания
9. Изучите работу с файлом .gitignore, настройте его и добавьте в свой локальный репозиторий, создайте коммит для этого изменения с помощью bash терминала
10. Добавьте в локальный репозиторий заготовленный файл .editorconfig, снова создайте коммит
11. Создайте структуру папок в корне репозитория для будущих задач, затем снова сделайте коммит:
```
    01-code-quality
    02-unit-testing
    03-webpack
    04-typescript
    05-js-words-sorting
    06-js-tag-object-model
    07-js-weather-service
    08-mvc-zombie-invasion
    09-oop-network
    10-react-todo-list
    11-angular-todo-list
```

12. Сделайте пуш рабочей ветки в удалённый репозиторий через bash терминал
13. Создайте Merge Request на GitLab из вашей рабочей ветки в целевую
14. Пройдите код ревью, получите **Approval** от тренера и сделайте **Merge**

Примечания:
- **Merge Request** часто называют **Pull Request**, это просто другое название
- Наличие таски в сторе означает, что для этой таски нужен мёрдж реквест. Если тасок в сторе нет, мёрдж реквест создавать не нужно (это не общее правило, только для этих курсов).
- Название каждого мёрдж реквеста должно быть таким же, как название соответствующей таски
- В описание каждого мёрдж реквеста копируйте описание задачи
- В дальнейшем тренер будет проводить код ревью всех мёрдж реквестов, оставляя комментарии. Все комментарии нужно обрабатывать - вносить исправления в код (если требуется), сообщать о результате, либо отвечать на вопросы. Если тренер видит в мёрдж реквесте свои комментарии, на которые нет ответа, то считает, что не все замечания обработаны и проверять ещё рано.
- При написании комментариев нажимать кнопку **Resolve thread** не нужно
- Используйте зелёные кнопки **Start a review**, **Add to review** и **Submit review**, когда пишите комментарии в мёрдж реквесте. Это позволит публиковать комментарии сразу всей группой - при необходимости можно успеть отредактировать что-то до публикации, и в почту не будут приходить лишние уведомления.
- Рекомендуется писать комментарии на английском языке

----

Материалы:
- [Документация Git](https://git-scm.com/book/ru/v2/Введение-Основы-Git)
- [Git за полчаса: руководство для начинающих](https://proglib.io/p/git-for-half-an-hour)
- https://learngitbranching.js.org/
- https://learn.javascript.ru/screencast/git
- [Стратегии бранчевания в Git](https://bool.dev/blog/detail/git-branching-strategies)
- [Как генерировать осмысленные коммиты. Применяем стандарт Conventional Commits](https://habr.com/ru/company/yandex/blog/431432/)
- https://githowto.com/ru
- [Работа с .gitignore](https://devacademy.ru/article/ignorirovanie-faylov-i-katalogov-v-git)
- [Правила синтаксиса файла .gitignore](https://support.rdb24.com/hc/ru/articles/115000463769-Правила-синтаксиса-файла-gitignore)
- [Инструменты Git - Раскрытие тайн reset](https://git-scm.com/book/ru/v2/Инструменты-Git-Раскрытие-тайн-reset)
- [Основы Git - Операции отмены](https://git-scm.com/book/ru/v2/Основы-Git-Операции-отмены#r_unstaging)

## Npm

1. Установите стабильную версию Node.js (попутно установится npm)
2. Создайте node-проект с помощью CLI в папке **01-code-quality**
3. Укажите различную информацию о проекте
4. Установите для этого проекта пакеты eslint и prettier, выбрав нужный тип зависимости
5. Найдите эти пакеты в npm-реестре (npmjs.com), прочитайте их описание
6. Подготовьте ветку, сделайте коммит, запуште изменения в GitLab и создайте Merge Request

----

Материалы:
- [Начало работы с Node.js](https://medium.com/devschacht/node-hero-chapter-1-239f7afeb1d1)
- [Использование NPM](https://medium.com/devschacht/node-hero-chapter-2-f04fec8182f0)
- [Руководство по Node.js, часть 4: npm, файлы package.json и package-lock.json](https://habr.com/ru/company/ruvds/blog/423703/)
- https://learn.javascript.ru/screencast/nodejs#nodejs-npm-intro
- https://learn.javascript.ru/screencast/nodejs#nodejs-npm-package
- https://learn.javascript.ru/screencast/nodejs#nodejs-npm-global
- https://semver.org/lang/ru/
- https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/
- https://www.freecodecamp.org/news/10-npm-tricks-that-will-make-you-a-pro-a945982afb25/
- https://www.freecodecamp.org/news/what-to-ask-yourself-before-adding-an-npm-package-to-your-project-6b92ba13070d/

## Code quality

1. Изучите теорию по качеству кода
2. Изучите стайл-гайд от **Airbnb**
3. Создайте файл bad-library.js (см. контент ниже) и поместите его в папку **01-code-quality**
4. Подготовьте ветку, сделайте коммит
5. Изучите пакеты **eslint** и **prettier**, сконфигурируйте их (с учётом стайл-гайда)
6. Добавьте команду для сборки, проверки и исправления кода в **package.json**
7. Проверьте работу ESLint и Prettier с помощью команд в терминале
8. Настройте IDE для работы с ESLint и Prettier (могут потребоваться специальные плагины/расширения)
9. Переименуйте файл bad-library.js в good-library.js
10. Сделайте рефакторинг в этом файле, чтобы улучшить качество кода, при этом следует учитывать:
    * нейминг
    * соответствие стиля кода гайду Airbnb
    * практики лучшего кода (Best Practice)
11. Сделайте ещё один коммит, запуште изменения и создайте Merge Request

----

Материалы:
- [Что такое качество кода и зачем его измерять](https://habr.com/ru/post/205342/)
- [Качество кода](https://habr.com/ru/company/oleg-bunin/blog/433326/)
- [Три ключевых принципа](https://habr.com/ru/post/144611/)
- [Советы по стилю кода](https://learn.javascript.ru/coding-style)
- [Ниндзя-код](https://learn.javascript.ru/ninja-code)
- [Комментарии](https://learn.javascript.ru/comments)
- [Руководство по написанию JavaScript-кода от Airbnb](https://github.com/leonidlebedev/javascript-airbnb)
- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
- https://eslint.org/
- https://prettier.io/

```javascript
// bad-library.js

import {books,categories} from "store.js";

var CONSTANTS={ 'FIRST' : 10 , 'LAST' : 20 }

import {authors} from "store.js"

export class library {
    constructor() {}

    getbook (ID){
        var options = arguments[1];
        if(ID<CONSTANTS.FIRST){ // first book
            return new Object();
        }
        else {
            if(ID>CONSTANTS.LAST) return {book : books[books.length-1]};
        }
        return {
            name: books[ID].name,
            price: books[ID].price,
            hasCategory : options.hasCategory,
            hasAuthor : authors.books[ID] != undefined ? true : IDoptions.hasAuthor
        };
    }
    getCategory(book_id) {

        var findCategory= id =>{
            for(var i=0; i<categories.length, ++i){
                if(categories[i].id== id || categories[i].hasBooks==true && categories[i].booksType=="main"){
                    return categories[i];
                }
                else {
                    return new Object();
                }
            }
        }

        var Category= findCategory (books[book_id][`categoryId`]) ;
        if(Category) {
            return {id: 'category_' + Category};
        }
        else {
            return new Object();
        }
    }
    showMessage (m){
        console.log( m );
    }
}
```

## DevTools

1. Залогиньтесь под своим аккаунтом в EPAM-сервисах
2. Зайдите на страницу time.epam.com
3. Откройте панель разработчика (рекомендуется Chrome браузер)
4. Проинспектируйте собственную аватарку и выпишите класс непосредственного контейнера изображения с аватаркой
5. Напишите, что произойдёт с аватаркой, если этот класс удалить
6. Напишите, что произойдёт с аватаркой, если её контейнеру установить позиционирование absolute
7. Удалите контейнер аватарки из DOM и напишите, как изменился вид страницы после его удаления
8. Откройте вкладку source и откройте файл App.js, находящийся по пути: time.epam.com/static/js/components/
9. Продебажьте строчку 94 этого файла: код внутри условия if(action !== 'REPLACE'). Для этого поставьте точку останова и обновите страницу в браузере
10. Напишите, чему будет равна переменная action в этом условии, будет ли выполняться код внутри условия или нет и почему
11. Продолжите дебаг кода с этой точки, напишите, с каким аргументом вызывается функция gaPathname
12. Напишите, какую роль выполняет код внутри функции gaPathname, для каких целей он написан и как удалось это выяснить
13. Добавьте комментарий к этой сторе со всеми вашими заметками

----

Материалы:
- https://learn.javascript.ru/devtools
- https://learn.javascript.ru/debugging-chrome
- https://developers.google.com/web/tools/chrome-devtools/
- https://umaar.com/dev-tips/

## Unit testing

1. Создайте npm-проект в папке **02-unit-testing** для работы с js-файлами и их юнит-тестирования
2. Установите **jest** для этого проекта
3. Создайте js-файл в папке проекта со следующим содержимым:

```javascript
   export class Calculator {
       constructor(shouldRoundFloor) {
           this.shouldRoundFloor = shouldRoundFloor;
       }
    
       sum() {
           return this.shouldRoundFloor ? Math.floor(a + b) : Math.ceil(a + b);
       }
    
       showResult(result) {
           console.log(result);
       }
    
       sumAndShowResult() {
           const result = this.sum(a, b);
           this.showResult(result);
       }
   }
```

4. В этой же папке создайте ещё один файл, в котором покройте класс *Calculator* юнит-тестами с помощью *jest*
5. Подготовьте ветку, сделайте коммит, запуште изменения в GitLab и создайте Merge Request

Материалы:
- [Автоматическое тестирование c использованием фреймворка Mocha](https://learn.javascript.ru/testing-mocha)
- [Как писать юнит тесты](https://java-master.com/%D0%BA%D0%B0%D0%BA-%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C-%D1%8E%D0%BD%D0%B8%D1%82-%D1%82%D0%B5%D1%81%D1%82%D1%8B/)
- https://jestjs.io/
- https://jestjs.io/docs/en/getting-started.html
- [Тестирование JavaScript кода с Jest](https://habr.com/ru/post/502302/)

## Webpack

1. Создайте проект в папке **03-webpack**
2. Установите webpack для этого проекта
3. Сконфигурируйте webpack, чтобы он поддерживал сборку **JS, CSS, sass/less, HTML, img**
4. Добавьте команду для сборки webpack в **package.json**
5. Запустите сборку командой, проверьте, что сборка прошла успешно
6. Создайте Merge Request с этим проектом

Примечание: эта конфигурация может вам потребоваться при выполнении других заданий.

----

Материалы:
- https://webpack.js.org/
- https://youtu.be/Tg8IVbvturM
- https://youtu.be/eSaF8NXeNsA

## TypeScript

1. Установите Typescript глобально на компьютер
2. Создайте проект в папке 04-typescript
3. Изучите основные опции для конфигурации и сгенерируйте tsconfig.json
4. Установите для проекта (локально) webpack, typescript и eslint (и другие пакеты при необходимости)
5. Настройте вебпак для сборки .ts файлов
6. Настройте ESLint для валидации .ts файлов
7. Отправьте изменения на GitLab и создайте Merge Request

----

Материалы:
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/docs/handbook/compiler-options.html
- https://webpack.js.org/guides/typescript/
- https://mikelow.dev/blog/how-to-keep-airbnb-eslint-config-in-typescript

## Postman

1. Скачайте Postman с официального сайта и установите на компьютер
2. Потренируйтесь отправлять GET запросы на любые сайты
3. Создайте коллекцию запросов
4. Экспортируйте коллекцию в JSON формате

----

Материалы:
- https://www.postman.com/
- [Введение в Postman](https://habr.com/ru/company/kolesa/blog/351250/)