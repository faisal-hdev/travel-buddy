const carObj = {
  vehicle: "Car",
  farePerKilo: 3,
  capacity: 5,
  imgUrl:
    "https://images.unsplash.com/photo-1560009341-b0a4cad519bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
};

const busObj = {
  vehicle: "Bus",
  farePerKilo: 5,
  capacity: 50,
  imgUrl:
    "https://www.liverpoolcityregion-ca.gov.uk/wp-content/uploads/hydrogen-bus-at-albert-dock-1030x773.jpg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
};

const bikeObj = {
  vehicle: "Bike",
  farePerKilo: 3,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
  imgUrl:
    "https://images.unsplash.com/photo-1529940340007-8ef64abc360a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
};

const aeroplaneObj = {
  vehicle: "Aeroplane",
  farePerKilo: 3,
  capacity: 66,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
  imgUrl:
    "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb3BsYW5lfGVufDB8fDB8fHww&w=1000&q=80",
};

const privateJetObj = {
  vehicle: "Private jet",
  farePerKilo: 3,
  capacity: 15,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
  imgUrl:
    "https://media.cntraveler.com/photos/581b8e750ee23d7b457512e9/master/w_3989,h_2655,c_limit/private-jet-tarmac-GettyImages-523476302.jpg",
};

function displayServices(services) {
  // step-01: access the main section by id
  // step-02: create a div element
  // step-03: create a innerHtml of the above div dynamically with service
  // step-04: append the div to main section
  const mainSection = document.getElementById("main-section");
  const stringifiedObj = JSON.stringify(services);
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 880px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${services.imgUrl}"
          class="img-fluid rounded-start h-100"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fs-4">Transport mood : ${services.vehicle}</h5>
          <p class="card-text fs-5">
          <small>${services.description}</small>
          </p>
         <div class="d-flex">
         <p class="card-text fs-5"><small class="text-body-secondary">Fare per kilo : ${services.farePerKilo}</small></p>         
         <p class="card-text fs-5"><small class="text-body-secondary mrr">Capacity : ${services.capacity}</small></p>      
         </div>  
         <!-- Button trigger modal -->
            <button onClick='handleBooking(${stringifiedObj})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             BOOK NOW
        </button> 
        </div>
      </div>
    </div>
  </div>`;
  mainSection.appendChild(div);
}

displayServices(privateJetObj);
displayServices(carObj);
displayServices(busObj);
displayServices(bikeObj);
displayServices(aeroplaneObj);

function handleBooking(obj) {
  const modalBodyElement = document.getElementById("modal-body");

  const stringifiedObj = JSON.stringify(obj);

  var vehicle = "Bus";
  var id2 = carObj.vehicle + "-fare-input"; // care-fare-pice

  modalBodyElement.innerHTML = `
    <div class="card mx-auto" style="width:465px;">
    <img src=${obj.imgUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title fs-4">Vehicle Mood : ${obj.vehicle}</h5>
      <p class="card-text">${obj.description}</p>
      <div class="d-flex">
      <p class="card-text fs-5">Fare per kilo : ${obj.farePerKilo}</p>
      <p class="card-text mrr fs-5">Capacity : ${obj.capacity}</p>
      </div>

      <p>Fare : <small class="text-muted" id="fare"></small></p>
      <p>Tax : <small class="text-muted" id="tax"></small></p>
      <p>Total Cost : <small class="text-muted" id="total-cost"></small></p>

      <div class="d-flex" role="search">
      
      <input id="distance-input"
      class="form-control me-1" type="number" placeholder="Distance to travel" aria-label="">
      <input id="quantity-input"
      class="form-control me-1" type="number" placeholder="How many vehicle distance" aria-label="">
      <button id="submit-btn" class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringifiedObj})'>Submit</button>
    </div>
    </div>
  </div>
  `;
}

// document.getElementById("submit-btn").addEventListener("click", function () {});

function calculateCost(obj) {
  const quantity = document.getElementById("quantity-input").value;
  const distance = document.getElementById("distance-input").value;

  const fareDiv = document.getElementById("fare");
  const taxDiv = document.getElementById("tax");
  const totalCostDiv = document.getElementById("total-cost");

  const fareKilo = (fareDiv.innerHTML = quantity * distance * obj.farePerKilo);
  taxDiv.innerHTML = obj.farePerKilo / 10;
  totalCostDiv.innerHTML = taxDiv + fareKilo;
  console.log(fareDiv);
  console.log(obj);
}
