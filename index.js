function convertToNumber(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return 0
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('button').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = document.getElementById('text').value;
  
    element_list.appendChild(new_li);
  
  });