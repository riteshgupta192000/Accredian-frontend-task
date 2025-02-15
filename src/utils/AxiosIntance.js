// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000",
// });

// export default axiosInstance;

import axios from "axios";

const isProduction = window.location.hostname !== "localhost";

const axiosInstance = axios.create({
    baseURL: isProduction
        ? "https://accredian-backend-refer.onrender.com"
        : "http://localhost:5000",
});

export default axiosInstance;

