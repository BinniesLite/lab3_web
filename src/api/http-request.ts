import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/"

const HttpInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }   
})


export const getAllMember = () => {
    return HttpInstance.get("members/list/");
}

export const getMemberProjects = (id: number) => {
    return HttpInstance.get(`members/${id}/projects/`);
}

export const getAllProjects = () => {
    return HttpInstance.get("projects/list/");
}

