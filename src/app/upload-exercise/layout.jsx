import NavbarTrainer from "./components/navbarTrainer/navbarTrainer";

export default function Layout({ children }) {
  return (
    <div className="upload-exercise__page">
      <div className="upload-exercise__header">
        <NavbarTrainer></NavbarTrainer>
      </div>
      <div className="upload-exercise__content">{children}</div>
    </div>
  );
}