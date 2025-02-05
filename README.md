# Assignment Submission
### Pratik Chakraborty

## Frontend Repository
https://github.com/PratikChakraborty10/sagex-assignment

## Backend Repository
https://github.com/PratikChakraborty10/sagex-backend

## More
For this assignment the frontend and backend repositories both are hosted 
- Frontend - https://sagex-assignment.vercel.app/
- Backend - https://sagex-backend.onrender.com

#### * The backend server is hosted on a free instance, which remains active for 15 minutes at a time. After 15 minutes of inactivity, the instance shuts down. When a new API request is made, the server needs to restart, which typically takes around 50-60 seconds. As a result, the first API call may experience a loading delay of up to one minute.

## Run the frontend server locally
- Clone the frontend repository in your local machine
-  ```git clone https://github.com/PratikChakraborty10/sagex-assignment.git```
- Open the repository and run ```yarn``` in the root directory to install the dependencies
- Add .env.local in the root directory
 ```
 VITE_PUBLIC_API_BASE_URL='https://sagex-backend.onrender.com/api/products'
 ```
 - Now run the frontend server locally
 ```yarn dev```
- by default it will start at port 3000

## Run the server locally
- Clone the backend respository in your local machine
-  ```git clone https://github.com/PratikChakraborty10/sagex-backend.git```
- Open the repository and run ```yarn``` in the root directory to install the dependencies
- Add .env in the root directory
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
PORT=5000
```
- Now run the server locally
 ```yarn dev```
