import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlanScreen.css";
import { collection, getDocs } from "firebase/firestore";
// import { async } from "@firebase/util";

function PlanScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = {};

      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data();
        // console.log(`${doc.id} => ${doc.data()}`);
        const priceSnap = await getDocs(collection(doc.ref, "prices"));
        priceSnap.forEach((price) => {
          products[doc.id].prices = {
            priceID: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    }
    fetchData();
  }, []);

  console.log(products);
  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, productData]) => {
        // Todo: some logic to check user subscription
        return (
          <div className="planScreen">
            <div className="planScreen_plan">
              <div className="planSreen__info">
                <h5>{productData.name} </h5>
                <h5>{productData.description}</h5>
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
