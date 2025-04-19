const listing = document.querySelector('#listing');
const averageSpan = document.querySelector('#averageSpan');

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose"
];

const occupations = [
  "gardener",
  "programmer",
  "teacher",
  "gardener"
];

function createFreelancer(){
  return {
    name: names[Math.floor(Math.random() * names.length)], // That grabs a random name from the list.
    occupation: occupations[Math.floor(Math.random() * occupations.length)], //That grabs a random occupation from the list.
    price: Math.floor(Math.random()*50) + 20 //Makes a random number from 20 to 69
  };
}

const freelancers = [
  createFreelancer(),
  createFreelancer(),
];


//shows all freelancers on the page and It also updates the average price
function render(){
  const html = freelancers.map(function(freelancer){ //goes through each freelancer inside freelancers
    return `
      <div class='row'>
        <div>${freelancer.name}</div> 
        <div>${freelancer.occupation}</div> 
        <div>$${freelancer.price.toFixed(2)}</div> 
      </div>
    `;
  });
  listing.innerHTML = html.join(''); //puts all the freelancer HTML on the page inside the #listing box



  const average = freelancers.reduce((acc, freelancer)=> { //Adds all the freelancer prices together using .reduce()
    return acc + freelancer.price
  }, 0)/freelancers.length;
  averageSpan.innerText = average.toFixed(2);
}

render();

setInterval(function(){
  freelancers.push(createFreelancer());
  render();
}, 1000); //repeats every 1 second
