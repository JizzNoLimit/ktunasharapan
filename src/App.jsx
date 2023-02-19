import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"

export default function App() {

  // create browser router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}