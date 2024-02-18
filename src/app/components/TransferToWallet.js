'use client'

import { useState } from 'react';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import bs58 from 'bs58';

const connection = new Connection('https://api.devnet.solana.com');

const TransferPage = () => {
  const [sending, setSending] = useState(false);

  const handleTransfer = async () => {
    try {
      setSending(true);

      // Obtener la clave pública del remitente y el destinatario
      const senderPublicKey = new PublicKey('9xQeWvG816bUx9ECwBseuKU1Q1K6x1QQXyBga22ZbYi');
      const receiverPublicKey = new PublicKey('Crr9kNif1rCMwXehpCU3yibmDcQVXGqJGXRNspdgHkY');

      // Obtener la clave privada del remitente
      const senderPrivateKeyStr = '21GgQbe9St47XeX8J7pvKcfez1xEqpwS8CvBb61YeeJ5mgjCZ7ro2AEeb9X2UgdWDwHLjWP6n65ajQeoZG8nstyz';
      const senderPrivateKey = Uint8Array.from(bs58.decode(senderPrivateKeyStr));

      // Obtener el hash del bloque más reciente
      const recentBlockhash = await connection.getRecentBlockhash();

      // Crear una transacción para la transferencia
      const transaction = new Transaction({
        recentBlockhash: recentBlockhash.blockhash,
        feePayer: senderPublicKey,
      });

      transaction.add(
        // Instrucción para transferir fondos
        SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: receiverPublicKey,
          lamports: 1000000, // Monto en lamports (1 Sol = 1,000,000 lamports)
        })
      );

      // Firmar y enviar la transacción
      const signature = await window.solana.signTransaction(transaction, senderPrivateKey);
      const txid = await connection.sendRawTransaction(signature);

      console.log('Transferencia exitosa. Txid:', txid);
    } catch (error) {
      console.error('Error al transferir:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <h1>Transferencia de Solana</h1>
      <button onClick={handleTransfer} disabled={sending}>
        {sending ? 'Enviando...' : 'Transferir'}
      </button>
    </div>
  );
};

export default TransferPage;