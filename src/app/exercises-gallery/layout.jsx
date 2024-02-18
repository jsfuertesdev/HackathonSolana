'use client';
import Navbar from "../shared/navbar/Navbar";

export default function Layout({ children }) {

  return (
    <div className="exercises-gallery__page">
      <div className="exercises-gallery__header">
        <Navbar></Navbar>
      </div>
      <div className="exercises-gallery__content">{children}</div>
    </div>
  );
}