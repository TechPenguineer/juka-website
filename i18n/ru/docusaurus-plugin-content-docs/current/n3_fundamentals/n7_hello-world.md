---
sidebar_position: 7
slug: /hello-world
---

# Написание вашего первого приложения

Давайте начнем с создания приложения "Hello World".

1. Создайте пустой файл и сохраните его как `HelloWorld.juk`.
2. В этом файле скопируйте и вставьте следующий код:

```jsx
func main() = {
  printLine("Привет мир");
}
```

3. Сохраните файл и выполните следующую команду:
```jsx
./juka HelloWorld.juk
```

Это позволит скомпилировать и запустить ваше приложение. Если все прошло хорошо, вы должны увидеть следующий вывод:

```jsx
Привет мир
```