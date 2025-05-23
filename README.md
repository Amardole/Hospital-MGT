# 🏥 Hospital Management System — Full Stack Project

A Full Stack **Hospital Management System** built with **Spring Boot** (Backend), **Angular 17 + Bootstrap** (Frontend), and **PostgreSQL** (Database).

---

## 📚 Tech Stack
- **Backend:** Spring Boot, Rest API, Hibernate (JPA), PostgreSQL
- **Frontend:** Angular 17, Bootstrap 5, HTML, CSS, TypeScript

---

## 🔥 Backend Setup — (Spring Boot + PostgreSQL)

### 📋 Prerequisites
- Java 17+
- Maven 3.8+
- PostgreSQL Database
---

### 📦 Backend Dependencies
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-devtools
- spring-boot-starter-validation
- postgresql

---

### 🛠️ Backend Configuration
In `src/main/resources/application.properties`, configure your database:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### 📑 API Endpoints

#### Patient Controller (Base URL: `/api/v1`)
| Method | Endpoint            | Description             |
|--------|---------------------|--------------------------|
| GET    | `/patients`          | Get all patients         |
| POST   | `/patients`          | Create a new patient     |
| GET    | `/patients/{id}`     | Get patient by ID        |
| PUT    | `/patients/{id}`     | Update patient by ID     |
| DELETE | `/patients/{id}`     | Delete patient by ID     |

#### Appointment Controller (Base URL: `/api/v3`)
| Method | Endpoint             | Description               |
|--------|----------------------|----------------------------|
| GET    | `/appointments`       | Get all appointments       |
| POST   | `/appointments`       | Create a new appointment   |
| GET    | `/appointments/{id}`  | Get appointment by ID      |
| DELETE | `/appointments/{id}`  | Delete appointment by ID   |

#### Medicine Controller (Base URL: `/api/v2`)
| Method | Endpoint              | Description                |
|--------|-----------------------|-----------------------------|
| GET    | `/medicines`           | Get all medicines          |
| POST   | `/medicines`           | Create a new medicine      |
| GET    | `/medicines/{id}`      | Get medicine by ID         |
| PUT    | `/medicines/{id}`      | Update medicine by ID      |
| DELETE | `/medicines/{id}`      | Delete medicine by ID      |

---

### 🏃‍♂️ How to Run Backend
```bash
# 1. Clone the project
git clone https://github.com/your-username/hospital-management-system-backend.git

# 2. Open in IDE (IntelliJ / Eclipse / VSCode)

# 3. Setup PostgreSQL and create a new database

# 4. Configure application.properties (Database URL, Username, Password)

# 5. Run the project
./mvnw spring-boot:run
```
> Backend will be available at: `http://localhost:8080`

---

## 🎯 Frontend Setup — (Angular + Bootstrap)

### 📋 Prerequisites
- Node.js 18+
- Angular CLI 17+
- Bootstrap 5 (already included)

---

### ⚙️ Frontend Project Structure
```
src/
 ├── app/
 │    ├── services/
 │    ├── components/
 │    │    ├── patients/
 │    │    ├── appointments/
 │    │    ├── medicines/
 │    │    └── navbar/
 │    ├── app.config.ts
 │    ├── app.routes.ts
 │    └── main.ts
 ├── index.html
 ├── styles.css
```

---

### 📦 Frontend Dependencies
- @angular/core
- @angular/router
- bootstrap (installed via npm)

**Install Bootstrap:**
```bash
npm install bootstrap
```
and include it in `angular.json`:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

---

### 🏃‍♂️ How to Run Frontend
```bash
# 1. Clone the project
git clone https://github.com/your-username/hospital-management-system-frontend.git

# 2. Navigate into project
cd hms-frontend

# 3. Install dependencies
npm install

# 4. Run the Angular app
ng serve --open
```
> Frontend will be available at: `http://localhost:4200`

---

## 🖼️ Project Screenshots

<p align="center">
  <img src="https://github.com/Amardole/Hospital-MGT/blob/main/ss/homepage.png" width="700" alt="HomePage"/>
  <br><b>1) HomePage</b>
</p>

<p align="center">
  <img src="https://github.com/Amardole/Hospital-MGT/blob/main/ss/addpatients.png" width="700" alt="addpatients"/>
  <br><b>2) AddPatients</b>
</p>

<p align="center">
  <img src="https://github.com/Amardole/Hospital-MGT/blob/main/ss/patientsrecords.png" width="700" alt="patientsrecords"/>
  <br><b>3) PatientsRecords</b>
</p>

<p align="center">
  <img src="https://github.com/Amardole/Hospital-MGT/blob/main/ss/schappointment.png" width="700" alt="schappointment"/>
  <br><b>4) SchAppointment</b>
</p>

<p align="center">
  <img src="https://github.com/Amardole/Hospital-MGT/blob/main/ss/appointmentRecords.png" width="700" alt="appointmentRecords"/>
  <br><b>5) AppointmentRecords</b>
</p>

etc.
---

## ⚡ Requirements Summary
| Tool           | Version        |
|----------------|-----------------|
| Java           | 17 or higher    |
| Maven          | 3.8+            |
| PostgreSQL     | 14+             |
| Node.js        | 18+             |
| Angular CLI    | 17+             |

---

## 🚀 Deployment
- Frontend can be deployed on **Netlify**, **Vercel**, or **AWS Amplify**.
- Backend can be deployed on **Render**, **Railway**, **AWS**, **Azure**, etc.

---

## 🧑‍💻 Developed by
- **Amar Dole**
-  **[Linkedin](https://www.linkedin.com/in/amardole/)**
-  **[Social Media](https://www.instagram.com/amardoleofficial)**

---

# 🌟 Thank you for visiting the project! Give it a ⭐ if you liked it!

