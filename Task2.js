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

const weatherForecast = (weatherCode,decode()) => {
    
    const decode =(weatherCode)=>{
        
    switch (weatherCode) {
        case SQ:
            descriptionWeather ="шквал";
        case PO:
            descriptionWeather ="пыльный вихрь";
        case FC:
            descriptionWeather ="торнадо";
        case BR:
            descriptionWeather ="дымка (видимость от 1 до 9 км)";
        case HZ:
            descriptionWeather ="мгла (видимость менее 10 км)";
        case FU:
            descriptionWeather ="дым (видимость менее 10 км)";
        case DS:
            descriptionWeather ="пыльная буря (видимость менее 10 км)";
        case SS:
            descriptionWeather ="песчаная буря (видимость менее 10 км)";
         default:
            descriptionWeather ="замечательная погода";
        }

    }
        return decode,descriptionWeather;

}

