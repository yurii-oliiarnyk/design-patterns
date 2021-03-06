## Суть патерна

**Фабрика** — це породжувальний патерн проектування, який визначає загальний інтерфейс для створення об’єктів у суперкласі, дозволяючи підкласам змінювати тип створюваних об’єктів.

## Проблема

Уявіть, що ви створюєте програму керування вантажними перевезеннями. Спочатку ви плануєте перевезення товарів тільки вантажними автомобілями. Тому весь ваш код працює з об’єктами класу **Вантажівка**.

Згодом ваша програма стає настільки відомою, що морські перевізники шикуються в чергу і благають додати до програми підтримку морської логістики.

Чудові новини, чи не так?! Але як щодо коду? Велика частина існуючого коду жорстко прив’язана до класів **Вантажівок**. Щоб додати до програми класи морських **Суден**, знадобиться перелопачувати весь код. Якщо ж ви вирішите додати до програми ще один вид транспорту, тоді всю цю роботу доведеться повторити.

У підсумку ви отримаєте жахливий код, переповнений умовними операторами, що виконують ту чи іншу дію в залежності від вибраного класу транспорту.

## Рішення

Патерн Фабричний метод пропонує відмовитись від безпосереднього створення об’єктів за допомогою оператора **new**, замінивши його викликом особливого фабричного методу. Не лякайтеся, об’єкти все одно будуть створюватися за допомогою **new**, але робити це буде фабричний метод.

---

[Детальніше](https://refactoring.guru/uk/design-patterns/factory-method)
