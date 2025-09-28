import SideBar from "./SideBar";
import SideHeader from "./SideHeader";
import Example from "./Example";
import ChatBot from "./ChatBot"; 

export default function Layout() {
  return (
    <>
      <SideBar />
      <SideHeader />
      <Example />
      <ChatBot /> {/* ✅ Floating icon with chatbox */}
    </>
  );
}
