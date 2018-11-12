setInterval(() => {
    document.getElementsByClassName('pulllog-box')[0].setAttribute('style', 'display:none');
    var arr_clear = [].__proto__.slice.call(document.querySelectorAll('iframe'))
    var arr_clear_2 = [].__proto__.slice.call(document.getElementsByTagName('info-div'))
    var arr_clear_3 = [].__proto__.slice.call(document.getElementsByClassName('fourth_column'))

    var arr = [...arr_clear, ...arr_clear_2, ...arr_clear_3]
    arr.forEach(i => i.setAttribute('style', 'display: none'))

    }, 2000)
console.log('iframe clear')