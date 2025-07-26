
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./globals.css";
import Topbar from "./components/Topbar";


export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Sidebar/>
        <Dashboard/>
        <Topbar/>
      </body>
    </html>
  );
}
