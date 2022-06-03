document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {sname: name1, fname: name2},
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '428dee2f49msh5638f8f6116e878p1d50e2jsn08b5f7e28318'
      }
    }; 
    getCalcul(options);
  
});

const getCalcul = (options) => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      document.getElementById('result').innerHTML = response.data.percentage + "%" + " <br/>" + response.data.result
    }).catch(function (error) {
      console.error(error);
    });
}