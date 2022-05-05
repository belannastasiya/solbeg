<script>
let xlsxName = "EM_AssetSummaryReport_05-04-2022"; // имя файла
let newName = xlsxName.substr(0, 22); //забрали часть которая не меняется
let fullDate = new Date(); // получили в переменную текущую дату в формате Thu May 05 2022 00:04:10 GMT+0300 (Москва, стандартное время)
let day = fullDate.getDay() + 1;  // забираем дату т.к. считаем с 0 то делаем +1
let month = fullDate.getMonth() +1; // забираем месяц т.к. считаем с 0 то делаем +1
if (day < 10) {
day = "0" + day};	// дату и месяц он отдаёт 1 цифрой, в искомом формате 05 и 04 соответственно если дата и месяц < 10 надо добавить 0 перед значением
if (month < 10) {
month = "0" + month};
let nowDate= month + "-"+ day +"-"+ fullDate.getFullYear(); // Собираем дату с необходимыми разделительными символами
newName = newName + nowDate; // собираем итоговое новое имя файла
console.log(newName);
</script>