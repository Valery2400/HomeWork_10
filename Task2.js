// Создайте функцию, которая бы принимала бы следующие параметры:
// код погоды
// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.
// Таблица соответствия код-описание:
// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)
// Подсказка: удобно использовать в одном из методов switch-case:

const weatherForecast = (weatherCode) => {
    
    const decode =(weatherCode)=>{
        
    switch (weatherCode) {
        case SQ:
            console.log("шквал");
        case PO:
            console.log("пыльный вихрь");
        case FC:
            console.log("торнадо");
        case BR:
            console.log("дымка (видимость от 1 до 9 км)");
        case HZ:
            console.log("мгла (видимость менее 10 км)");
        case FU:
            console.log("дым (видимость менее 10 км)");
        case DS:
            console.log("пыльная буря (видимость менее 10 км)");
        case SS:
            console.log("песчаная буря (видимость менее 10 км)");
         default:
            console.log("неизвестный код или замечательная погода");
        }

    }
        return decode;

}
weatherForecast("77")
