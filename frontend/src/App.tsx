import { Toaster } from "sonner"
import AppRoutes from "./routes/AppRoutes.js"

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors expand={false} />
      <AppRoutes />

    </>
  )
}