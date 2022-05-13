# Network communications

## HTTP

1. Изучить теорию по компьютерным сетям
2. Изучить архитектурный подход REST
3. Изучить теорию по HTTP

Материалы:
- [Основы компьютерных сетей. Основные сетевые термины и сетевые модели](https://habr.com/ru/post/307252/)
- [What computer networks are](https://www.freecodecamp.org/news/computer-networks-and-how-to-actually-understand-them-c1401908172d/)
- [Как работают сети (видео)](https://youtu.be/k_0BAtyaDio)
- [REST (wikipedia)](https://ru.wikipedia.org/wiki/REST)
- [Обзор протокола HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Overview)
- [Методы HTTP запроса](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods)
- [Простым языком об HTTP](https://habr.com/ru/post/215117/)
- [HTTP. The polite parts. Techtalk](https://videoportal.epam.com/video/VRgD4GJ2)
- [Зачем нужен HTTP/2 для сайтов](https://habr.com/ru/company/webo/blog/300794/)

## AJAX

1. Изучите теорию по fetch
2. Изучите теорию по XMLHttpRequest

Материалы:
- [Fetch](https://learn.javascript.ru/fetch)
- [Введение в fetch](https://habr.com/ru/post/252941/)
- [Fetch: ход загрузки](https://learn.javascript.ru/fetch-progress)
- [Fetch API](https://learn.javascript.ru/fetch-api)
- [Кроссдоменные запросы](https://learn.javascript.ru/fetch-crossorigin)
- [Fetch: прерывание запроса](https://learn.javascript.ru/fetch-abort)
- [XMLHttpRequest](https://learn.javascript.ru/xmlhttprequest)
- [XMLHttpRequest - Поля объекта](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest)
- [Объект XMLHttpRequest](https://metanit.com/web/javascript/13.1.php)
- [Возобновляемая загрузка файлов](https://learn.javascript.ru/resume-upload)

## Express.js

1. Изучите возможности пакета Express.js
2. Реализуйте серверную часть Системы службы доставки, используя Node.js и Express.js

----

✅ Task 09.10: Серверная часть Службы доставки

Переработать Систему службы доставки так, чтобы данные хранились в базе данных на сервере и обмен данными происходил по HTTP:
- Система должна работать в собственной Node.js среде (бэкенд часть)
- Пользователи должны обращаться к серверу используя приложения в браузере (фронтенд часть)
- Для хранения данных использовать простые аналоги базы данных для Node.js (например, simple-json-db)
- Обмен сообщениями в чате в этой задаче реализовывать не нужно, т.е. чат оставить нерабочим 
- В реализации серверной части использовать: Typescript, Node.js, Express.js
   
Папка для задачи: **09-oop-delivery-system**

----

Материалы:
- [expressjs.com](https://expressjs.com/ru/)
- [Express, минималистичный веб-фреймворк для приложений Node.js](https://expressjs.com/ru/)

## WebSocket

1. Изучите теорию по протоколу WebSocket
2. Реализуйте работу чата используя WebSocket

----

✅ Task 09.11: Чат для Службы доставки

Реализовать чат для обмена сообщениями между Заказчиком и Курьером используя имеющуюся бэкенд и фронтенд части Службы доставки с помощью WebSocket.

Папка для задачи: **09-oop-delivery-system**

----

Материалы:
- [WebSocket](https://learn.javascript.ru/websocket)
- [Разница между WebSocket, Socket, Http](https://russianblogs.com/article/3438220188/#WebSocketSocket_33)
- [Простой WebSocket-сервер на Node.JS](https://habr.com/ru/post/546758/)
- [Как использовать Websocket на примере простого Express API](https://habr.com/ru/post/516334/)