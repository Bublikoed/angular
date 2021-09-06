window.addEventListener('DOMContentLoaded', () => {
    const wraper = document.querySelector('.list-wrap'),
          list = wraper.querySelectorAll('.list-ol'),
          btnRight = document.querySelector('#right'),
          btnleft = document.querySelector('#left'),
          revers = document.querySelector('#revers')

    let arr = []
    let arr2 = []

    list[0].addEventListener('click', (e) => {
        const leftItems = list[0].querySelectorAll('.list-item')
        if (!e.ctrlKey) {
            e.target.childNodes[0].checked = true
        }
    
        if (e.ctrlKey) {
            e.target.classList.toggle('active')
            e.target.childNodes[0].checked = !e.target.childNodes[0].checked;
        } else if (e.target.childNodes[0].checked && !e.ctrlKey) {
            removeActiveClass(leftItems)
            e.target.classList.add('active')
            e.target.childNodes[0].checked = true
            arr = []
        }

        if(e.target.childNodes[0].checked && e.target.classList.contains('list-item')) {
            arr.push(e.target)
        }
        console.log(arr)
    })
    list[1].addEventListener('click', (e) => {
        const rightItems = list[1].querySelectorAll('.list-item')

        if (!e.ctrlKey) {
            e.target.childNodes[0].checked = true
        }

        if (e.ctrlKey) {
            e.target.classList.toggle('active')
            e.target.childNodes[0].checked = !e.target.childNodes[0].checked;

        } else if (e.target.childNodes[0].checked && !e.ctrlKey) {
            removeActiveClass(rightItems)
            e.target.classList.add('active')
            e.target.childNodes[0].checked = true
            arr2 = []
        }

        if(e.target.childNodes[0].checked && e.target.classList.contains('list-item')) {
            arr2.push(e.target)
        }

        console.log(arr2)
    })

    function removeActiveClass(items) {
        items.forEach(item => {
            item.classList.remove('active')
            item.childNodes[0].checked = false
        })
    }

    btnRight.addEventListener('click', function() {
        arr.forEach(item => {
            list[1].append(item);
        })
        arr = []
        const leftItems = list[1].querySelectorAll('.list-item')
        leftItems.forEach(item => {
            item.childNodes[0].checked = false
            item.classList.remove('active')
        })
    })

    btnleft.addEventListener('click', function() {
        arr2.forEach(item => {
            list[0].append(item);
        })
        arr2 = []
        const rightItems = list[0].querySelectorAll('.list-item')
        rightItems.forEach(item => {
            item.childNodes[0].checked = false
            item.classList.remove('active')
        })
    })

    revers.addEventListener('click', function() {
        const rightItems = list[0].querySelectorAll('.list-item')
        const leftItems = list[1].querySelectorAll('.list-item')
        rightItems.forEach(item => {
            list[1].append(item)
        })
        leftItems.forEach(item => {
            list[0].append(item)
        })
    })
});