import 'babel-polyfill';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/routes';
import store from '@/store/store';
import { formatDate, filterDate } from '@/utils/filters';
import VCalendar from 'v-calendar';

// swteetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import firebase from 'firebase';
// let config = {
// 	apiKey: 'AIzaSyDZLmJ8TJE2RQDxwCyjiYzfCn56Q4NGit4',
// 	authDomain: 'rws-web-2c045.firebaseapp.com',
// 	databaseURL: 'https://rws-web-2c045.firebaseio.com',
// 	projectId: 'rws-web-2c045',
// 	storageBucket: 'rws-web-2c045.appspot.com',
// 	messagingSenderId: '241720943757',
// 	appId: '1:241720943757:web:a2c0d22b16162a0e8f6ec4',
// 	measurementId: 'G-ZZFHBRVG7W',
// };
// firebase.initializeApp(config);

const options = {
	confirmButtonColor: '#41b882',
	cancelButtonColor: '#ff7674',
};
const calendarOption = {
	masks: {
		title: 'MMMM YYYY',
		weekdays: 'W',
		navMonths: 'MMM',
		input: 'YYYY-MM-DD',
		data: 'YYYY-MM-DD',
	},
	datePicker: {
		popover: {
			visibility: 'click',
		},
	},
};

Vue.use(VueSweetalert2, options);
Vue.filter('formatDate', formatDate);
Vue.filter('filterDate', filterDate);
Vue.use(VCalendar, calendarOption);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
