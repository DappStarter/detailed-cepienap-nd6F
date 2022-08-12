require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain hole idea enroll fortune select'; 
let testAccounts = [
"0x7109e148888b59875a4db4557e17b61d2bac699ce2c703b1de0661fe2fc5d39f",
"0x6be0e1b1c939a2ed5472d48ee1359ee38a476bf0453a832c4ea2bcb80f9d5428",
"0xccc59e08baf27ff0c6a72dbf74110c6b2ae12ceecf3e4992367e7130e42a89ed",
"0x56892c78b44ab828b01203ed50d328f8f42cb5774fafd278116deb028456aa05",
"0xd41dd8b1e14bcad1f7237970e7c068ebe2ef6821b8241ea8a931c7f0357cf9b4",
"0x03fbb85fecae148f5029e0be596061564b436a1d656c6ac33412f66a18ca0275",
"0xde0f86b5de6fe1c3ee6c2c91f2cac799dc32f57c6d38b3c49a98782c43193a0c",
"0xf7f237f7a48142d43d8272e11ee21b2a916fce7ac10937d9b474b2b7a7ae6840",
"0xbd425d7e4844097a26ba1145fb42dbd9d2e2dfc59decf61ae2dc2c818c1e76f9",
"0x4a10aaf21b451b24d0ccceccbd34eb7380ec9306083bb9fa32485ccf47532082"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


