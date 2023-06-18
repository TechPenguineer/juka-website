---
sidebar_position: 2
---

# Архитектура

## Структура папок

Код Juka сгруппирован в следующие папки:

* **./examples** - Эта папка содержит примеры кода Juka.
* **./src/JukaCompiler** - Эта папка содержит ядро компилятора Juka.
* **./src/JukaAzureFunction** - Эта папка содержит код для запуска Juka Azure функций на Azure Cloud Server.
* **./src/JukaNetwork** - Эта папка содержит код сети Juka, которая является блокчейн сети для хранения и управления пакетами.
* **./src/JukaUnitTest** - Эта папка содержит модульные тесты для компилятора Джуки.
* **./src/Juka** - В этой папке содержится код интерфейса Juka (скоро).

## Визуальная студия/Требования к разработке

Для разработки и запуска Juka, вам потребуется следующее:

* Последняя версия Visual Studio.
* Следующие пакеты Visual Studio:
  * Разработка Azure
  * .NET разработка рабочего стола

## Рунтайм

Для запуска кода Juka использует следующую схему:

![Макет](/img/Runtime.png)

Компилятор Juka компилирует код Juka в библиотеку .NET .dll. Эта библиотека может быть использована в любом проекте C#, включая Xamarin/MAUI для создания приложений iOS/Android, и в основном используется для создания кросс-платформенных приложений для Mac/OS, Windows приложений и настольных приложений Windows.

Код работы Juka Azure используется для запуска Juka Azure функций на Azure Cloud Server.

Juka - это блокчейн сети для хранения и управления пакетами. Он используется как децентрализованный менеджер пакетов.

Установленные модульные тесты используются для тестирования Джуки.

Juka GUI — графический интерфейс для Juka, который в настоящее время находится в разработке.

## Примечания

* Джука все еще находится в разработке, поэтому некоторые функции могут быть недоступны.
* Если у вас есть вопросы или обратная связь, пожалуйста, свяжитесь с нами.