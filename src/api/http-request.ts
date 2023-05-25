
import axios from "axios";

const baseURL = "https://mahdiweb.herokuapp.com/api/";


const HttpInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }   
})


export const getAllMember = (education: string | any, active: boolean | any) => {
    let queryString = '';

    // Check the education option
    if (education !== 'all') {
        if (education !== 'previous' && education !== "current")
            queryString += `education=${education}`;
        if (active !== undefined && (education == "previous" || education == "current")) {
            // Make the first word uppercase
            active = active.toString().charAt(0).toUpperCase() + active.toString().slice(1);
            queryString += `&active=${active}`;
        }
    }

    // Append the query string to the endpoint URL
    const url = queryString ? `members/list?${queryString}` : 'members/list';

    return HttpInstance.get(url);
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