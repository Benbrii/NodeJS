process.stdin.resume()
process.stdin.setEncoding('utf8')
let year = 2019

console.log('What\'s your age \:\) ? ')
process.stdin.on('data', (theage) => {
    if (theage > 0 && theage < 99)
    console.log('You are born in ' + (year - theage))
    process.exit()
})