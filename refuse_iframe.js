setInterval(() => {
    var arr_clear = [], arr_clear_2 = []
    if (window.location.hostname === 'blog.csdn.net') {
        document.getElementsByClassName('pulllog-box')[0].setAttribute('style', 'display:none');
        arr_clear = arr_clear.concat([].__proto__.slice.call(document.querySelectorAll('iframe')))
        arr_clear = arr_clear.concat([].__proto__.slice.call(document.getElementsByTagName('info-div')))
        arr_clear = arr_clear.concat([].__proto__.slice.call(document.getElementsByClassName('fourth_column')))
    }
    if (window.location.hostname === 'www.jianshu.com') {
        arr_clear_2.push(document.getElementById('note-fixed-ad-container'))
    }
    var arr = [...arr_clear, ...arr_clear_2]
    console.log()
    arr.forEach(i => i.setAttribute('style', 'display: none'))

}, 2000)
console.log('iframe clear')