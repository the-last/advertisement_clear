setInterval(() => {
    document.getElementsByClassName('pulllog-box')[0].setAttribute('style', 'display:none');
    var arr_clear = [].__proto__.slice.call(document.querySelectorAll('iframe'))
    var arr_clear_2 = [].__proto__.slice.call(document.getElementsByTagName('info-div'))

    var arr = [...arr_clear, ...arr_clear_2]
    arr.forEach(i => i.setAttribute('style', 'display: none'))

    }, 2000)
console.log('iframe clear')