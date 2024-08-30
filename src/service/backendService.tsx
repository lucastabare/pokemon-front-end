import axios from "axios";
import WorkflowServices from "./workflowServices";

const instance = axios.create({
    baseURL: 'http://localhost:3000/', //window.config.apiBase.baseUrl,
    headers: {
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Permissions-Policy": "geolocation=(), microphone=(), camera=(), vibrate=()",
    },
});


const api = {
    WorkflowServices: WorkflowServices(instance),
};
export default api;
