let tabs = document.querySelectorAll('.tabs-toggle'),
    contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

function nameFirstPerson(value) {
    document.getElementById("output-name-of-first-person").innerHTML = value;
  }
  
  function nameSecondPerson(value) {
    document.getElementById("output-name-of-second-person").innerHTML = value;
    document.getElementById("output-and").innerHTML = 'and';
  } 
  
  function getDateInput(date) {
    document.getElementById("output-date").innerHTML = "Date ~ " + date;
  }
  
  function getLocation(value) {
    document.getElementById("output-location").innerHTML = "Location ~ " + value;
  }