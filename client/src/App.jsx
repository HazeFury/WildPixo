import "./App.css";
import "nes.css/css/nes.min.css";
import Logo from "./assets/images/logo-small.png";
import Logo2 from "./assets/images/logo.png";

function App() {
  return (
    <main>
      <img src={Logo} alt="logo" />
      <img src={Logo2} alt="logo" />
      {/*  <div>
        <button type="button" className="nes-btn is-primary">
          Primary
        </button>
        <button type="button" className="nes-btn is-success">
          Success
        </button>
        <button type="button" className="nes-btn is-warning">
          Warning
        </button>
        <button type="button" className="nes-btn is-error">
          Error
        </button>
        <button type="button" className="nes-btn is-disabled">
          Disabled
        </button>
      </div>
      <div className="nes-field is-inline">
        <label for="inline_field">.input.is-success</label>
        <input
          type="text"
          id="inline_field"
          className="nes-input is-success"
          placeholder="NES.css"
        />
      </div>
      <label for="textarea_field">Textarea</label>
      <textarea id="textarea_field" className="nes-textarea"></textarea>
      <label for="warning_select">nes-select.is-warning</label>
      <div className="nes-container is-rounded is-dark">
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>
      <div className="nes-select is-warning">
        <select required id="warning_select">
          <option value="" disabled selected hidden>
            Select...
          </option>
          <option value="0">To be</option>
          <option value="1">Not to be</option>
        </select>
      </div>
      <section>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleChange}
        >
          Open dialog
        </button>
        {test && (
          <form method="dialog">
            <p className="title">Dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        )}
      </section>
      <progress
        className="nes-progress is-primary"
        value="80"
        max="100"
      ></progress>
      <div>
        <label>
          <input type="radio" className="nes-radio" name="answer" checked />
          <span>Yes</span>
        </label>

        <label>
          <input type="radio" className="nes-radio" name="answer" />
          <span>No</span>
        </label>
      </div> */}
    </main>
  );
}

export default App;
