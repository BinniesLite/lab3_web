
import axios from "axios";

const baseURL = "https://mahdiweb.herokuapp.com/api/"

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

export const getProjectsDetail = (id: number | string) => {
    return HttpInstance.get(`projects/${id}/`);
}

export const getImagesForProject = (id: number | string) => {
    return HttpInstance.get(`images/${id}/`);
}   