import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import { firebase as config } from './config'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(VueFirestore)
firebase.initializeApp(config)

export default firebase
