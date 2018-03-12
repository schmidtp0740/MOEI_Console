import axios from 'axios';

//const url = 'http://129.146.106.151:4001/bcsgw/rest/v1/transaction/query';
const url = 'http://localhost:8000/getData'
export async function getAllData(){
  console.log(url);  
  return axios.get(url)
      .then(function(response) {
          var data = JSON.parse(JSON.parse(response.data).result);
          return data;
      })
      .catch(function(error) {
          console.log(error);
          return error;
      }
  );
}