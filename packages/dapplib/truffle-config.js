require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note maze purchase install arena outer gift'; 
let testAccounts = [
"0x2c1a64f991cd269201b25b25fc9065822801aad277595faca9f066e02100ae49",
"0xe72fca2bb9d7f546d0d1af0c160236cd64d24ff8080ac9f46cd7eb70bcebda7a",
"0x4a52ed998f26b33d89fa6ed861375fc2bce69f4b05f3ce30e3fa920c816746fc",
"0xbad24e8f5647a768c455176bee0eae663d38c80c4b87cf2b6143c4b51cfc1d54",
"0xdd039b7271e4e017b0f88f763dafc26729c525527fa2da8cca586015414ed6c1",
"0x46d1e65d5417e463f578b85a0e2ced1f0596fe8bc6b8cfc5b0de986dfe0dcadc",
"0xa222fa826b4699f0e6125936bb4d4dcbd3754c3f586d0167c79ca118c47d95a6",
"0x1e5e085df3a556906ae4db00173a868bb15784e48d3fe6db034ef1fb4046fb77",
"0xacdea0a033d2c4476d7baf764394ddb6207bd983dee7bf3878a0a9a64d37082b",
"0xbad8c5420958c918a92c232f6fba50ceeaf44563f54a1984b0ed444de211dcbc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

