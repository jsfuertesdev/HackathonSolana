import Image from "next/image";
import styles from "./page.module.css";
import MetaMaskButton from '@/app/components/MetaMaskButton';

export default function Home() {
  return (
    <div>
    <h1>Bienvenido a mi aplicación</h1>
    <MetaMaskButton />
  </div>
  );
}
