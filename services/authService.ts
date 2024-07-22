import axios from "axios";

// service imports
import { getAccessToken } from "./tokenService";

const BASE_URL = "https://dev.tovtrip.com/usersvc/api/v1";

async function signInWithEmail(
  email: string,
  password: string
): Promise<string> {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "x-platform": "android",
          Accept: "application/json",
          "Content-Type": "application/json",
          apiKey: apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Login failed");
  }
}

async function signInWithPhone(
  phone: string,
  password: string
): Promise<string> {
  try {
    const apiKey = process.env.API_KEY;
    const countryCode = "855";

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        countryCode,
        phone,
        password,
      },
      {
        headers: {
          "x-platform": "android",
          Accept: "application/json",
          "Content-Type": "application/json",
          apiKey: apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Login failed");
  }
}

async function getUser(): Promise<any> {
  try {
    const apiKey = process.env.API_KEY;
    const token = await getAccessToken();

    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-platform": "android",
        Accept: "application/json",
        "Content-Type": "application/json",
        apiKey: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get user");
  }
}

export { signInWithEmail, signInWithPhone, getUser };
