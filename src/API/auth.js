import axios from "../AxiosInstance";





const LoginAPI = async ({ email, password }) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/login",
            method: "POST",
            data: {
                email,
                password
            }
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err.response.message) {
            resolved.error = err.response.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}


export { LoginAPI }