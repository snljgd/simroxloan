import SideBar from "./SideBar";
import SideHeader from "./SideHeader";
import Example from "./Example";
import ChatBot from "./ChatBot"; 
import ReviewSlider from "./ReviewSection";

export default function Layout() {
  return (
    <>
      <SideBar />
      <SideHeader />
      <Example />
      <ReviewSlider/>
      <ChatBot /> {/* ✅ Floating icon with chatbox */}
    </>
  );
}
