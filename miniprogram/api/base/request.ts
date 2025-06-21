// utils/request.ts
const endpoint = 'http://10.1.13.229:32010';
// const endpoint = 'http://192.168.31.151:8888'

interface RequestOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  header?: Record<string, string>;
}

// 定义通用响应类型
interface ApiResponse<T> {
  data: T;
  msg: string;
  code: number;
}

const request = ({ url, method, data, header = { 'Content-Type': 'application/json' } }: RequestOptions): Promise<any> => {
  wx.showLoading({
    title: '加载中...'
  });
  
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${endpoint}${url}`,
      method: method,
      data: data,
      header: header,
      success: (res) => {
        wx.hideLoading();
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
          wx.showToast({
            title: '请求错误',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        reject(err);
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        });
      }
    });
  });
};

const get = (url: string, data?: any, header?: Record<string, string>): Promise<any> => {
  return request({ url, method: 'GET', data, header });
};

const post = (url: string, data?: any, header?: Record<string, string>): Promise<any> => {
  return request({ url, method: 'POST', data, header });
};

const put = (url: string, data?: any, header?: Record<string, string>): Promise<any> => {
  return request({ url, method: 'PUT', data, header });
};

const del = (url: string, data?: any, header?: Record<string, string>): Promise<any> => {
  return request({ url, method: 'DELETE', data, header });
};

export { get, post, put, del };
