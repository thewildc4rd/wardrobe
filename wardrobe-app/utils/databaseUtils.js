import { addDoc, getDocs, collection, setDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export const getCollection = async (coll) => {
	try {
		const data = await getDocs(collection(db, coll));
		const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return filteredData;
	} catch (err) {
		console.error(err);
	}
};

export const addItem = async (data) => {
	try {
		return addDoc(collection(db, 'items'), { ...data });
	} catch (err) {
		console.error(err);
	}
};

export const editItem = async (itemId, data) => {
	try {
		return setDoc(doc(db, 'items', itemId), { ...data }, { merge: true });
	} catch (err) {
		console.error(err);
	}
};

export const getItem = async (itemId) => {
	const items = await getCollection('items');
	const item = items.find((item) => item.id === itemId);
	return item;
};

export const addUser = async (uid, data) => {
	try {
		return setDoc(doc(db, 'users', uid), { ...data });
	} catch (err) {
		console.error(err);
	}
};

// helpers for specific queries
export const getUserFullName = async (userId) => {
	const users = await getCollection('users');
	const user = users.filter((user) => user.id == userId)[0];
	return user.first + ' ' + user.last;
};

export const getUserItems = async (userId) => {
	const items = await getCollection('items');
	const userItems = items.filter((item) => item.ownerId === userId);
	return userItems;
};

export const getUserOutfits = async (userId) => {
	const outfits = await getCollection('outfits');
	const userOutfits = outfits.filter((outfit) => outfit.ownerId === userId);
	const userItems = await getUserItems(userId);
	const userOutfitsWithData = userOutfits.map((outfit) => {
		const itemsData = outfit.items.map((id) => userItems.find((item) => item.id === id));
		return { ...outfit, items: itemsData };
	});
	return userOutfitsWithData;
};

export const addOutfit = async (data) => {
	try {
		return addDoc(collection(db, 'outfits'), { ...data });
	} catch (err) {
		console.error(err);
	}
};

// export const getItemsInList = async (listId) => {
// 	const allItems = await getCollection('items');
// 	const items = allItems.filter((item) => item.listId == listId);
// 	const itemsWithData = await Promise.all(
// 		items.map(async (item) => {
// 			const data = await getItemDataFromUrl(item.url);
// 			return { ...item, ...data };
// 		})
// 	);
// 	return itemsWithData;
// };

// export const getListWithItems = async (listId) => {
// 	const list = await getList(listId);
// 	const items = await getItemsInList(listId);
// 	return { ...list, items };
// };

// export const getListsWithItems = async () => {
// 	const lists = await getCollection('lists');
// 	const allItems = await getCollection('items');
// 	const listsWithItems = lists.map((list) => {
// 		const items = allItems.filter((item) => item.listId == list.id);
// 		return { ...list, items };
// 	});
// 	return listsWithItems;
// };
