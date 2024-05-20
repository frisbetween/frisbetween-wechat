declare namespace Auth {
  interface User {
    id: string
    phone: Phone
    email: string
    nickname: string
    gender: 'male' | 'female'
    avatar: string
  }

  interface Phone {
    region: string
    number: string
  }

  interface TokenPair {
    token: string
    refreshToken: string
  }
}