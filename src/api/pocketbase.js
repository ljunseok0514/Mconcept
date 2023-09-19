import PocketBase from 'pocketbase';

// const pb = new PocketBase(import.meta.env.VITE_PB_URL);
const pb = new PocketBase('https://little-manchester.pockethost.io');
pb.autoCancellation(false);

// PocketBase SDK {}
export default pb;
