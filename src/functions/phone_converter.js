export default function formatPhoneNumber(phone) {
    // Перевіряємо, чи номер починається з +380
    if (phone.startsWith("+380") && phone.length === 13) {
        // Розбиваємо номер на частини
        const countryCode = "+380";
        const operatorCode = phone.slice(4, 6);
        const part1 = phone.slice(6, 9);
        const part2 = phone.slice(9, 11);
        const part3 = phone.slice(11,13);

        // Формуємо новий формат
        return `${countryCode}-(${operatorCode})-${part1}-${part2}-${part3}`;
    } else {
        // Якщо формат не відповідає очікуваному, повертаємо повідомлення про помилку
        return "Неправильний формат номера";
    }
}

// Приклад використання функції
const phone = "+380989578520";
const formattedPhone = formatPhoneNumber(phone);
console.log(formattedPhone);  // Виведе: +38-(098)-057-85-20