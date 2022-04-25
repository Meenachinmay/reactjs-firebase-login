import React, { useEffect, useState } from 'react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase'
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
    const [file, setFile] = useState('')
    const [myData, setMyData] = useState({
        name: "Chinmay",
        motive: "going to japan",
        country: "India"
    })
 
    const [url, setUrl] = useState('')

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break
                    }
            }, 
            (error) => {
                // Handle unsuccessful uploads
                console.log(error)
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL)
                    setMyData((prev) => ({...prev, imgURL: downloadURL}))
                })
            }
            );
        }
        file && uploadFile()

    }, [file])

    useEffect(() => {
         //fetching data here
         const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'myCollection'))
            querySnapshot.forEach((doc) => {
                setUrl(doc.data().imgURL)
            })
        }

        fetchData()
    }, [url])

    const handleData = async () => {
       try {
            await setDoc(doc(db, 'myCollection', "ABC123"), {
                ...myData,
                timeStamps: serverTimestamp()
            })
       } catch (error) {
           console.log(error)
       }
    }
    

    return (
        <div>
            <h1>Home page</h1>
            <input type='file' onChange={(e) => setFile(e.target.files[0])}/>
            <button onClick={handleData}>Submit data</button>
            {
                url ? <img src={url} style={{ width: '400px', height: '400px' }}/> : <p>Image is loading yet...</p>
            }
        </div>
    )
}

export default Home