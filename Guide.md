# Go Bootstrap Vue

## Tasks

1. Setup repository with `git clone` und `npm install`
2. Import bootstrap styles
   <details>
   <summary>Feeling lost? Expand to get a hint!</summary>
   Install `sass-loader` and `sass`.
   Import in `App.vue`.
   [Docs here.](https://cli.vuejs.org/guide/css.html#pre-processors)
   </details>
3. Add a navbar to the top by using the [Bootstrap Navbar](https://getbootstrap.com/docs/5.1/components/navbar/).
   <details>
   <summary>Code hint here</summary>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div class="container-fluid">
         <button
           class="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarTop"
         >
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarTop">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
               <router-link class="nav-link" to="/assignments"
                 >Assignments</router-link
               >
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/boids">Boids</router-link>
             </li>
           </ul>
           <button class="btn btn-primary">
             <i class="bi bi-person-fill"></i>
           </button>
         </div>
       </div>
     </nav>
   </details>
4. Add an Icon to the Navbar.
   <details>
   <summary>Code hint here</summary>
     <router-link class="navbar-brand" to="/assignments">
           <img src="@/assets/brand.svg" height="38" width="38" />
     </router-link>
   </details>
5. Create a Bootstrap container with a title inside in the Assignments component:
   <details>
   <summary>Code hint here</summary>
   <div class="container">
       <h1 class="mb-5">Assignments</h1>
   </div>
   </details>
6. Fetch assignments and display them as cards with [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/).
   <details>
   <summary>Code hint here</summary>
    <div class="container">
       <h1 class="mb-5">Assignments</h1>
       <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
         <div v-for="assignment in assignments" v-bind:key="assignment.id">
           <div class="card">
             <img src="@/assets/example-logo.png" class="img-fluid" />
             <div class="card-body">
               <h5 class="card-title">{{ assignment.name }}</h5>
               <p class="card-text">{{ assignment.description }}</p>
               <div class="d-flex justify-content-between">
                 <button class="btn btn-outline-danger">Delete</button>
                 <button class="btn btn-outline-primary">Edit</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </details>
7. Add a margin to our main assignments container and also gutter between the cards.
   <details>
   <summary>Code hint here</summary>
       <div class="row gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
         ...
       </div>
       ///////
       <main class="mt-4">
       </main>
   </details>
