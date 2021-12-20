import Header from './Header'


// let a = 'shivam';
// let b = 'gupta';
// let c = 5;
// let d = 20;

function App() {
  return (
    <div className="App" >

      {/* <form> */}
      {/* <label htmlFor="usesrname"><b>Username: </b></label>
        <input id="username" type="text" /><br/>
        <label htmlFor="password"><b>Password: </b> </label>
        <input id="password" type="password" /> */}

      {/* </form> */}
      {/* <span>Hello {a} {b}! The Total amount you need to pay for {c} ice-creams is Rs. {c*d}.
      </span> */}
      {/* <form>
        <input type="radio" id="YES" value="HTML" />
        <label htmlfor="YES">YES</label><br/>
          <input type="radio" id="NO" value="CSS" />
          <label htmlfor="NO">NO</label><br />
      </form> */}
      <Header />
      <button>
        ADD
      </button><br />
      <span>
        Name
      </span><br />
      <span>
        Phone No
      </span>

    </div>
  );
}

export default App;
