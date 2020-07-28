# Готовая сборка webpack 


В ней есть оптимизация и минимизация:

1. JavaScript (babel)
2. SCSS
3. HTML
4. Сжатие картинок
5. **Проверка кода ESLint**
6. Webpack-dev-server 
7. Поддержка **jest** с покрытием кода


----

**если нужна улучшенаая сборка, то она тут**
[https://github.com/abyss-soft/webpack-template-base ](https://github.com/abyss-soft/webpack-template-base ) 

**если нужна сборка с шаблонизатором Pug, то она тут**
[https://github.com/abyss-soft/webpack-template-base_Pug](https://github.com/abyss-soft/webpack-template-base_Pug) 

**если нужна простая сборка с gulp 4.0, то она тут**
[https://github.com/abyss-soft/gulp4-html](https://github.com/abyss-soft/gulp4-html) 

**если нужна простая сборка с gulp 3.9, то она тут**
[https://github.com/abyss-soft/gulp-html](https://github.com/abyss-soft/gulp-html) 


----



## Установка

Клонируем к себе репозиторий 

#### Сделайте `git clone`

#### Смените директорию `cd webpack`

#### Запустите: ` npm install`



***Для разработки:***

 *1. ставим в файле .env переменную APP_ENV=dev*

 *2. даем команду npm run dev*

 *http://localhost:8080/*

 *Получаем комфортную среду для отладки, есть карты кода (source maps)*



***Для продакшена:***

даем команду *npm run prod*

или

 *1. ставим в файле .env переменную APP_ENV=prod*

 *2. даем команду npm run build*

Получаем минимизированный / сжатый код

 

***Для проведения теста:***

  *npm run test*

в папке проекта появится /coverage/index.html – это полная сводка покрытия вашего кода (HTML) 



***Для проверки правильности кода:***

  *npm run lint*
