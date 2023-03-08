import { child, get, getDatabase, push, ref, remove, set, update } from "firebase/database";
import { getStorage, ref as storRef, uploadBytes } from "firebase/storage";

import axios from 'axios';

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

export async function getOrderCounter() {
  const snapshot = await get(child(db, "orderCounter"));
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    return null
  }
}

export async function getOrders() {
  const snapshot = await get(child(db, "orders"));
  if (snapshot.exists()) {
    let orders = [];
    snapshot.forEach(function (childSnapshot) {
      const key = childSnapshot.key;
      const childData = childSnapshot.val();
      orders.push({ ...childData, id: key })
    });
    return orders
  } else {
    return []
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
  axios(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_SECRET_TOKEN}&path=/admin`)
}

export async function updateProduct(id, newProduct) {
  await update(child(db, `products/${ id }`), newProduct);
  axios(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_SECRET_TOKEN}&path=/admin`)
}

export async function uploadFiles(file) {
  return await uploadBytes(storageRef, file);
}

export async function addRate(rate) {
  await set(child(db, "rate"), rate);
  axios(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_SECRET_TOKEN}&path=/admin`)
}

export async function setOrderCounter(orderCounter) {
  await set(child(db, "orderCounter"), orderCounter);
}

export async function addProduct(product) {
  await push(child(db, "products"), product);
  axios(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_SECRET_TOKEN}&path=/products`)
}

export async function addOrder(order) {
  await push(child(db, "orders"), order);
  axios(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_SECRET_TOKEN}&path=/admin`)
}

export async function sendEmail(email) {
  const response = await axios({
    method: 'post',
    url: '/api/send-email',
    data: {
      subject: "Нове замовлення",
      message: email,
    },
  });

  return response.status === 200;
}
