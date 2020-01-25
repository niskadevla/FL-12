const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function recurs(arr) {
  let ul = '<ul class="list">';

  arr.forEach((obj) => {
    let li = '';

    if(obj.folder && obj.children) {
      li += `<li>
                <div class="list-des">
                  <i class="material-icons">folder</i>
                  <span>${obj.title}</span>
                </div>
                ${recurs(obj.children)}`;
    } else if(obj.folder && !obj.children) {
      li += `<li>
               <div class="list-des">
                 <i class="material-icons">folder</i>
                 <span>${obj.title}</span>
               </div>
               <ul class="list list-down">
                 <li><span>Folder is empty</span></li>
               </ul>
             </li>`;
    } else {
      li += `<li>
                <div class="list-des">
                  <i class="material-icons file">insert_drive_file</i>
                  <span>${obj.title}</span>
                </div>
            </li>`;
    }

    ul += li;
  });

  ul += '</ul>';
  return ul;
}

function drawStructure(structure) {
  let div = document.createElement('div');
  div.classList.add('structure');
  div.innerHTML = recurs(structure);

  return div;
}

rootNode.appendChild(drawStructure(structure));

//add Events
let lis = document.querySelectorAll('.list li');
lis.forEach((el) => el.addEventListener('click', function(e) {
  this.classList.toggle('active');
  e.stopPropagation();
}));
