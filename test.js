let json = {
    "hasan":1,
    "ali":2
}
let input = "hsan"
let result = input in json? json[input]: "missing prop!"
console.log(result)