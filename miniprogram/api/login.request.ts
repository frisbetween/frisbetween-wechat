import User from '../service/module/user/type/User';
import type { Phone } from '../service/type/Phone'
import { get, post, put, del } from './base/request';

export async function login(phone: Phone, credential: string, type: string): Promise<{ user: User, token: string, refreshToken: string }> {
  const res = await post('/users/action/login', { phone, credential, type })
  const data = res.data as any

  return {
    user: new User(data),
    token: data.tokenPair.token,
    refreshToken: data.tokenPair.refreshToken,
  }
}