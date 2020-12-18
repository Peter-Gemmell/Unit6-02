function myFunction () {
  const x, text

  const x = document.getElementById('numb').value

  if (isNaN(x)) { 
    text = 'Input is not a number'
  } else if (x < 0) {
    text = 'Input is a negative integer'
  } else { 
    text = 'Input is a positive integer'
  } 
  document.getElementById('demo').innerHTML = text;
}
