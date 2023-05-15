---
sidebar_position: 6
slug: /packagemanager
---

# Менеджер пакетов (ПОЛУЧЕНО в FAVOR OF DEFAULT)

<h1>📖 Содержание</h1>

- [**Что такое JLDN?**](#about)
- - [**Что такое цель?**](#used-for)
- - [**Как работает децентрализованная сеть?**](#how-our-decentralized-network-works)
- [**Что такое файл `manifest.yaml`?**](#manifest-file)
- - [**формат файла манифеста**](#manifest-format)
- [**Почему установленные библиотеки зашифрованы?**](#encryption)
- [**Что такое команды?**](#usage)
- - [**Установить пакет**](#install-usage)
- - [**Bump версии**](#bump-usage)

# О программе

## Используется для

**JLDN** это менеджер пакетов, созданный и поддерживаемый организацией языка Джука. Он позволяет пользователям создавать, публиковать и использовать библиотеки. _Например_ если вы создавали веб-сервер, вместо того, чтобы пересоздать весь протокол https вы можете установить библиотеку juka, которая дает вам прочную основу.

## Как работает децентрализованная сеть

Наша децентрализованная сеть – это то, как JLDN может получать данные о пакетах. Сюда входят содержимое библиотек. Мы доставляем данные прямо из GitHub и делаем их проще и быстрее для получения пакетов.

# Файл манифеста

Файл `manifest.yaml` используется для спецификации пакета. Сюда входит текущая версия, описание и содержание.

## Формат манифеста

Манифест формируется следующим образом:

```yaml
версия: 0.0.1
package_name: name
package_description: descr
library_directory: lib
main_repo_branch: основная
repo_name: JLDN
repo_author_name: jukaLang
```

# Шифрование

Мы используем зашифрованное решение при установке пакетов из **JLDN**. Поскольку основной целью Juka является шифрование скорости выполнения является самый быстрый способ выполнения Juka.

# Использование

## Установить использование

_Устанавливает пакет с помощью децентрализованной сети_

```bash
jldn установить {git_repo_author} {git_repo} {branch} { FLAGS }
```

Флаги:

'-nm' - указывает, что репозиторий не содержит файла манифеста и все равно вы хотите установить

'--force' - перезаписать имя пакета, если оно уже существует

## Использование кусков

_Возвращает к указанной версии ***JLDN****

```bash
гребень {service} {version}
```

Услуги:

**JLDN**

**Juka**

Флаги:

**НЕТ ПРОДАЖИ ДЛЯ ЭТОЙ КОМАНДЫ**

# Как установить

## Окна

Чтобы установить в Windows, просто установите 'win_installer.exe' и все остальное будет автоматизировано! Этот файл можно найти в списке релизов.

## Linux

_Скоро_