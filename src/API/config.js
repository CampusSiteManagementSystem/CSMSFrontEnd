import axios from "axios";
//import store from "../state/state"
//import router from "../router/index"
import { Message } from 'element-ui';
//import QS from 'qs'

// 环境切换//https://7c49c50e-d356-412d-aace-8a782ce092f3.mock.pstmn.io
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://139.196.114.7';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://139.196.114.7';
}

//axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000; //10s
//带上cookie
//axios.defaults.withCredentials = true


// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        // if(cookie.get('user_token')){
        // 	config.headers['token'] = cookie.get('user_token');
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) { //get success
            //console.log(response)
            return Promise.resolve(response);
        } else if (response.status === 201) { //post success
            return Promise.resolve(response);
        } else if (response.status === 204) {
            return Promise.resolve(response); //delete and put success
        } else {
            return Promise.reject(response);
        }
    },
    /*200 获取成功 201 创建成功 204 更新/删除成功 403 输入不合法 404 NotFound 409 冲突*/
    error => {
        console.log(error, 123)
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 404:
                    Message.error("网络请求不存在")
                        //router.replace('/error')
                    break;
                default:
                    Message({
                        message: "错误代码to do",
                    })
            }
            return Promise.reject(error);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns {Promise}
 */

export function Get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns {Promise}
 */

export function GetID(url, ID) {
    return new Promise((resolve, reject) => {
        axios.get(url + ID).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * @returns {Promise}
 */
export function Post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params), {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}

/**
 * delete 方法封装
 * @param url
 * @param params
 * @returns {Promise}
 */

export function Delete(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function DeleteID(url, ID) {
    return new Promise((resolve, reject) => {
        axios.delete(url + ID).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * put 方法封装
 * @param url
 * @param params
 * @returns {Promise}
 */

export function Put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function PutID(url, ID, params) {
    return new Promise((resolve, reject) => {
        axios.put(url + ID, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}