import * as storeServices from "../services/store.services.js";
import { getuser } from "../services/user.services.js";

export const createStore = async (req, res) => {
  try {
    const email_storeOwner = req.body.owner;
    const owner = await getuser(email_storeOwner);
    if (!owner) res.status(400).json({ msg: "No such owner exists !!!" });

    const userId = owner.id;

    const { name, email, city, streat, pincode, state, country } = req.body;

    if (!userId) res.status(400).json({ msg: "something is missing" });

    const store = await storeServices.createStore(name, email, userId);

    if (!store) res.state(400).json({ msg: "Somthing went wrong" });

    const address = await storeServices.storeAddress(
      city,
      streat,
      state,
      pincode,
      country,
      store.id
    );

    res.status(200).json({
      store: store,
      address: address,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllstore = async (req, res) => {
  try {
    const stores = await storeServices.getAllstore();

    res.status(200).json({
      stores,
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal sever error" });
  }
};

export const getStoreById = async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId);

    if (!storeId) res.status(400).json({ msg: "Something is missing" });

    const store = await storeServices.getStoreById(storeId);

    res.status(200).json({
      store,
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal sever error" });
  }
};

export const getStoreByOwenrId = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) res.status(400).json({ msg: "Something is missing" });

    const store = await storeServices.getStoreByOwenrId(userId);

    res.status(200).json({
      store,
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal sever error" });
  }
};
