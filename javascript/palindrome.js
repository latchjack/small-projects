function palindrome(str) {
  var re = /[\W_]/g
  var lowRegStr = str.toLowerCase().replace(re, '')
  var reverseStr = lowRegStr.split('').reverse().join('') 
  if (reverseStr === lowRegStr) {
    console.log(true)
  } else {
    console.log(false)
  }
}
palindrome('A man, a plan, a canal. Panama')
palindrome('latch')
palindrome('race car')
palindrome('john')
palindrome('kayak')
palindrome('tenet')

