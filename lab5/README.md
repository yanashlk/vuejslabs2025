# lab5

---

## Структура лендінгу (всі реалізовані секції)

Лендінг складається з таких блоків:

### Header
- Фіксований хедер із ефектом затемнення при скролі
- Модальне вікно входу, реалізоване через Teleport та Transition

### Hero секція
- Великий банер з текстом, кнопками, зображенням
- Адаптивна верстка

### “Проблема – Рішення”
- Два блоки: опис проблеми та блок рішення з hover-ефектом

### “Переваги”
- Грід із картками переваг

### “Тарифи / Плани”
- Три тарифи (Basic, Team, Pro) у PrimeVue Card
- Активний тариф підсвічується
- Міні-калькулятор вартості (InputNumber + computed)

### Блок “Отримайте знижку 10%”
- Окремий акцент-блок із промокодом `CLEANLY2025`.
- При кліку промокод копіюється у буфер обміну.
- Використано плагін [CopyToClipboardPlugin](./src/plugins/CopyToClipboardPlugin.js) та **PrimeVue Toast** для повідомлення про успіх

### “Відгуки”
- Кастомний свайпер/слайдер з drag-подіями
- Адаптивний режим: 1 / 2 / 3 картки
- Навігація стрілками

### FAQ
- Список питань/відповідей у стилі аккордеону

### Контактна форма
- Поля:
  - Ім’я
  - Email
  - Телефон (UA)
  - Повідомлення (необов’язкове)
  - Checkbox “Політика конфіденційності”
- Валідація через **Zod**.
- Використано PrimeVue компоненти: InputText, Textarea, Button, Checkbox

### Footer
- Лого + навігація + соціальні мережі
- Кнопка копіювання email через плагін [CopyToClipboardPlugin](./src/plugins/CopyToClipboardPlugin.js)
- Компактний, адаптивний, з анімаціями
---
## Використані компоненти PrimeVue

### **Основні компоненти**

| Компонент     | Де використано                               |
|---------------|-----------------------------------------------|
| `Card`        | Тарифи, Відгуки                               |
| `InputText`   | Контактна форма                               |
| `Textarea`    | Контактна форма                               |
| `InputNumber` | Міні-калькулятор тарифів                      |
| `Checkbox`    | Контактна форма                               |
| `Button`      | Header, Hero, Тарифи, Контакти                |
| `InputMask`   | Телефон (опційно)                             |
| `Toast`       | Плагін CopyToClipboard                        |
| `ToastService`| Підключений глобально для показу Toast-повідомлень |

---
## Налаштування PrimeVue

У проєкті використано PrimeVue разом із темою **Aura**.  
Підключення здійснюється в `main.js`:

```js
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura'

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.component('Card', Card)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('Button', Button)
app.component('InputNumber', InputNumber)

app.use(ToastService)

```
---
## Плагін CopyToClipboardPlugin

### Файл:
[CopyToClipboardPlugin](./src/plugins/CopyToClipboardPlugin.js)

Плагін відповідає за універсальне копіювання тексту в буфер обміну

###  Підключення 
Плагін підключається `main.js`
```js
import CopyToClipboardPlugin from './plugins/CopyToClipboardPlugin'

app.use(CopyToClipboardPlugin)
```
## Де використовується CopyToClipboardPlugin (3 сценарії)

### 1. **Промокод (PromoCode.vue)**
У блоці “Отримайте знижку 10%” реалізоване копіювання промокоду:
``CLEANLY2025``  
Після успішного копіювання показується Toast-повідомлення 

---


### 2. **Контактна форма — копіювання email (Contact.vue)**
Реалізовано копіювання службового email компанії:
``support@cleanly.pro``  
Після копіювання користувач бачить Toast-повідомлення **“Email скопійовано!”**.

---

Загалом плагін працює універсально, тому може бути використаний у будь-якій частині застосунку
