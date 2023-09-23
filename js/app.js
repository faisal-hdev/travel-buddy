const carObj = {
  vehicle: "Car",
  farePerKilo: 3,
  capacity: 5,
  imgUrl:
    "https://images.unsplash.com/photo-1529940340007-8ef64abc360a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
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
    "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
};

const busObj = {
  vehicle: "Bus",
  farePerKilo: 5,
  capacity: 50,
  imgUrl:
    "https://images.unsplash.com/photo-1587580945215-5d4aabb2c8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1628&q=80",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel voluptates nisi?",
};

function displayServices(services) {
  const mainSection = document.getElementById("main-section");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 750px">
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
          <h5 class="card-title fs-3">Transport mood: ${services.vehicle}</h5>
          <p class="card-text fs-5">
          <small>${services.description}</small>
          </p>
         <div class="d-flex">
         <p class="card-text fs-5"><small class="text-body-secondary">Fare per kilo : ${services.farePerKilo}</small></p>         
         <p class="card-text fs-5"><small class="text-body-secondary mrr">Capacity : ${services.farePerKilo}</small></p>      
         </div>   
        </div>
      </div>
    </div>
  </div>`;

  mainSection.appendChild(div);
}

displayServices(carObj);
displayServices(busObj);
displayServices(bikeObj);
