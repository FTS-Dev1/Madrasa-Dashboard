import axios from "../AxiosInstance";

// Helper :
import AuthTokenGen from "../Utils/AuthTokenGen"





const GetAllUsersAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/users",
            method: "GET",
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const GetAllRolesAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/roles",
            method: "GET",
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const GetAllPermissionsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/permissions",
            method: "GET",
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}


export { GetAllUsersAPI, GetAllRolesAPI, GetAllPermissionsAPI };