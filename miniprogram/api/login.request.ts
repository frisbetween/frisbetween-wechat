import User from '../data/module/user/type/User';
import type { Phone } from '../data/type/Phone'
import { get, post, put, del } from './base/request';

export async function login(phone: Phone, credential: string, type: string): Promise<{ user: User, token: string, refreshToken: string }> {
  const res = await post('/user/action/login', { phone, credential, type })
  const data = res.data as any

  return {
    user: new User(data),
    token: data.tokenPair.token,
    refreshToken: data.tokenPair.refreshToken,
  }
}