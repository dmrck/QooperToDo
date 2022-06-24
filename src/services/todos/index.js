import firestore from '@react-native-firebase/firestore';

export const addNewTask = (uid, task) => {
  return new Promise(resolve => {
    firestore()
      .collection('Todos')
      .add({
        uid: uid,
        task: task,
        date: new Date(),
      })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

export const getTasks = uid => {
  return new Promise(resolve => {
    firestore()
      .collection('Todos')
      .where('uid', '==', uid)
      .orderBy('date', 'asc')
      .get()
      .then(querySnapshot => {
        resolve(querySnapshot._docs);
      })
      .catch(error => {
        console.log('ERROR :', error);
        resolve([]);
      });
  });
};

export const deleteTask = () => {
  return new Promise(resolve => {
    firestore()
      .collection('Todos')
     
      .then(querySnapshot => {
        resolve(querySnapshot._docs);
      })
      .catch(error => {
        console.log('ERROR :', error);
        resolve([]);
      });
  });
};
