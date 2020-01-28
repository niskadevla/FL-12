'use strict';

let root = document.getElementById('root');
let wrap = document.createElement('div');
wrap.classList.add('wrap');
root.appendChild(wrap);
let pageMain = document.createElement('section');
let pageAddNewSet = document.createElement('section');
let pageModifySet = document.createElement('section');


let form = document.forms;

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener('click', function(e) {
    let target = e.target;
    if(target.value === 'edit') {
      console.log(this.elements.term.value);
    }

  });
}

let html = `<section id="pageMain" class="page-main">
    <header class="header">
      <h1>Main page</h1>
      <div class="control">
        <button type="button" class="btn">Add new</button>
      </div>
    </header>

    <article class="article">
      <div class="not-studied">
        <h3>Not studied</h3>
        <div class="sets sets_not-studied">

          <form class="set" data-id="" action="/">
            <div class="set__body">
              <h4 class="set__name" name="name">name</h4>
              <div class="row">
                <p class="set__term" name="term">term</p>
                <p class="set__definition" name="definition">definition</p>
              </div>
            </div>
            <div class="control">
              <button type="button" class="btn btn_icon" value="edit">&#x270E;</button>
              <button type="button" class="btn btn_icon" value="del">&#x1f5d1;</button>
            </div>
          </form>

        </div>
      </div>

      <div class="studied">
        <h3>Studied</h3>
        <div class="sets sets_studied">

          <form class="set" data-id="" action="/">
            <div class="set__body">
              <h4 class="set__name" name="name">name</h4>
              <div class="row">
                <p class="set__term" name="term">term</p>
                <p class="set__definition" name="definition">definition</p>
              </div>
            </div>
            <div class="control">
              <button type="button" class="btn btn_icon" value="edit">&#x270E;</button>
              <button type="button" class="btn btn_icon" value="delete">&#x1f5d1;</button>
            </div>
          </form>

        </div>
      </div>
    </article>
  </section>


  <section id="pageAddNewSet" class="page-add-new-set">
    <header class="header">
      <h1>Add new set</h1>
      <div class="control">
        <button type="button" class="btn btn_icon" value="addTerms">+</button>
        <button type="button" class="btn btn_icon" value="saveChanges">&#x1f4be;</button>
        <button type="button" class="btn" value="cancel">Cancel</button>
      </div>
    </header>

    <article class="article">
      <form class="set" data-id="" action="/" >
        <div class="control">
          <button type="button" class="btn btn_icon" value="delete">&#x1f5d1;</button>
        </div>
        <div class="set__body">
          <label>Name: </label>
          <input type="text" name="name" placeholder="Name">
          <br>
          <input type="text" name="term" placeholder="Term">
          <input type="text" name="definition" placeholder="Definition">
        </div>
      </form>
    </article>
  </section>


  <section id="pageModifySet" class="page-modify-set">
    <header class="header">
      <h1>Modify set</h1>
      <div class="control">
        <button type="button" class="btn btn_icon" value="saveChanges">&#x1f4be;</button>
        <button type="button" class="btn" value="cancel">Cancel</button>
      </div>
    </header>

    <article class="article">
      <form class="set" data-id="" action="/" >
        <div class="set__body">
          <label>Name: </label>
          <input type="text" name="name" placeholder="Name">
          <br>
          <input type="text" name="term" placeholder="Term">
          <input type="text" name="definition" placeholder="Definition">
        </div>
      </form>
    </article>
  </section>`;

  wrap.innerHTML = html;
