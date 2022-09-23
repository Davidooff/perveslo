var answers = []
Object.values(Object.values(qmn_quiz_data)[0].question_list).forEach(e => {e.answers.forEach(i => {if(i[2] == 1) answers.push(i[0])})})
Array.from(document.getElementsByTagName('label')).forEach(e => {if(answers.indexOf(e.innerText) != -1){e.style.color = 'red'}})