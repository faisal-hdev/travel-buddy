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
             Launch demo modal
        </button> 
        </div>
      </div>
    </div>
  </div>`;
  mainSection.appendChild(div);
}

displayServices(carObj);
displayServices(busObj);
displayServices(bikeObj);

function handleBooking(obj) {
  const modalBodyElement = document.getElementById("modal-body");
  modalBodyElement.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img src=${obj.imgUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
      <p class="card-text">${obj.description}</p>
      <p class="card-text">Fare per kilo : ${obj.farePerKilo}</p>
      <p class="card-text">Capacity : ${obj.capacity}</p>
      <div class="d-flex" role="search">
      <input class="form-control me-2" type="input" placeholder="" aria-label="">
      <input class="form-control me-2" type="input" placeholder="" aria-label="">
      <button class="btn btn-outline-success" type="submit">Submit</button>
    </div>
    </div>
  </div>
  `;
}
