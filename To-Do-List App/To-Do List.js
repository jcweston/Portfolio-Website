let taskArr = []
let listCount = 1
const sort = document.getElementById('sort')
const inputButton = document.getElementById('input button')
const clearButton = document.getElementById('clear list')

function save() {
    let storageArr = []
    for (let i = 0; i < taskArr.length; i++) {
        let id=document.getElementById(taskArr[i][0])
        if (id.className=='strike') {
            taskArr[i][1]='finished'
        }
        else {
            taskArr[i][1]='unfinished'
        }
        storageArr.push(taskArr[i].join('@@'))
    }
    storageArr=storageArr.join('~~')
    localStorage.setItem('taskArr',storageArr)
}

if (localStorage.length>0) {
    taskArr = localStorage.getItem('taskArr').split('~~')
    for (let i = 0; i < taskArr.length; i++) {
        taskArr[i]=taskArr[i].split('@@')
    }
}

for (let i = 0; i < taskArr.length; i++) {
    let input = taskArr[i][0]
    let list = document.getElementById('list one')
    let newItem = document.createElement('li')
    newItem.innerText=(input)
    newItem.setAttribute('id',input)
    if (taskArr[i][1]=='unfinished') {
        newItem.setAttribute('class','normal')
    }
    else {
        newItem.setAttribute('class','strike')
    }
    newItem.style.order=listCount
    listCount++
    list.appendChild(newItem)
    newItem.addEventListener('click',()=>{
            if (newItem.className=='normal'){
                newItem.className='strike'
            }
            else {
                newItem.className='normal'
            }
            save()
        })
}

inputButton.addEventListener('click',()=>{
    let input = document.getElementById('input one')
    let list = document.getElementById('list one')
    if (input.value!='') {
        let newItem = document.createElement('li')
        newItem.innerText=(input.value)
        newItem.setAttribute('id',input.value)
        newItem.setAttribute('class','normal')
        newItem.style.order=listCount
        listCount++
        list.appendChild(newItem)
        taskArr.push([input.value,'unfinished'])
        newItem.addEventListener('click',()=>{
                if (newItem.className=='normal'){
                    newItem.className='strike'
                }
                else {
                    newItem.className='normal'
                }
                save()
            })
        input.value=''
        save()
    }
})

sort.addEventListener('click', ()=>{
    for (let i = 0; i < taskArr.length; i++) {
        let task=document.getElementById(taskArr[i][0])
        if (task.className=='strike') {
            taskArr[i][1]='finished'
        }
        else {
            taskArr[i][1]='unfinished'
        }
    }
    function strikeCompare(a,b) {
        let compA=a[1]
        let compB=b[1]
        if (compA<compB) {
            return 1
        } else if (compA>compB) {
            return -1
        }
        else {
            return 0
        }
    }
    function compare(a,b) {
        let compA=a[0]
        let compB=b[0]
        if (compA>compB) {
            return 1
        } else if (compA<compB) {
            return -1
        }
        else {
            return 0
        }
    }
    taskArr.sort(compare)
    taskArr.sort(strikeCompare)
    for (let i = 0; i < taskArr.length; i++) {
        let task=document.getElementById(taskArr[i][0])
        task.style.order=i
    }
    save()
})

clearButton.addEventListener('click',()=>{
    localStorage.clear()
})