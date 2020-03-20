<h1><a href="https://www.youtube.com/playlist?list=PL4rYLeYunVf0q7eb6B43jVlLZ5X1KZvky" alt="youtube уроки">Смотреть
    полный курс</a></h1>

<p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320"
                                                     alt="Nest Logo"/></a>
</p>

<h2>Настройка проекта</h2>
<p>Скорее всего тебе нужен API для работы со своим любимым frontend фреймворком</p>
<ul>
    <li>Angular</li>
    <li>Vuejs</li>
    <li>Ractjs</li>
    <li>Knokoutjs (Как это сюда попало?)</li>
</ul>
<p>По этому я собрал инструкцию по установки для самых маленьких</p>

<ol>
    <li>
        <h3>установить nestjs глобально (нужен <a href="https://nodejs.org/en/download/">npm, nodejs</a>)</h3>
        <p><a href="https://docs.nestjs.com/">Официальная документация</a></p>
        <p><strong>npm i -g @nestjs/cli</strong></p>
    </li>
    <li>
        <h3>установить проект из репозитория (нужен <a href="https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git">git</a>)</h3>
        <p><a href="https://github.com/MaksymGrom/nest-todo-api">https://github.com/MaksymGrom/nest-todo-api</a></p>
        <p><strong>git clone https://github.com/MaksymGrom/nest-todo-api.git backend</strong></p>
        <p><strong>cd backend</strong></p>
    </li>
    <li>
        <h3>скопировать файл ormconfig.json.sample как ormconfig.json</h3>
        <p><strong>указать свои настройки БД</strong></p>
    </li>
    <li>
        <h3>запустить сервер mysql я это делаю через <a href="https://www.youtube.com/watch?v=_E81YkUnxSM">xampp</a></h3>
    </li>
    <li>
        <h3>добавить новую БД и записать ее название в конфиг</h3>
    </li>
    <li>
        <h3>запустить в терминале</h3>
        <p>npm install</p>
        <p>npm start</p>
    </li>
    <li>
        <h3>открыть документацию проекта</h3>
        <p><a href="http://localhost:3000/swagger">Документация</a></p>
        <p>npm start</p>
    </li>
    <li>
        <h3>создаем пару записей через swagger</h3>
        <pre>
            { "title": "Подпишись на канал WebDev. GromMax" }
            { "title": "Поделись этим видео с друзьями" }
            { "title": "Поставь колокольчик" }
            { "title": "Оставь комантарий более 5 слов :) Чтобы ты помог ютубу понять что видео стоит рекомендовать" }
        </pre>
    </li>
    <li>
        <h3>Установи свой любимый frontend framework. Все что нужно есть в swagger</h3>
    </li>
</ol>
