var count = 0
function countup() {
    return count++ 
}

function douzo(countup) {
    console.log(count)
    const str ="どうぞどうぞ"
    const action =str.repeat(count)
    alert(action)
    // const action =new String(("どうぞどうぞ")*count)
}