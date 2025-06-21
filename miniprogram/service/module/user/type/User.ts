import { Phone } from "../../../type/Phone"

export default class User {
  id: string;
  phone: Phone;
  email?: string;
  nickname: string;
  gender: Gender;
  avatar: string;

  constructor({
    id,
    phone,
    email,
    nickname,
    gender,
    avatar
  }: {
    id: string,
    phone: Phone,
    email: string,
    nickname: string,
    gender: Gender,
    avatar: string
  }) {
    this.id = id
    this.phone = phone
    this.email = email
    this.nickname = nickname,
    this.gender = gender,
    this.avatar = avatar
  }

  update({
    nickname,
    gender,
    avatar
  }: {
    nickname: string,
    gender: Gender,
    avatar: string
  }) {
    this.nickname = nickname,
    this.gender = gender,
    this.avatar = avatar
  }
}