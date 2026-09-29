import { Toaster } from "sonner"
// import Home from "./pages/home/Home"
import AppRoutes from "./routes/AppRoutes.tsx"

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors expand={false} />
      <AppRoutes />
      {/* <Home /> */}
    </>
  )
}