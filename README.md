# perveslo
pereveslo.pl.ua ответы, pereveslo ответы, pereveslo.pl.ua відповіді, pereveslo відповіді

Для того что бы получить ответы откройте консоль брпузера и введите: 
"
var answers = []
Object.values(Object.values(qmn_quiz_data)[0].question_list).forEach(e => {e.answers.forEach(i => {if(i[2] == 1) answers.push(i[0])})})
Array.from(document.getElementsByTagName('label')).forEach(e => {if(answers.indexOf(e.innerText) != -1){e.style.color = 'red'}})
"
После чего все верные ответы станут выделенными

Илим же 
"
Object.values(Object.values(qmn_quiz_data)[0].question_list).forEach(e => {e.answers.forEach(i => {if(i[2] == 1) console.log(i[0])})})
"
После чего все верные ответы будут выведены в консоль
