# Go Bootstrap Vue

## Tasks

1. Setup repository:
   ```bash
    git clone https://github.com/vbackeberg/go-bootstrap-vue.git
    npm install
    git checkout start-here
   ```
2. Import bootstrap styles.

   <details>
   <summary>Code hint here</summary>

   #### **`App.vue`**

   ```scss
   @import "../node_modules/bootstrap/scss/bootstrap";
   ```

   This example comes with Sass installed.
   [Usually, you would need to install it yourself.](https://cli.vuejs.org/guide/css.html#pre-processors)

   </details>

3. Add a navbar to the top by using the [Bootstrap Navbar](https://getbootstrap.com/docs/5.1/components/navbar/).

   <details>
   <summary>Code hint here</summary>

   #### **`Navbar.vue`**

   ```html
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
   ```

 </details>

4. Add an Icon to the Navbar that redirects to our assignments page.

   <details>
   <summary>Code hint here</summary>

   #### **`App.vue`**

   ```scss
   @import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
   ```

   #### **`Navbar.vue`**

   ```html
   <router-link class="navbar-brand" to="/assignments">
     <img src="@/assets/brand.svg" height="38" width="38" />
   </router-link>
   ```

 </details>

5. Create a [Bootstrap Container](https://getbootstrap.com/docs/5.1/layout/containers/) with a title inside in the Assignments component:

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.vue`**

   ```html
   <div class="container">
     <h1 class="mb-5">Assignments</h1>
   </div>
   ```

 </details>

6. Display all assignments as cards with [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/).

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.vue`**

   ```html
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
   ```

  </details>
  
7. Add a top margin [top margin](https://getbootstrap.com/docs/5.1/utilities/spacing/) to our main container and also [vertical gutter](https://getbootstrap.com/docs/5.1/layout/gutters/) between the cards.
   <details>
   <summary>Code hint here</summary>

    #### **`Assignments.vue`**

      ```html
      <div class="row gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        ...
      </div>
      ```

    #### **`App.vue`**

    ```html
    <main class="mt-4"></main>
    ```

  </details>

8. Add 4 [placeholder cards](https://getbootstrap.com/docs/5.1/components/placeholders/) that appear while `loading` is `true`.

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.vue`**

   ```html
   <template v-if="loading">
     <div v-for="i in [1, 2, 3, 4]" v-bind:key="i">
       <div class="card">
         <div style="height: 180px" class="bg-dark bg-opacity-25"></div>
         <div class="card-body">
           <h5 class="card-title placeholder-glow">
             <span class="placeholder col-6"></span>
           </h5>
           <div class="bg-dark bg-opacity-25"></div>
           <p class="card-text placeholder-glow">
             <span class="placeholder col-7"></span>
             <span class="placeholder col-4"></span>
             <span class="placeholder col-4"></span>
             <span class="placeholder col-6"></span>
             <span class="placeholder col-8"></span>
           </p>

           <div class="d-flex justify-content-between">
             <button
               class="btn btn-outline-danger disabled placeholder col-3"
             ></button>
             <button
               class="btn btn-outline-primary disabled placeholder col-2"
             ></button>
           </div>
         </div>
       </div>
     </div>
   </template>
   ```

  </details>

9. [Customize our global theme](https://getbootstrap.com/docs/5.1/customize/sass/#variable-defaults) with [Netlight colors](https://netlight365beta.sharepoint.com/sites/CommunicationsDesign/SitePages/Brandbook.aspx#colors) and button font weight.

   <details>
   <summary>Code hint here</summary>

   #### **`App.vue`**

   ```scss
   $secondary: #4d4d4d;
   $primary: #4a49cb;
   $danger: #fc4a4a;
   $warning: #fc9a1a;

   $btn-font-weight: 600;
   ```

  </details>

10. On to the Boids component: Create a [Bootstrap Container](https://getbootstrap.com/docs/5.1/layout/containers/) with a title.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.vue`**

    ```html
    <div class="container">
      <h1 class="mb-5">Available Boids</h1>
    </div>
    ```

    </details>

11. Display the boids in a table.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.vue`**

    ```html
    <table class="table table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Availabe from</th>
          <th scope="col">Skillset</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="boid in boids" v-bind:key="boid.id">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
            </div>
          </td>
          <td>{{ boid.firstName }}</td>
          <td>{{ boid.lastName }}</td>
          <td>{{ boid.availableFrom }}</td>
          <td>{{ boid.skillset }}</td>
        </tr>
      </tbody>
    </table>
    ```

    </details>

12. Add a loading animation.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.vue`**

    ```html
    <div
      v-if="loading"
      class="position-absolute top-50 start-50 translate-middle d-flex gap-3"
    >
      <div class="spinner-grow text-primary" role="status"></div>
      <div
        class="spinner-grow text-primary text-opacity-75"
        role="status"
      ></div>
      <div
        class="spinner-grow text-primary text-opacity-50"
        role="status"
      ></div>
      <div
        class="spinner-grow text-primary text-opacity-25"
        role="status"
      ></div>
    </div>
    ```

    </details>

13. Create a button on top of the table that opens a [Bootstrap Modal](https://getbootstrap.com/docs/5.1/components/modal/).

      <details>
      <summary>Code hint here</summary>

    #### **`Boids.vue`**

    ```html
    <div class="d-flex justify-content-end mb-3">
      <button
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#addBoidModal"
      >
        Add Boid
      </button>
    </div>

    ...[below table]

    <div class="modal fade" id="addBoidModal" tabindex="-1">
      <div
        class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addBoidModalLabel">Add new boid</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
    ```

      </details>

14. Add a form inside the modal.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.vue`**

    ```html
    <div class="modal-body">
      <form>
        <div class="container-fluid">
          <div class="row row-cols-2">
            <div class="col">
              <label for="first-name" class="col-form-label">First name</label>
              <input type="text" class="form-control" id="first-name" />
            </div>
            <div class="col">
              <label for="last-name" class="col-form-label">Last name</label>
              <input type="text" class="form-control" id="last-name" />
            </div>
          </div>
          <div class="row row-cols-2">
            <div class="col">
              <label for="available-from" class="col-form-label"
                >Available from</label
              >
              <input class="form-control" id="available-from" />
            </div>
            <div class="col">
              <label for="skillset" class="col-form-label">Skillset</label>
              <textarea class="form-control" id="skillset"></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
    ```

    </details>

15.
