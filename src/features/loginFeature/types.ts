interface LoginData {
  username: string;
  password: string;
}

type JwtResponse = {
  response: string;
};

export type { LoginData, JwtResponse };
