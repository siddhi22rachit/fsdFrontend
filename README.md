# 🧾 FSD Angular Frontend - Run Instructions

This document contains everything you need to run the **Angular frontend** part of the FSD Project, which includes modules for **Teacher**, **Supervisor**, **Enrollment**, and **HallTicket**.

---

## 📦 Prerequisites

Before you begin, make sure the following are installed:

- **Node.js**: https://nodejs.org/
- **Angular CLI**:
```bash
npm install -g @angular/cli
```

---

## 📁 Folder Structure Overview

```
src/
├── app/
│   ├── components/
│   │   ├── teacher/
│   │   ├── supervisor/
│   │   ├── enrollment/
│   │   └── hallticket/
│   ├── service/
│   │   ├── teacher.service.ts
│   │   ├── supervisor.service.ts
│   │   ├── enrollment.service.ts
│   │   └── hallticket.service.ts
│   └── app-routing.module.ts
```

Each folder inside `components/` represents a feature module. The `service/` folder contains Angular services used to make HTTP requests to the backend API.

---

## 🚀 Steps to Run the Angular Frontend

### Step 1: Clone the GitHub Repository

```bash
git clone https://github.com/siddhi22rachit/fsdFrontend.git
cd fsdFrontend
```

### Step 2: Install Project Dependencies

```bash
npm install
```

This installs all the packages listed in `package.json`.

### Step 3: Run the Angular Project

```bash
ng serve
```

### Step 4: Open in Browser

After running `ng serve`, open the app in your browser:

```
http://localhost:4200
```

You should now see your FSD frontend application running.

---



---

## ✅ Done!

Your Angular project is now ready and running locally. 🎉

If you face any errors, make sure the backend is running, and the service URLs match.

## 🙌 Author

Siddhi Sawant
GitHub: siddhi22rachit
