import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import config from './config'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(VueFirestore)
firebase.initializeApp(config.firebase)

export default firebase
