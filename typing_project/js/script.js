function show_name(e){
  var word = document.getElementById("word");
  var txt = document.getElementById("txt").value;
  // console.log(txt)
  if(e.keyCode == 13){
    console.log(txt)
    sendData(txt)
  }
}

// function sendData(data1) {
        
//   const form = document.createElement('form'); // form 태그 생성
//   form.setAttribute('method', 'POST'); // 전송 방식 결정 (get or post)
//   form.setAttribute('action', "http://127.0.0.1:5000/api"); // 전송할 url 지정

//   const data_1 = document.createElement('input'); // input 태그 생성
//   data_1.setAttribute('type', 'hidden'); // type = hidden
//   data_1.setAttribute('name', 'data1'); // 데이터의 key
//   data_1.setAttribute('value', parseInt(data1)); // 데이터의 value (여기서는 data1)
//   console.log(parseInt(data1));

//   form.appendChild(data_1);
	
//   document.body.appendChild(form);

//   form.submit();
  
//   // form.

//   }

function sendData(data1) {
  function myFunc() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = data1; // 타이핑될 텍스트를 가져온다
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    document.getElementById("word").innerHTML = document.getElementById("word").innerHTML+'</br>'
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
  
      var tyInt = setInterval(typing, 100); // 반복동작
    }
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        document.getElementById("word").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
      } else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }
  };

  const url = "http://127.0.0.1:5000/api"; // Your API endpoint
  const data = { data1: data1 };
  console.log(data)
  // console.log(location.origin);

  fetch(url, {
      method: 'POST',   // or 'PUT'
      mode: 'no-cors',
      headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json;charset=utf-8"
      },
      body: JSON.stringify(data), // Convert data to JSON
  })
  .then(response => response.json()
  )  // Convert response to JSON
  .then(data => {
    console.log('Success:', data);  // Handle the response data
    myFunc()
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}
