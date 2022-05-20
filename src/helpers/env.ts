import { cleanEnv, str } from 'envalid'

export default cleanEnv(import.meta.env, {
  VITE_APP_BACKEND_URL: str(),
  VITE_APP_PASSWORD: str(),
})
