// Funciones helper para autenticación

export const loginUser = async (email, password) => {
  const response = await fetch("https://kefir-backend.onrender.com/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Error en login")
  }

  return data
}

export const registerUser = async (nombre, email, password) => {
  const response = await fetch("https://kefir-backend.onrender.com/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, password })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Error en registro")
  }

  return data
}

export const saveUserToLocalStorage = (token, nombre, email, isAdmin) => {
  localStorage.setItem("token", token)
  localStorage.setItem("nombre", nombre)
  localStorage.setItem("email", email)
  localStorage.setItem("isAdmin", isAdmin)
}

export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("token")
  const nombre = localStorage.getItem("nombre")
  const email = localStorage.getItem("email")
  const isAdmin = localStorage.getItem("isAdmin") === "true"

  if (!token) {
    return null
  }

  return { token, nombre, email, isAdmin }
}

export const clearLocalStorage = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("nombre")
  localStorage.removeItem("email")
  localStorage.removeItem("isAdmin")
}

export const getAuthHeader = () => {
  const token = localStorage.getItem("token")
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}
