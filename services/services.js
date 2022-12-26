import { child, get, getDatabase, ref, remove, set, update } from "firebase/database";
import { getStorage, ref as storRef, uploadBytes } from "firebase/storage";

const db = ref(getDatabase());
const storageRef = storRef(getStorage(), 'images');

export async function getProducts() {
  const snapshot = await get(child(db, 'products'));
  if (snapshot.exists()) {
    let products = [];
    snapshot.forEach(function (childSnapshot) {
      const key = childSnapshot.key;
      const childData = childSnapshot.val();
      products.push({ ...childData, id: key })
    });
    return products
  } else {
    return []
  }
}

export async function getProduct(id) {
  const snapshot = await get(child(db, `products/${ id }`));
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    return null
  }
}

export async function getRate() {
  const snapshot = await get(child(db, "rate"));
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    return null
  }
}

export async function getProductsPaths() {
  const snapshot = await get(child(db, 'products'));
  if (snapshot.exists()) {
    let products = [];
    snapshot.forEach(function (childSnapshot) {
      const key = childSnapshot.key;
      const childData = childSnapshot.val();
      products.push({ ...childData, id: key })
    });
    return products.map((product) => ({
      params: { id: product.id },
    }))
  } else {
    return null
  }
}

export async function deleteProduct(id) {
  await remove(child(db, `products/${ id }`));
}

export async function updateProduct(id, newProduct) {
  await update(child(db, `products/${ id }`), newProduct);
}

export async function uploadFiles(file) {
  return await uploadBytes(storageRef, file);
}

export async function addRate(rate) {
  return await set(child(db, "rate"), rate);
}
