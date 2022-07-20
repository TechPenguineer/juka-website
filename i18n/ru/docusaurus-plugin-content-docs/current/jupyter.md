---
sidebar_position: 29
---

# Забери Juka в Юпитере

Если вы ученый или аналитик, то вы, вероятно, слышали о Юпитере и использовали Юпитер.

Обычно Jupyter используется для запуска кода Python. Однако, он может быть использован для многих других языков.

Мы создали Juka_kernel который позволяет Juka общаться с Юпитером .

Сначала вам нужно скачать Juka (https://jukalang.com/download) Если, загрузил добавление Juka в путь.

В Windows вам рекомендуется следовать шагам, описанным на https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

В Linux/Unix/MacOS (bash): Предположим, что мы хранили Juka в /usr/bin/share/Juka, мы запускаем следующую команду:
```jsx
$ path для экспорта = "/usr/bin/share/Juka:$PATH
```
Это добавит Juka в PATH

ПРИМЕЧАНИЕ: Возможно, потребуется перезапустить терминал. Рекомендуется также перезагрузить компьютер.

Далее, вам нужно будет установить jupyter. Пожалуйста, выполните шаги описанные на https://jupyter.org/install если вы этого не сделали.

Далее вы можете установить Juka_kernel из PyPi, запустив
```jsx
pip install juka_kernel
```
или установите его непосредственно из исходного кода, загрузив от: https://github.com/jukaLang/juka_kernel и запустив:
```jsx
python -m juka_kernel.install 
```
в папке ядра.

## Использование ядра Juka

**Примечание**: Меню *Новый* в блокноте должно показывать опцию для ноутбука Джука.

**Консольные фронтэнды**: Чтобы использовать их в консольных фронтах, добавьте `--kernel juka` в их аргументы командной строки.

### Что делать, если новая версия Juka пришла?
Если выйдет новая версия Juka, вам не нужно обновлять или обновлять juka_kernel (если мы не делаем больших изменений в ядро). Все, что вам нужно сделать, это заменить файлы в Juka PATH. Вот и все! Это упрощает обновление Juka без необходимости удаления и переустановки ядра

## Технические детали
Ядро Juka написано на Python и служит мостом между Юпитером и Джукой. Он не компилирует и не запускает код Juka. просто служит протоколом обмена сообщениями.

Если вы хотите внести свой вклад в Juka_kernel, смотрите https://github.com/juka/juka_kernel