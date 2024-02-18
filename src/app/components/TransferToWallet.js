import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import * as fs from 'fs';

async function transferToWallet() {
    try {
        // Establecer la conexión a la red de Solana
        const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

        // Definir las direcciones de las carteras
        const fromWallet = new PublicKey('BHJPnGVAy1JxF2aXuNy2CGMN1RD1HMB6iP6EAnJcF54N');
        const toWallet = new PublicKey('Crr9kNif1rCMwXehpCU3yibmDcQVXGqJGXRNspdgHkY');

        // Obtener el balance mínimo necesario para la exención del alquiler
        const lamports = await connection.getMinimumBalanceForRentExemption(0); // Use 0 for account creation
        console.log('Minimum balance for rent exemption:', lamports);

        // Crear la transacción
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromWallet,
                toPubkey: toWallet,
                lamports: lamports // transferir todos los lamports
            })
        );

        // Establecer el pagador de tarifas (fee payer)
        transaction.feePayer = fromWallet;

        console.log('Transaction:', transaction);

        // Firmar la transacción con la clave privada
        const privateKey = Uint8Array.from(JSON.parse(fs.readFileSync('path/to/your/private/key.json')));
        transaction.sign(privateKey);

        // Enviar la transacción
        const signature = await connection.sendRawTransaction(transaction.serialize());
        console.log('Transaction signature:', signature);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

export default transferToWallet;